import React from "react";
import TeamDisplay from "@/components/TeamDisplay";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-glow opacity-30" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="fixed inset-0 bg-gradient-to-b from-black/0 via-primary/15 to-background pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] opacity-10 blur-3xl"
      />

      <section className="relative z-10 px-6 lg:px-14 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 mb-6">
            Meet Our{" "}
            <motion.span
              className="text-primary font-mono inline-block mx-2 drop-shadow-[0_0_8px_rgba(226,56,63,0.3)]"
              animate={{
                textShadow: [
                  "0 0 8px rgba(226,56,63,0.3)",
                  "0 0 12px rgba(226,56,63,0.5)",
                  "0 0 8px rgba(226,56,63,0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Team
            </motion.span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            The passionate individuals driving innovation and fostering AI
            education at Carleton University
          </p>
        </motion.div>
      </section>

      <div className="relative z-10">
        <TeamDisplay />
      </div>
    </div>
  );
};

export default TeamPage;
