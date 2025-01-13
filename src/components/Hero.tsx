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

export default function Hero() {
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
    <div className="relative">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-20 sm:py-28">
          <div className="text-center">
            <div className="flex justify-center mb-10">
              <img 
                src={HERO_CONTENT.logo.src}
                alt={HERO_CONTENT.logo.alt}
                className="h-32 w-auto sm:h-40 md:h-48"
              />
            </div>
            <div className="mb-8">
              <h1 className="relative text-5xl font-bold tracking-tight sm:text-7xl mb-4 inline-block">
                <span className="text-white">{HERO_CONTENT.title.main} </span>
                <span className="relative inline-block">
                  <span className="relative z-10 text-red-400 px-1">{HERO_CONTENT.title.highlight}</span>
                  <span 
                    className="absolute -inset-1 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 blur-sm"
                    aria-hidden="true"
                  ></span>
                  <span 
                    className="absolute -inset-1 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 blur-md opacity-75 scale-110"
                    aria-hidden="true"
                  ></span>
                </span>
                <span className="text-white"> {HERO_CONTENT.title.end}</span>
              </h1>
              <p className="text-xl font-medium text-red-400">
                {HERO_CONTENT.subtitle}
              </p>
            </div>
            <p className="text-lg sm:text-xl leading-8 text-gray-300 max-w-2xl mx-auto mb-6">
              {HERO_CONTENT.description}
            </p>
            <p className="text-sm sm:text-base font-medium text-gray-400 tracking-wider mb-10">
              {HERO_CONTENT.tagline}
            </p>
            <div className="flex items-center justify-center gap-x-8">
              {ACTION_BUTTONS.map(renderActionButton)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 