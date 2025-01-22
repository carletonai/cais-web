import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

const SOCIAL_LINKS = [
  {
    url: "https://www.instagram.com/carletonaisociety/",
    label: "Instagram",
    priority: false
  },
  {
    url: "https://discord.gg/nsvsMJaSRJ",
    label: "Discord",
    priority: true
  },
  {
    url: "https://www.linkedin.com/company/carleton-ai",
    label: "LinkedIn",
    priority: false
  },
  {
    url: "https://www.youtube.com/channel/UCWKRnTa68hlHrW6WYCgCNaw",
    label: "YouTube",
    priority: false
  },
];

interface ActionButton {
  text: string;
  to: string;
}

interface HeroProps {
  description: string;
  logoSrc: string;
  primaryAction?: ActionButton;
  secondaryAction?: ActionButton;
}

const animations = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  },
  item: {
    hidden: { opacity: 0, y: 10 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }
};

export default function Hero({
  description,
  logoSrc,
  primaryAction,
  secondaryAction,
}: HeroProps) {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);



  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i <= description.length; i++) {
        setDisplayText(description.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 30));
      }
      setIsTypingComplete(true);
    };
    typeText();
  }, [description]);

  return (
    <div className="relative min-h-[85vh] bg-black overflow-hidden">
      <div className="absolute inset-0 bg-glow opacity-80" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      
        <motion.div
        variants={animations.container}
        initial="hidden"
        animate="show"
        className="relative z-10 container mx-auto px-4 min-h-[85vh] flex flex-col justify-center pb-12 pt-16"
        >
        <div className="text-center space-y-8">
            <motion.img
            variants={animations.item}
            src={logoSrc}
            alt="CAIS Logo"
            className="h-24 md:h-32 lg:h-36 mx-auto drop-shadow-lg"
            />


        <motion.div variants={animations.item}>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
          Carleton <span className="text-primary font-mono inline-block mx-2 drop-shadow-[0_0_8px_rgba(226,56,63,0.3)]">ΛI</span> Society
          </h1>
        </motion.div>

        <motion.div 
          variants={animations.item} 
          className="mx-auto max-w-2xl h-[6rem] overflow-hidden"
        >

          <p className="text-lg leading-8 text-muted-foreground/90">
          <span className="relative">
            {displayText}
            {!isTypingComplete && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-primary ml-1 inline-block"
            >
              |
            </motion.span>
            )}
          </span>
          </p>
        </motion.div>

        <motion.div 
        variants={animations.item}
        className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4"
        >
        {SOCIAL_LINKS.filter(link => link.priority).map(({ url, label }) => (
          <Button
          key={url}
          size="lg"
          variant="default"
            className={`h-14 px-8 glass-hover group ${
            label === "Discord" 
              ? 'bg-primary/90 hover:bg-primary text-white font-semibold shadow-md hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02] transition-all duration-300 ease-out border border-primary/20 relative overflow-hidden text-lg' 
              : ''
            }`}
            asChild
            >
            <a href={url} target="_blank" rel="noopener noreferrer">
            {label === "Discord" ? (
              <>
                <FaDiscord className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Discord
              </>
            ) : (
            <>View on {label}</>
            )}
          </a>
          </Button>
        ))}
        </motion.div>

        <motion.div 
        variants={animations.item}
        className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3"
        >
        {SOCIAL_LINKS.filter(link => !link.priority).map(({ url }) => (
          <motion.div
          key={url}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
          <SocialIcon
            url={url}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-75 hover:opacity-100 transition-opacity"
            style={{ height: 36, width: 36 }}
            bgColor="currentColor"
            fgColor="#1a2238"
          />
          </motion.div>
        ))}
        </motion.div>

        {(primaryAction || secondaryAction) && (
        <motion.div 
            variants={animations.item}
            className="flex flex-wrap justify-center gap-6"
        >
            {primaryAction && (
            <Button asChild variant="outline" size="default" className="h-10 px-6 glass-hover hover:bg-primary/5 hover:border-primary/50 transition-all duration-300">
              <Link to={primaryAction.to}>{primaryAction.text}</Link>
            </Button>
            )}
            {secondaryAction && (
            <Button asChild variant="outline" size="default" className="h-10 px-6 glass-hover hover:bg-primary/5 hover:border-primary/50 transition-all duration-300">
              <Link to={secondaryAction.to}>{secondaryAction.text}</Link>
            </Button>
            )}
        </motion.div>
        )}
        </div>
      </motion.div>
    </div>
  );
}
