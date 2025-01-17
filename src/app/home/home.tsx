import React from "react";
import Hero from "../../components/Hero";
import { Features } from "../../components/Features";
import { Stats } from "../../components/Stats";
import { LatestEvents } from "../../components/LatestEvents";
import { JoinCTA } from "../../components/JoinCTA";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero
        title="Carleton AI Society"
        description="A student club at Carleton University for anyone interested in AI and machine learning. Join us to learn, build projects, and meet others who share your interests."
        logoSrc="/cais-web/header-club.png"
        primaryAction={{
          text: "See Events",
          to: "/cais-web/events",
        }}
        secondaryAction={{
          text: "Learn More",
          to: "/cais-web/about",
        }}
      />
      <div className="relative z-10">
        <Features />
        <Stats />
        <LatestEvents />
        <JoinCTA />
      </div>
    </div>
  );
};

export default HomePage;
