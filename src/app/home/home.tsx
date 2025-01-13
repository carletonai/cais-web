import React from "react";
import Hero from "../../components/Hero";

export default function HomePage() {
  return (
    <Hero
      title="Carleton AI Society"
      description="A student club at Carleton University for anyone interested in AI and machine learning. Join us to learn, build projects, and meet others who share your interests."
      logoSrc="/cais-web/header-club.png"
      primaryAction={{
        text: "See Events",
        to: "/cais-web/events"
      }}
      secondaryAction={{
        text: "Learn More",
        to: "/cais-web/about"
      }}
    />
  );
} 