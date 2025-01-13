import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#1a2238] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold mb-4 text-white">What We Do</h2>
            <p className="text-lg text-gray-300">
              We help Carleton students learn about AI through workshops, projects, and events. Whether you're just starting out or already know some AI, we've got something for you.
            </p>
          </div>
          <div className="animate-fadeIn [animation-delay:200ms]">
            <h2 className="text-3xl font-bold mb-4 text-white">Join Us</h2>
            <ul className="space-y-4 text-lg text-gray-300">
              <li>• Learn AI skills through workshops and projects</li>
              <li>• Meet other students interested in AI</li>
              <li>• Get help with your AI coursework</li>
              <li>• Work on cool projects together</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
