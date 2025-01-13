import React from "react";
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
  return (
    <div className="min-h-screen w-full bg-[#1a2238] overflow-hidden">
      {/* Background gradients - positioned relative to viewport */}
      <div className="fixed inset-0">
        {/* Primary glow - top left */}
        <div className="absolute -top-[10%] -left-[20%] w-[100vw] h-[70vh] rounded-[100%] bg-gradient-to-br from-red-500/10 via-red-500/5 to-transparent blur-3xl"></div>
        {/* Secondary glow - middle right */}
        <div className="absolute top-[40%] -right-[10%] w-[90vw] h-[60vh] rounded-[100%] bg-gradient-to-tl from-blue-500/10 via-blue-500/3 to-transparent blur-3xl"></div>
        {/* Accent glow - bottom left */}
        <div className="absolute bottom-[10%] -left-[5%] w-[70vw] h-[40vh] rounded-[100%] bg-purple-500/5 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            {/* Logo with enhanced animation */}
            <img
              src={logoSrc}
              alt="CAIS Logo"
              className="h-32 md:h-40 lg:h-48 mx-auto mb-8 animate-fadeIn duration-1000"
            />

            {/* Title and Description with clearer animations */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeIn animate-delay-300 duration-1000">
              {title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 animate-fadeIn animate-delay-500 duration-1000">
              {description}
            </p>

            {/* Social Icons with smoother animation */}
            <div className="flex justify-center gap-4 mb-12 animate-fadeIn animate-delay-700 duration-1000">
              {SOCIAL_LINKS.map((url) => (
                <SocialIcon
                  key={url}
                  url={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-110"
                  style={{ height: 40, width: 40 }}
                  bgColor="#ffffff"
                  fgColor="#1a2238"
                  data-testid="social-icon"
                />
              ))}
            </div>

            {/* Action Buttons with enhanced hover effects */}
            <div className="flex flex-wrap justify-center gap-4 animate-fadeIn animate-delay-900 duration-1000">
              {primaryAction && (
                <Link
                  to={primaryAction.to}
                  className="px-8 py-3 text-lg font-medium rounded-lg bg-white text-[#1a2238] hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg"
                >
                  {primaryAction.text}
                </Link>
              )}
              {secondaryAction && (
                <Link
                  to={secondaryAction.to}
                  className="px-8 py-3 text-lg font-medium rounded-lg border-2 border-white text-white hover:bg-white/20 transition-all duration-300"
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
