import React from "react";
import { Link } from "react-router-dom";

interface ActionButton {
  label: string;
  path: string;
  primary?: boolean;
}

const HERO_CONTENT = {
  logo: {
    src: "/cais-web/transparent-club.png",
    alt: "CAIS Logo",
  },
  title: {
    main: "Carleton",
    highlight: "AI",
    end: "Society"
  },
  subtitle: "Artificial Intelligence & Machine Learning",
  description: "Join Carleton University's premier student organization dedicated to exploring and advancing AI technology. We bring students together, host workshops, and build innovative projects.",
  tagline: "Learn • Build • Connect",
  stats: [
    { label: "Active Members", value: "0" },
    { label: "Projects Built", value: "0" },
    { label: "Workshops Held", value: "0" },
  ],
  nextEvent: {
    title: "Coming Soon",
    date: "TBD",
    time: "TBD",
    location: "TBD",
  },
  socials: [
    { name: "Discord", url: "#", icon: "M9.555 5.867a20.51 20.51 0 0 1 4.89 0c.06.007.107.06.107.124v3.333c0 .071-.055.13-.125.128a17.156 17.156 0 0 0-4.854 0c-.07.002-.125-.057-.125-.128V5.991c0-.063.047-.117.107-.124zM7.674 9.547c.016-.005.03-.017.044-.028l2.32-2.32a.124.124 0 0 0-.088-.212H8.533c-.046 0-.09.024-.114.063L7.62 8.254a.125.125 0 0 0 .054.169zm4.65 0a.125.125 0 0 0 .054-.169L11.58 7.05a.125.125 0 0 0-.114-.063H10.05a.124.124 0 0 0-.088.212l2.32 2.32c.013.011.028.023.044.028z" },
    { name: "Instagram", url: "#", icon: "M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" },
    { name: "LinkedIn", url: "#", icon: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" },
  ]
};

const ACTION_BUTTONS: ActionButton[] = [
  {
    label: "Join CAIS",
    path: "/cais-web/contact",
    primary: true,
  },
  {
    label: "View Events",
    path: "/cais-web/events",
  },
];

const HomePage = () => {
  const renderActionButton = (button: ActionButton) => {
    if (button.primary) {
      return (
        <Link
          key={button.path}
          to={button.path}
          className="rounded-md bg-red-500 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 transition-all duration-200"
        >
          {button.label}
        </Link>
      );
    }
    return (
      <Link
        key={button.path}
        to={button.path}
        className="text-base font-semibold leading-6 text-gray-200 hover:text-red-400 transition-colors duration-200"
      >
        {button.label} <span aria-hidden="true">→</span>
      </Link>
    );
  };

  return (
    <div className="animate-fadeIn relative min-h-screen">
      {/* Background Gradient Effect */}
      <div className="fixed inset-0 bg-[#1a2238]" />
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 via-red-500/5 to-transparent animate-smoothGlow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/10 via-red-500/5 to-transparent animate-smoothGlow" style={{ animationDelay: '-2s' }} />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <div className="w-full">
          <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-5xl py-20 sm:py-28">
              <div className="text-center">
                <div className="flex justify-center mb-10 animate-float">
                  <img 
                    src={HERO_CONTENT.logo.src}
                    alt={HERO_CONTENT.logo.alt}
                    className="h-32 w-auto sm:h-40 md:h-48"
                  />
                </div>
                <div className="mb-8 animate-slideUp opacity-0 [animation-delay:200ms]">
                  <h1 className="relative text-5xl font-bold tracking-tight sm:text-7xl mb-4 inline-block">
                    <span className="text-white">{HERO_CONTENT.title.main} </span>
                    <span className="relative inline-block">
                      <span className="relative z-10 text-red-400 px-1">{HERO_CONTENT.title.highlight}</span>
                      <span 
                        className="absolute -inset-1 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 blur-sm animate-smoothGlow"
                        aria-hidden="true"
                      ></span>
                    </span>
                    <span className="text-white"> {HERO_CONTENT.title.end}</span>
                  </h1>
                  <p className="text-xl font-medium text-red-400">
                    {HERO_CONTENT.subtitle}
                  </p>
                </div>
                <p className="text-lg sm:text-xl leading-8 text-gray-300 max-w-2xl mx-auto mb-6 animate-slideUp opacity-0 [animation-delay:400ms]">
                  {HERO_CONTENT.description}
                </p>
                <p className="text-sm sm:text-base font-medium text-gray-400 tracking-wider mb-10 animate-slideUp opacity-0 [animation-delay:600ms]">
                  {HERO_CONTENT.tagline}
                </p>
                <div className="flex items-center justify-center gap-x-8 animate-slideUp opacity-0 [animation-delay:800ms]">
                  {ACTION_BUTTONS.map(renderActionButton)}
                </div>

                {/* Stats Section */}
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 animate-slideUp opacity-0 [animation-delay:1000ms]">
                  {HERO_CONTENT.stats.map((stat) => (
                    <div key={stat.label} className="mx-auto">
                      <p className="text-4xl font-bold tracking-tight text-red-400">{stat.value}</p>
                      <p className="mt-1 text-base text-gray-300">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Next Event Preview */}
                <div className="mt-12 animate-slideUp opacity-0 [animation-delay:1200ms]">
                  <div className="rounded-lg bg-red-500/10 p-6 max-w-md mx-auto">
                    <h3 className="text-lg font-semibold text-red-400">Next Event</h3>
                    <p className="mt-2 text-2xl font-bold text-white">{HERO_CONTENT.nextEvent.title}</p>
                    <div className="mt-3 text-gray-300">
                      <p>{HERO_CONTENT.nextEvent.date} at {HERO_CONTENT.nextEvent.time}</p>
                      <p className="text-sm">{HERO_CONTENT.nextEvent.location}</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-10 flex justify-center space-x-6 animate-slideUp opacity-0 [animation-delay:1400ms]">
                  {HERO_CONTENT.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="text-gray-300 hover:text-red-400 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">{social.name}</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 