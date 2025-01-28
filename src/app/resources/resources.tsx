import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useHotkeys } from "react-hotkeys-hook";
import teamData from "@/data/team.json";
import eventsData from "@/data/events.json";

interface Command {
  input: string;
  output: React.ReactNode;
  timestamp?: string;
  isError?: boolean;
  isSystem?: boolean;
}

interface CommandHistory {
  commands: string[];
  currentIndex: number;
}

interface ParsedCommand {
  command: string;
  args: string[];
  flags: Record<string, boolean | string>;
}

interface GameState {
  name: string;
  data: any;
}

const INITIAL_MESSAGE = `Welcome to CAIS Resources Terminal v2.0.0
Type 'help' to see available commands or press 'Tab' for auto-completion.
Try 'theme' to customize your experience!

[${new Date().toLocaleString()}] System initialized. Happy hacking! 🚀
`;

const HELP_TEXT = `
Available commands:
  help      - Show this help message
  clear     - Clear terminal
  about     - About CAIS
  links     - Show useful AI learning links
  courses   - Show recommended courses
  projects  - Show current projects
  events    - Show upcoming events
  team      - Show executive team
  join      - How to join CAIS
  calendar  - View events calendar
  contact   - Contact information
  theme     - Change terminal theme
  
Project commands:
  project <number> - View project details
  contribute      - How to contribute
  
Event commands:
  event <number>  - View event details
  rsvp <event>    - RSVP to an event
  
Special commands:
  --help    - Show command-specific help
  --version - Show command version
`;

const ABOUT_TEXT = `
CAIS (Carleton Artificial Intelligence Society)

A student club at Carleton University for anyone interested in AI and machine learning. Join us to learn, build projects, and meet others who share your interests.

What We Do:
- Organize workshops and learning sessions
- Build AI/ML projects together
- Connect students with industry opportunities
- Create a community of AI enthusiasts
`;

const LINKS = `
Essential Links:
🌐 Club Website: https://carletonai.com
🤝 Discord: https://discord.gg/nsvsMJaSRJ
📱 Instagram: https://www.instagram.com/carletonaisociety/
💼 LinkedIn: https://www.linkedin.com/company/carleton-ai
📺 YouTube: https://www.youtube.com/channel/UCWKRnTa68hlHrW6WYCgCNaw
📧 Email: carletonaicontact@gmail.com

Sign Up:
📝 Join Form: https://docs.google.com/forms/d/e/1FAIpQLSe2Bvvr6NCrHmb9fdtqRxR3v-6QmGqi2E-4p112TNFDZrcX5w/viewform

Learning Resources:
📘 Fast.ai: https://www.fast.ai/
🤗 Hugging Face: https://huggingface.co/
📊 Kaggle: https://www.kaggle.com/
📝 Papers With Code: https://paperswithcode.com/
`;

const COURSES = `
Recommended Learning Path:

1. Foundations (Start Here)
   - COMP 3105: Introduction to Machine Learning
   - Python Programming Fundamentals
   - Mathematics for ML (Linear Algebra, Calculus, Statistics)

2. Core ML/AI Courses
   - COMP 4107: Neural Networks
   - COMP 4905: AI Special Topics
   - COMP 3106: Introduction to AI

3. Complementary Skills
   - Data Structures and Algorithms
   - Data Science and Visualization
   - Software Engineering Practices

4. External Resources
   - Fast.ai Practical Deep Learning
   - DeepLearning.AI Specializations
   - Stanford CS231n (Computer Vision)
   - Stanford CS224n (NLP)

5. Hands-on Projects
   - Join our project teams
   - Participate in ML competitions
   - Contribute to open-source AI projects
`;

const PROJECTS = `
Current CAIS Projects:

1. 🌐 CAIS Website Development
   - Modern web platform for AI resources
   - Tech stack: Next.js, TypeScript, TailwindCSS
   - Status: Active Development

2. 🤖 ML Study Group Projects
   - Weekly meetings and hands-on coding
   - Current focus: Computer Vision
   - Open for new members

3. 🎓 Workshop Materials
   - Creating educational content
   - Topics: ML basics, Deep Learning, MLOps
   - Looking for contributors

4. 🔬 Research Reading Group
   - Weekly paper discussions
   - Focus on latest AI developments
   - All skill levels welcome

5. 🤝 Industry Partnership Program
   - Connecting students with AI companies
   - Resume workshop series
   - Mock interviews

Type 'project <number>' for more details.
`;

const EVENTS = `
Upcoming Events:

${eventsData.events
  .map(
    (event, index) => `
${index + 1}. ${
      event.type === "Workshop"
        ? "🎯"
        : event.type === "Panel"
          ? "🤝"
          : event.type === "Symposium"
            ? "🎓"
            : "📅"
    } ${event.title}
   Date: ${new Date(event.date).toLocaleDateString()} at ${event.time}
   Location: ${event.location}
   Details: ${event.description}
   Tags: ${event.tags.map((tag) => `#${tag}`).join(" ")}
   ${event.rsvpLink ? `RSVP: ${event.rsvpLink}` : ""}
`
  )
  .join("\n")}

Type 'event <number>' for more details or 'calendar' to view full schedule.
`;

const TEAM = `
CAIS Executive Team 2023-2024:

${teamData.members
  .map(
    (member) => `
${
  member.title === "Co-President"
    ? "👑"
    : member.title.includes("Academic")
      ? "🎓"
      : member.title.includes("Events")
        ? "📅"
        : member.title.includes("Finance")
          ? "💰"
          : member.title.includes("Community")
            ? "🤝"
            : "📱"
} ${member.title}
   - ${member.name}
   - ${member.description}
   ${member.linkedinURL ? `   - LinkedIn: ${member.linkedinURL}` : ""}
`
  )
  .join("\n")}

Contact us: carletonaicontact@gmail.com
`;

const ASCII_ART = {
  cais: `
   ██████╗ █████╗ ██╗███████╗
  ██╔════╝██╔══██╗██║██╔════╝
  ██║     ███████║██║███████╗
  ██║     ██╔══██║██║╚════██║
  ╚██████╗██║  ██║██║███████║
   ╚═════╝╚═╝  ╚═╝╚═╝╚══════╝
  `,
  robot: `
   __,_, 
  [_|_/  
   //    
 _//    __
(_|)   |@@|
 \\ \\__ \\--/ __
  \\o__|----|  |   __
      \\ }{ /\\ )_ / _\\
      /\\__/\\ \\__O (__
     (--/\\--)    \\__/
     _)(  )(_
    \`---''---'
  `,
  matrix: `
  ╔╦╗┌─┐┌┬┐┬─┐┬─┐ ┬
  ║║║├─┤ │ ├┬┘│┌┴┬┘
  ╩ ╩┴ ┴ ┴ ┴└─┴┴ └─
  `,
};

const THEMES = {
  default: {
    primary: "text-primary",
    background: "bg-background",
    accent: "text-blue-400",
    gradient: "from-primary via-primary/80 to-primary/50",
    inputBg: "bg-black/20",
  },
  cyberpunk: {
    primary: "text-pink-500",
    background: "bg-gradient-to-br from-purple-900 via-black to-blue-900",
    accent: "text-yellow-400",
    gradient: "from-pink-500 via-purple-500 to-blue-500",
    inputBg: "bg-purple-900/20",
  },
  matrix: {
    primary: "text-green-500",
    background: "bg-black",
    accent: "text-green-300",
    gradient: "from-green-400 via-green-500 to-green-600",
    inputBg: "bg-green-900/20",
  },
  retro: {
    primary: "text-amber-500",
    background: "bg-amber-900",
    accent: "text-amber-300",
    gradient: "from-amber-400 via-amber-500 to-amber-600",
    inputBg: "bg-amber-900/20",
  },
};

const EASTER_EGGS = {
  matrix: "Wake up, Neo...",
  konami: "↑↑↓↓←→←→BA",
  coffee: "☕ Here's your virtual coffee!",
  hack: "ACCESS GRANTED. Just kidding! 😉",
  rickroll: "Never gonna give you up...",
};

interface CommandOutput {
  content: React.ReactNode;
  isError?: boolean;
  isSystem?: boolean;
  isAscii?: boolean;
}

const AI_QUOTES = [
  "The question of whether a computer can think is like the question of whether a submarine can swim. - Edsger W. Dijkstra",
  "AI is whatever hasn't been done yet. - Douglas Hofstadter",
  "The real question is not whether machines think but whether men do. - B.F. Skinner",
  "Artificial intelligence is the science of making machines do things that would require intelligence if done by men. - Marvin Minsky",
];

const GAMES = {
  guess: "Guess the number (1-100)",
  quiz: "AI Quiz (coming soon)",
  tic: "Tic Tac Toe vs AI (coming soon)",
};

const STATS = {
  members: 150,
  projects: 25,
  papers: 42,
  coffee: 1337,
};

// Add cool animations
const ANIMATIONS = {
  hack: [
    "Initializing hack sequence...",
    "Bypassing mainframe...",
    "Accessing neural networks...",
    "Downloading training data...",
    "Breaking encryption...",
    "Access granted! 🎉",
  ],
  loading: [],
  boot: (currentTheme: keyof typeof THEMES, isBooting: boolean) => [
    <div
      key="ascii"
      className="flex flex-col items-center justify-center min-h-[40vh] py-8"
    >
      <pre
        className={cn(
          "font-mono text-center whitespace-pre",
          THEMES[currentTheme].primary
        )}
      >
        {ASCII_ART.cais}
      </pre>
      <div className="mt-4 text-sm text-red-500">
        {isBooting ? "Initializing" : "Completed"} CAIS Terminal v2.0.0
      </div>
    </div>,
    <div
      key="loading"
      className={cn("text-center", THEMES[currentTheme].primary)}
    >
      Loading AI modules...
      <div
        className={cn(
          "h-1 w-48 mx-auto mt-2 rounded-full overflow-hidden",
          THEMES[currentTheme].inputBg
        )}
      >
        <div
          className={cn(
            "h-full animate-progress rounded-full",
            THEMES[currentTheme].accent
          )}
          style={{ width: "25%" }}
        />
      </div>
    </div>,
    <div
      key="calibrating"
      className={cn("text-center", THEMES[currentTheme].primary)}
    >
      Calibrating neural networks...
      <div
        className={cn(
          "h-1 w-48 mx-auto mt-2 rounded-full overflow-hidden",
          THEMES[currentTheme].inputBg
        )}
      >
        <div
          className={cn(
            "h-full animate-progress rounded-full",
            THEMES[currentTheme].accent
          )}
          style={{ width: "50%" }}
        />
      </div>
    </div>,
    <div
      key="establishing"
      className={cn("text-center", THEMES[currentTheme].primary)}
    >
      Establishing quantum connections...
      <div
        className={cn(
          "h-1 w-48 mx-auto mt-2 rounded-full overflow-hidden",
          THEMES[currentTheme].inputBg
        )}
      >
        <div
          className={cn(
            "h-full animate-progress rounded-full",
            THEMES[currentTheme].accent
          )}
          style={{ width: "75%" }}
        />
      </div>
    </div>,
    <div
      key="ready"
      className={cn("text-center", THEMES[currentTheme].primary)}
    >
      {INITIAL_MESSAGE}
      <div
        className={cn(
          "h-1 w-48 mx-auto mt-2 rounded-full overflow-hidden",
          THEMES[currentTheme].inputBg
        )}
      >
        <div
          className={cn(
            "h-full animate-progress rounded-full",
            THEMES[currentTheme].accent
          )}
          style={{ width: "100%" }}
        />
      </div>
    </div>,
  ],
  shutdown: [
    "Saving session state...",
    "Deactivating AI cores...",
    "Clearing quantum memory...",
    "Goodbye! 👋",
  ],
};

const progressAnimation = {
  "@keyframes progress": {
    "0%": { width: "0%" },
    "100%": { width: "100%" },
  },
};

const KEYBOARD_SHORTCUTS = `
Keyboard Shortcuts:
  Ctrl + L    - Clear terminal
  Ctrl + K    - Clear current input
  Up/Down     - Navigate command history
  Tab         - Autocomplete command
  Ctrl + M    - Toggle matrix mode
  Ctrl + T    - Cycle through themes
  Esc         - Cancel current command
`;

const makeLinksClickable = (text: string): React.ReactNode => {
  const urlPattern =
    /(https?:\/\/[^\s]+)|(\b\w+:\/\/[^\s]+)|(www\.[^\s]+)|(@\w+)|(\/(company|carleton-ai)\/[^\s]+)/g;

  const parts = text.split(urlPattern);

  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;
        if (part.match(urlPattern)) {
          let href = part;
          if (part.startsWith("www.")) {
            href = "https://" + part;
          }
          if (part.startsWith("@")) {
            href = "https://instagram.com/" + part.slice(1);
          }
          if (part.startsWith("/company/")) {
            href = "https://linkedin.com" + part;
          }
          if (part.startsWith("/carleton-ai")) {
            href = "https://github.com" + part;
          }

          return (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 hover:underline cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {part}
            </a>
          );
        }
        return part;
      })}
    </>
  );
};

const Resources = () => {
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [history, setHistory] = useState<CommandHistory>({
    commands: [],
    currentIndex: -1,
  });
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [theme, setTheme] = useState<
    "default" | "cyberpunk" | "retro" | "matrix"
  >("default");
  const [isBooting, setIsBooting] = useState(true);
  const [konamiProgress, setKonamiProgress] = useState<string[]>([]);
  const [currentGame, setCurrentGame] = useState<GameState | null>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const hasBooted = useRef(false);

  const parseCommand = (input: string): ParsedCommand => {
    const parts = input.trim().split(" ");
    const command = parts[0].toLowerCase();
    const args: string[] = [];
    const flags: Record<string, boolean | string> = {};

    for (let i = 1; i < parts.length; i++) {
      const part = parts[i];
      if (part.startsWith("--")) {
        const [key, value] = part.slice(2).split("=");
        flags[key] = value || true;
      } else if (part.startsWith("-")) {
        part
          .slice(1)
          .split("")
          .forEach((flag) => (flags[flag] = true));
      } else {
        args.push(part);
      }
    }

    return { command, args, flags };
  };

  const addCommand = (
    input: string,
    output: React.ReactNode | string,
    isError = false,
    isSystem = false
  ) => {
    const timestamp = new Date().toLocaleString();
    const processedOutput =
      typeof output === "string" ? makeLinksClickable(output) : output;

    const newCommand = {
      input,
      output: processedOutput,
      timestamp,
      isError,
      isSystem,
    };

    setCommands((prev) => {
      const newCommands = [...prev, newCommand];
      const terminal = terminalEndRef.current;
      if (terminal) {
        if (
          isSystem ||
          terminal.scrollTop + terminal.clientHeight >=
            terminal.scrollHeight - 100
        ) {
          setTimeout(scrollToBottom, 50);
        }
      }
      return newCommands;
    });

    setHistory((prev) => ({
      commands: [...prev.commands, input],
      currentIndex: -1,
    }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isBooting) return;

    if (e.key === "Tab") {
      e.preventDefault();
      const availableCommands = [
        "help",
        "clear",
        "about",
        "links",
        "courses",
        "projects",
        "theme",
      ];
      const matchingCommands = availableCommands.filter((cmd) =>
        cmd.startsWith(currentInput.toLowerCase())
      );

      if (matchingCommands.length === 1) {
        setCurrentInput(matchingCommands[0]);
        setSuggestions([]);
        setShowSuggestions(false);
      } else if (matchingCommands.length > 1) {
        setSuggestions(matchingCommands);
        setShowSuggestions(true);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.commands.length > 0) {
        const newIndex = history.currentIndex + 1;
        if (newIndex < history.commands.length) {
          setHistory((prev) => ({ ...prev, currentIndex: newIndex }));
          setCurrentInput(
            history.commands[history.commands.length - 1 - newIndex]
          );
        }
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (history.currentIndex > -1) {
        const newIndex = history.currentIndex - 1;
        setHistory((prev) => ({ ...prev, currentIndex: newIndex }));
        setCurrentInput(
          newIndex === -1
            ? ""
            : history.commands[history.commands.length - 1 - newIndex]
        );
      }
    } else if (e.key === "Enter") {
      if (currentGame) {
        switch (currentGame.name) {
          case "guess":
            handleGuessGame(currentInput, currentGame.data);
            break;
        }
        setCurrentInput("");
      } else {
        const parsed = parseCommand(currentInput);
        handleCommand(parsed);
        setCurrentInput("");
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }
  };

  const scrollToBottom = () => {
    const terminal = terminalEndRef.current;
    if (terminal) {
      terminal.scrollTo({
        top: terminal.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const bootSequence = async () => {
      if (hasBooted.current || !isBooting) return;
      hasBooted.current = true;

      setCommands([]);

      setCommands([
        {
          input: "",
          output: ANIMATIONS.boot(theme, true)[0],
          timestamp: new Date().toLocaleString(),
          isSystem: true,
        },
      ]);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const bootMessages = ANIMATIONS.boot(theme, true);
      for (let i = 1; i < bootMessages.length; i++) {
        setCommands((prev) => [
          ...prev,
          {
            input: "",
            output: bootMessages[i],
            timestamp: new Date().toLocaleString(),
            isSystem: true,
          },
        ]);
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setCommands((prev) => [
        {
          ...prev[0],
          output: ANIMATIONS.boot(theme, false)[0],
        },
        ...prev.slice(1),
      ]);

      setTimeout(scrollToBottom, 100);
      setIsBooting(false);
    };

    bootSequence();
  }, [theme, isBooting]);

  useHotkeys("ctrl+l", (e: KeyboardEvent) => {
    e.preventDefault();
    setCommands([]);
  });

  useHotkeys("ctrl+k", (e: KeyboardEvent) => {
    e.preventDefault();
    setCurrentInput("");
  });

  useHotkeys("ctrl+m", (e: KeyboardEvent) => {
    e.preventDefault();
    setTheme((prev) => (prev === "matrix" ? "default" : "matrix"));
  });

  useHotkeys("ctrl+t", (e: KeyboardEvent) => {
    e.preventDefault();
    const themes = Object.keys(THEMES);
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex] as keyof typeof THEMES);
  });

  useHotkeys("esc", (e: KeyboardEvent) => {
    e.preventDefault();
    setCurrentInput("");
    setSuggestions([]);
    setShowSuggestions(false);
  });

  useEffect(() => {
    const handleKonami = (e: KeyboardEvent): void => {
      const konamiCode = [
        "ArrowUp",
        "ArrowUp",
        "ArrowDown",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowLeft",
        "ArrowRight",
        "b",
        "a",
        "Enter",
      ];

      setKonamiProgress((prev) => {
        const newProgress = [...prev, e.key].slice(-konamiCode.length);
        if (JSON.stringify(newProgress) === JSON.stringify(konamiCode)) {
          addCommand("", EASTER_EGGS.konami, false, true);
          addCommand("", EASTER_EGGS.rickroll, false, true);
          return [];
        }
        return newProgress;
      });
    };

    window.addEventListener("keydown", handleKonami);
    return () => window.removeEventListener("keydown", handleKonami);
  }, []);

  const handleCommand = (parsed: ParsedCommand) => {
    const { command, args, flags } = parsed;
    let output: CommandOutput = {
      content: "Command not found. Type 'help' for available commands.",
      isError: true,
    };

    if (flags.version) {
      output = {
        content: `${command} version 1.0.0`,
        isSystem: true,
      };
      addCommand([command, "--version"].join(" "), output.content, false, true);
      return;
    }

    if (flags.help) {
      output = {
        content: `Help for ${command}:\n${getCommandHelp(command)}`,
        isSystem: true,
      };
      addCommand([command, "--help"].join(" "), output.content, output.isError);
      return;
    }

    switch (command) {
      case "help":
        output = {
          content: HELP_TEXT,
          isSystem: true,
        };
        break;
      case "clear":
        setCommands([]);
        return;
      case "about":
        output = {
          content: ABOUT_TEXT,
          isSystem: true,
        };
        break;
      case "links":
        output = {
          content: LINKS,
          isSystem: true,
        };
        break;
      case "courses":
        output = {
          content: COURSES,
          isSystem: true,
        };
        break;
      case "projects":
        output = {
          content: PROJECTS,
          isSystem: true,
        };
        break;
      case "ascii":
        const art = args[0] && ASCII_ART[args[0] as keyof typeof ASCII_ART];
        output = {
          content: art || "Available art: " + Object.keys(ASCII_ART).join(", "),
          isAscii: true,
        };
        break;
      case "theme":
        const newTheme = args[0] as keyof typeof THEMES;
        if (THEMES[newTheme]) {
          setTheme(newTheme);
          output = {
            content: `Theme changed to ${newTheme}`,
            isSystem: true,
          };
        } else {
          output = {
            content: `Available themes: ${Object.keys(THEMES).join(", ")}`,
            isSystem: true,
          };
        }
        break;
      case "matrix":
        output = {
          content: (
            <div className="matrix-effect">
              {ASCII_ART.matrix}
              <div className="mt-2">{EASTER_EGGS.matrix}</div>
            </div>
          ),
          isAscii: true,
        };
        break;
      case "coffee":
        output = {
          content: EASTER_EGGS.coffee,
          isSystem: true,
        };
        break;
      case "quote":
        const randomQuote =
          AI_QUOTES[Math.floor(Math.random() * AI_QUOTES.length)];
        output = {
          content: randomQuote,
          isSystem: true,
        };
        break;
      case "stats":
        output = {
          content: (
            <div className="space-y-2">
              <div className="text-xl font-bold">CAIS Stats 📊</div>
              <div>Members: {STATS.members} 👥</div>
              <div>Active Projects: {STATS.projects} 🚀</div>
              <div>Published Papers: {STATS.papers} 📑</div>
              <div>Cups of Coffee: {STATS.coffee} ☕</div>
            </div>
          ),
          isSystem: true,
        };
        break;
      case "game":
        const game = args[0];
        if (game && GAMES[game as keyof typeof GAMES]) {
          startGame(game as keyof typeof GAMES);
          output = {
            content: `Starting ${GAMES[game as keyof typeof GAMES]}...`,
            isSystem: true,
          };
        } else {
          output = {
            content: `Available games:\n${Object.entries(GAMES)
              .map(([key, value]) => `  ${key} - ${value}`)
              .join("\n")}`,
            isSystem: true,
          };
        }
        break;
      case "hack":
        output = {
          content: (
            <div className="space-y-1 text-green-500">
              {ANIMATIONS.hack.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.5 }}
                >
                  {line}
                </motion.div>
              ))}
            </div>
          ),
          isSystem: true,
        };
        break;
      case "weather":
        output = {
          content: (
            <div className="space-y-2">
              <div>🤖 AI Weather Forecast</div>
              <div>Current condition: Training in progress</div>
              <div>Temperature: 98% GPU utilization</div>
              <div>Humidity: 42% validation accuracy</div>
              <div>Wind: 3.14 gradients per second</div>
            </div>
          ),
          isSystem: true,
        };
        break;
      case "shortcuts":
        output = {
          content: KEYBOARD_SHORTCUTS,
          isSystem: true,
        };
        break;
      case "shutdown":
        output = {
          content: (
            <div className="space-y-1">
              {ANIMATIONS.shutdown.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.5 }}
                >
                  {line}
                </motion.div>
              ))}
            </div>
          ),
          isSystem: true,
        };
        break;
      case "events":
        output = {
          content: EVENTS,
          isSystem: true,
        };
        break;
      case "team":
        output = {
          content: TEAM,
          isSystem: true,
        };
        break;
      case "join":
        output = {
          content: `
How to Join CAIS:

1. Fill out our Sign-up Form:
   https://docs.google.com/forms/d/e/1FAIpQLSe2Bvvr6NCrHmb9fdtqRxR3v-6QmGqi2E-4p112TNFDZrcX5w/viewform

2. Join our Community:
   - Discord: https://discord.gg/nsvsMJaSRJ
   - Instagram: @carletonaisociety
   - LinkedIn: /company/carleton-ai

3. Get Involved:
   - Attend our events and workshops
   - Join project teams
   - Participate in discussions
   - Share your knowledge

Benefits:
- Learn about AI/ML through hands-on experience
- Build projects with fellow enthusiasts
- Network with industry professionals
    `,
          isSystem: true,
        };
        break;
      case "contact":
        output = {
          content: `
📧 Email: carletonaicontact@gmail.com
📝 Sign Up Form: https://docs.google.com/forms/d/e/1FAIpQLSe2Bvvr6NCrHmb9fdtqRxR3v-6QmGqi2E-4p112TNFDZrcX5w/viewform
🤝 Discord: https://discord.gg/nsvsMJaSRJ
📱 Instagram: https://www.instagram.com/carletonaisociety/
💼 LinkedIn: https://www.linkedin.com/company/carleton-ai
📺 YouTube: https://www.youtube.com/channel/UCWKRnTa68hlHrW6WYCgCNaw
    `,
          isSystem: true,
        };
        break;
      case "contribute":
        output = {
          content: `
Ways to Contribute to CAIS:

1. Join Project Teams
   - Website Development
   - Workshop Content Creation
   - Research Reading Group

2. Share Your Knowledge
   - Give a workshop
   - Write tutorials
   - Mentor beginners

3. Organize Events
   - Help with workshops
   - Event planning
   - Social media

4. Technical Contributions
   - GitHub projects
   - Documentation
   - Resource curation

Contact us or join Discord to get started!
          `,
          isSystem: true,
        };
        break;
      case "event":
        if (args[0] && parseInt(args[0]) <= eventsData.events.length) {
          const eventIndex = parseInt(args[0]) - 1;
          const event = eventsData.events[eventIndex];
          output = {
            content: makeLinksClickable(`
Event Details:

${event.type === "Workshop" ? "🎯" : event.type === "Panel" ? "🤝" : event.type === "Symposium" ? "🎓" : "📅"} ${event.title}

Date: ${new Date(event.date).toLocaleDateString()}
Time: ${event.time}
Location: ${event.location}
Type: ${event.type}

Description:
${event.description}

Tags: ${event.tags.map((tag) => `#${tag}`).join(" ")}
${event.rsvpLink ? `\nRSVP Link: ${event.rsvpLink}` : ""}
            `),
            isSystem: true,
          };
        } else {
          output = {
            content:
              "Please specify a valid event number. Use 'events' to see all events.",
            isError: true,
          };
        }
        break;
      case "rsvp":
        if (args[0] && parseInt(args[0]) <= eventsData.events.length) {
          const eventIndex = parseInt(args[0]) - 1;
          const event = eventsData.events[eventIndex];
          if (event.rsvpLink) {
            output = {
              content: `Opening RSVP form for "${event.title}": ${event.rsvpLink}`,
              isSystem: true,
            };
          } else {
            output = {
              content: "No RSVP link available for this event.",
              isError: true,
            };
          }
        } else {
          output = {
            content:
              "Please specify a valid event number. Use 'events' to see all events.",
            isError: true,
          };
        }
        break;
      case "project":
        if (args[0] && parseInt(args[0]) <= 5) {
          const projectNum = parseInt(args[0]);
          let projectDetails;

          switch (projectNum) {
            case 1:
              projectDetails = `
🌐 CAIS Website Development

Description:
- Building a modern web platform for AI resources and community engagement
- Creating an interactive terminal interface for resource access
- Implementing responsive design for all devices

Tech Stack:
- Next.js for frontend framework
- TypeScript for type safety
- TailwindCSS for styling
- Framer Motion for animations

Status: Active Development
Looking for: Frontend developers, UI/UX designers

Get involved: 
- GitHub: /carleton-ai/website
- Contact: developers@carletonai.com
`;
              break;
            case 2:
              projectDetails = `
🤖 ML Study Group Projects

Description:
- Weekly collaborative learning sessions
- Hands-on implementation of ML algorithms
- Current focus: Computer Vision applications

Current Projects:
- Image classification using CNNs
- Object detection implementation
- Transfer learning experiments

Schedule:
- Meetings: Every Wednesday, 6:00 PM
- Location: HP 4125
- Discord channel: #ml-study-group

Join us:
- All skill levels welcome
- Bring your laptop and enthusiasm
- No prior ML experience required
`;
              break;
            case 3:
              projectDetails = `
🎓 Workshop Materials Development

Description:
- Creating comprehensive AI/ML educational content
- Developing hands-on tutorials and exercises
- Building a resource library for future reference

Current Focus:
- ML fundamentals workshop series
- Deep Learning practical guides
- MLOps best practices

Looking for contributors:
- Content creators
- Technical writers
- Workshop presenters
- Code example developers

Contact: workshops@carletonai.com
`;
              break;
            case 4:
              projectDetails = `
🔬 Research Reading Group

Description:
- Weekly paper discussions
- Focus on latest AI developments
- Critical analysis and implementation ideas

Current Topics:
- Large Language Models
- Reinforcement Learning
- AI Safety and Ethics

Schedule:
- Biweekly Thursdays
- Location: Discord Voice Channel
- Time: 7:00 PM - 8:30 PM

How to participate:
- Join #research-papers on Discord
- Submit paper suggestions
- Present papers (optional)
`;
              break;
            case 5:
              projectDetails = `
🤝 Industry Partnership Program

Description:
- Building bridges between students and AI companies
- Organizing industry networking events
- Facilitating internship opportunities

Current Initiatives:
- Resume workshop series
- Mock interview sessions
- Industry speaker events
- Company visit programs

Get Involved:
- Join #careers channel on Discord
- Attend networking events
- Volunteer as a mock interviewer

Contact: partnerships@carletonai.com
`;
              break;
            default:
              projectDetails = "Project number not found.";
          }

          output = {
            content: makeLinksClickable(projectDetails),
            isSystem: true,
          };
        } else {
          output = {
            content:
              "Please specify a valid project number (1-5). Use 'projects' to see all projects.",
            isError: true,
          };
        }
        break;
    }

    addCommand([command, ...args].join(" "), output.content, output.isError);
  };

  const getCommandHelp = (command: string): string => {
    const helpText: Record<string, string> = {
      help: "Show available commands and their usage",
      theme:
        "Change terminal theme\nUsage: theme <name>\nThemes: " +
        Object.keys(THEMES).join(", "),
      ascii:
        "Display ASCII art\nUsage: ascii <name>\nArt: " +
        Object.keys(ASCII_ART).join(", "),
      game:
        "Play terminal games\nUsage: game <name>\nGames: " +
        Object.keys(GAMES).join(", "),
      hack: "Start a fun hacking animation",
      stats: "Display CAIS statistics",
      weather: "Show AI weather forecast",
      quote: "Get an inspirational AI quote",
    };

    return helpText[command] || "No help available for this command";
  };

  const startGame = (gameName: keyof typeof GAMES) => {
    switch (gameName) {
      case "guess":
        setCurrentGame({
          name: "guess",
          data: {
            number: Math.floor(Math.random() * 100) + 1,
            attempts: 0,
            maxAttempts: 7,
          },
        });
        addCommand(
          `game ${gameName}`,
          <div className="space-y-2">
            <div>🔢 I'm thinking of a number between 1-100</div>
            <div>🎯 You have 7 attempts to guess it</div>
            <div>Type your guess below:</div>
          </div>,
          false,
          true
        );
        break;
    }
  };

  const handleGuessGame = (input: string, gameData: any) => {
    const guess = parseInt(input);
    let message;
    let gameOver = false;

    if (isNaN(guess)) {
      message = "Please enter a valid number";
    } else {
      gameData.attempts++;
      if (guess === gameData.number) {
        message = `🎉 Correct! You won in ${gameData.attempts} attempts!`;
        gameOver = true;
      } else if (guess < gameData.number) {
        message = "📈 Try higher";
      } else {
        message = "📉 Try lower";
      }

      if (gameData.attempts >= gameData.maxAttempts) {
        message = `💥 Game Over! The number was ${gameData.number}`;
        gameOver = true;
      }
    }

    addCommand(
      input,
      <div className="flex items-center gap-2">
        <span>{message}</span>
        {!gameOver && (
          <span>({gameData.maxAttempts - gameData.attempts} left)</span>
        )}
      </div>,
      false,
      true
    );

    if (gameOver) setCurrentGame(null);
  };

  return (
    <div
      className={cn(
        "min-h-screen relative overflow-hidden",
        THEMES[theme].background
      )}
    >
      {}
      <AnimatePresence>
        {theme === "matrix" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 matrix-rain"
          />
        )}
      </AnimatePresence>

      {}
      <div className="absolute inset-0 bg-glow opacity-30" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-b",
          theme === "matrix"
            ? "from-green-900/0 via-green-900/20 to-black"
            : "from-black/0 via-black/20 to-background"
        )}
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className={cn(
              "text-4xl sm:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent",
              "bg-gradient-to-r",
              THEMES[theme].gradient
            )}
          >
            CAIS Resources Terminal
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={cn(
            "max-w-4xl mx-auto mt-8 p-4 rounded-lg",
            "bg-black/50 backdrop-blur-sm",
            "border border-primary/10",
            "font-mono text-sm sm:text-base",
            "shadow-lg shadow-primary/10",
            theme === "matrix" ? "matrix-scrollbar" : "terminal-scrollbar"
          )}
        >
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-primary/10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div
              className={cn(
                "flex-1 text-center text-xs",
                THEMES[theme].primary
              )}
            >
              CAIS Terminal - {theme.charAt(0).toUpperCase() + theme.slice(1)}{" "}
              Mode
            </div>
          </div>

          <div
            className={cn(
              "h-[60vh] overflow-y-auto mb-4 space-y-2",
              theme === "matrix" ? "matrix-scrollbar" : "terminal-scrollbar"
            )}
            style={{
              scrollbarWidth: "thin",
              scrollbarColor:
                theme === "matrix"
                  ? "rgba(0, 255, 0, 0.4) rgba(0, 0, 0, 0.1)"
                  : "rgba(136, 136, 136, 0.5) rgba(255, 255, 255, 0.05)",
            }}
            ref={terminalEndRef}
            onClick={() => inputRef.current?.focus()}
          >
            {commands.map((cmd, i) => (
              <div key={i}>
                {cmd.input && (
                  <div
                    className={cn(
                      "flex items-center gap-2",
                      THEMES[theme].primary
                    )}
                  >
                    <span>{">"}</span>
                    <span>{cmd.input}</span>
                    {cmd.timestamp && (
                      <span className="text-xs opacity-50">
                        [{cmd.timestamp}]
                      </span>
                    )}
                  </div>
                )}
                <div
                  className={cn(
                    "whitespace-pre-wrap",
                    cmd.isError
                      ? "text-red-500"
                      : cmd.isSystem
                        ? THEMES[theme].accent
                        : "text-muted-foreground",
                    typeof cmd.output === "object" && "w-full"
                  )}
                >
                  {cmd.output}
                </div>
              </div>
            ))}
            {}
            <div
              className={cn("flex items-center gap-2", THEMES[theme].primary)}
            >
              <span>{">"}</span>
              <input
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className={cn(
                  "flex-1 bg-transparent border-none outline-none",
                  THEMES[theme].primary,
                  "placeholder:text-opacity-50",
                  isBooting && "cursor-not-allowed opacity-50"
                )}
                placeholder={
                  isBooting ? "Initializing..." : "Type a command..."
                }
                spellCheck={false}
                autoFocus
                ref={inputRef}
                disabled={isBooting}
              />
              {isBooting && (
                <div
                  className={cn("text-xs animate-pulse", THEMES[theme].primary)}
                >
                  System initializing...
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {}
      {showSuggestions && suggestions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute bottom-full left-0 mb-2 bg-black/80 border border-primary/20 rounded-md p-2"
        >
          {suggestions.map((suggestion, i) => (
            <div
              key={i}
              className="cursor-pointer hover:text-primary px-2 py-1"
              onClick={() => {
                setCurrentInput(suggestion);
                setShowSuggestions(false);
                inputRef.current?.focus();
              }}
            >
              {suggestion}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Resources;
