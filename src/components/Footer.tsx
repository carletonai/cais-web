import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden w-full z-50 mt-auto">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      
      <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/90" />
      </div>

      <div className="border-t border-border/30 relative">
        <div className="container mx-auto px-4 sm:px-6 py-8">
          <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
          >
          <p className="text-muted-foreground/80">
              © {new Date().getFullYear()} Carleton Artificial Intelligence Society
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

