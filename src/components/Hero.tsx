import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

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
    <div className="min-h-screen w-full bg-[#1a2238] overflow-hidden">
      <div className="fixed inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
        >
          <motion.div
            animate={{
              x: [0, 10, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute -top-[10%] -left-[20%] w-[100vw] h-[70vh] rounded-[100%] bg-gradient-to-br from-red-500/10 via-red-500/5 to-transparent blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -15, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-[40%] -right-[10%] w-[90vw] h-[60vh] rounded-[100%] bg-gradient-to-tl from-blue-500/10 via-blue-500/3 to-transparent blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, 8, 0],
              y: [0, 8, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-[10%] -left-[5%] w-[70vw] h-[40vh] rounded-[100%] bg-purple-500/5 blur-3xl"
          />
        </motion.div>
      </div>

      <div className="relative min-h-screen flex items-center justify-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          <div className="text-center">
            <motion.img
              variants={item}
              src={logoSrc}
              alt="CAIS Logo"
              className="h-32 md:h-40 lg:h-48 mx-auto mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            <motion.h1
              variants={item}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 flex justify-center items-center flex-wrap gap-x-4 gap-y-2"
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  className="relative inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    color: word === "ΛI" ? "#ef4444" : undefined,
                  }}
                  transition={{ duration: 1.2, delay: i * 0.4 }}
                >
                  <span className={word === "ΛI" ? "" : "bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"}>
                    {word}
                  </span>
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 min-h-[5rem]"
            >
              {displayText}
              {!isTypingComplete && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              )}
            </motion.p>

            <motion.div
              variants={item}
              className="flex justify-center gap-4 mb-12"
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
                    bgColor="#ffffff"
                    fgColor="#1a2238"
                    data-testid="social-icon"
                  />
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-full"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={item}
              className="flex flex-wrap justify-center gap-4"
            >
              {primaryAction && (
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    to={primaryAction.to}
                    className="px-8 py-3 text-lg font-medium rounded-lg bg-white text-[#1a2238] hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg"
                  >
                    {primaryAction.text}
                  </Link>
                </motion.div>
              )}
              {secondaryAction && (
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    to={secondaryAction.to}
                    className="px-8 py-3 text-lg font-medium rounded-lg border-2 border-white text-white hover:bg-white/20 transition-all duration-300"
                  >
                    {secondaryAction.text}
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
