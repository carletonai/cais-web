import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";


const SOCIAL_LINKS = [
  "https://www.instagram.com/carletonaisociety/",
  "https://discord.gg/nsvsMJaSRJ",
  "https://www.linkedin.com/company/carleton-ai",
  "https://www.youtube.com/channel/UCWKRnTa68hlHrW6WYCgCNaw",
];

interface ActionButton {
  text: string;
  to: string;
}

interface HeroProps {
  title: string;
  description: string;
  logoSrc: string;
  primaryAction?: ActionButton;
  secondaryAction?: ActionButton;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export default function Hero({
  title,
  description,
  logoSrc,
  primaryAction,
  secondaryAction,
}: HeroProps) {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const words = title.split(" ").map(word => 
    word.toLowerCase() === "ai" ? "ΛI" : word
  );

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < description.length) {
        currentText += description[currentIndex];
        setDisplayText(currentText);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [description]);

  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(0, 0, 0)" 
      gradientBackgroundEnd="rgb(20, 20, 20)"
      firstColor="255, 255, 255"
      secondColor="255, 0, 0"
      thirdColor="200, 200, 200"
      fourthColor="100, 0, 0"
      fifthColor="150, 150, 150"
      pointerColor="255, 0, 0"
      className="min-h-screen"
    >
      <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full min-h-screen pt-16 pb-32 px-4 sm:px-6 lg:px-8 relative z-10"
      >
      <div className="text-center container mx-auto relative">
        <motion.img
          variants={item}
          src={logoSrc}
          alt="CAIS Logo"
          className="h-32 md:h-40 lg:h-48 mx-auto mb-12 drop-shadow-2xl relative z-20"
            whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />


            <motion.h1
              variants={item}
              className="text-hero font-heading mb-8 flex justify-center items-center flex-wrap gap-x-4 gap-y-2"
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  className="relative inline-block text-shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, delay: i * 0.4 }}
                >
                    <span className={word === "ΛI" ? "text-primary text-glow" : "text-foreground"}>
                    {word}
                  </span>
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 font-light text-shadow-lg"
            >
              {displayText}
              {!isTypingComplete && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-primary"
                >
                  |
                </motion.span>
              )}
            </motion.p>

            <motion.div 
              variants={item}
              className="flex justify-center gap-6 mb-16"
            >
              {SOCIAL_LINKS.map((url, index) => (
                <motion.div
                  key={url}
                  className="group relative"
                    whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  custom={index}
                >
                  <SocialIcon
                    url={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10"
                    style={{ height: 40, width: 40 }}
                    bgColor="currentColor"
                    fgColor="#1a2238"
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={item}
              className="flex flex-wrap justify-center gap-6"
            >
              {primaryAction && (
                <Button 
                  asChild
                  size="lg"
                  variant="default"
                  className="h-12 px-8 text-lg"
                >
                  <Link to={primaryAction.to}>
                    {primaryAction.text}
                  </Link>
                </Button>
              )}
              {secondaryAction && (
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 text-lg"
                >
                  <Link to={secondaryAction.to}>
                    {secondaryAction.text}
                  </Link>
                </Button>
              )}
            </motion.div>
          </div>
        </motion.div>
      </BackgroundGradientAnimation>
      );
}
