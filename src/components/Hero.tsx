import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

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

export default function Hero({
  title,
  description,
  logoSrc,
  primaryAction,
  secondaryAction,
}: HeroProps) {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

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
        <div className="absolute -top-[10%] -left-[20%] w-[100vw] h-[70vh] rounded-[100%] bg-gradient-to-br from-red-500/10 via-red-500/5 to-transparent blur-3xl transform transition-transform duration-[3000ms] hover:translate-x-10 hover:translate-y-10"></div>
        <div className="absolute top-[40%] -right-[10%] w-[90vw] h-[60vh] rounded-[100%] bg-gradient-to-tl from-blue-500/10 via-blue-500/3 to-transparent blur-3xl transform transition-transform duration-[3000ms] hover:-translate-x-10 hover:-translate-y-10"></div>
        <div className="absolute bottom-[10%] -left-[5%] w-[70vw] h-[40vh] rounded-[100%] bg-purple-500/5 blur-3xl transform transition-transform duration-[3000ms] hover:translate-x-5 hover:translate-y-5"></div>
      </div>

      <div className="relative min-h-screen flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <img
              src={logoSrc}
              alt="CAIS Logo"
              className="h-32 md:h-40 lg:h-48 mx-auto mb-8 animate-fadeIn transition-transform hover:scale-105"
            />

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeIn delay-300 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 animate-fadeIn delay-500 min-h-[5rem]">
              {displayText}
              {!isTypingComplete && <span className="animate-pulse">|</span>}
            </p>

            <div className="flex justify-center gap-4 mb-12 animate-fadeIn delay-700">
              {SOCIAL_LINKS.map((url) => (
                <div key={url} className="group relative">
                  <SocialIcon
                    url={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 group-hover:scale-110 relative z-10"
                    style={{ height: 40, width: 40 }}
                    bgColor="#ffffff"
                    fgColor="#1a2238"
                    data-testid="social-icon"
                  />
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 animate-fadeIn delay-900">
              {primaryAction && (
                <Link
                  to={primaryAction.to}
                  className="px-8 py-3 text-lg font-medium rounded-lg bg-white text-[#1a2238] hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 active:scale-95"
                >
                  {primaryAction.text}
                </Link>
              )}
              {secondaryAction && (
                <Link
                  to={secondaryAction.to}
                  className="px-8 py-3 text-lg font-medium rounded-lg border-2 border-white text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95"
                >
                  {secondaryAction.text}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
