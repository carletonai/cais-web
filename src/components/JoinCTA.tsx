import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function JoinCTA() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          className={cn(
            "max-w-3xl mx-auto relative rounded-lg p-6 sm:p-10",
            "bg-card/50 backdrop-blur-sm",
            "border border-primary/10",
            "transition-all duration-200 ease-out",
            "hover:border-primary/30 hover:bg-primary/5",
            "hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/5",
          )}
        >
          <div className="relative z-50">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-glow">
                Join Our Community
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
                Whether you're just starting your AI journey or you're an
                experienced practitioner, CAIS offers a supportive community to
                learn, grow, and innovate together.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto min-w-[160px] h-11 text-base bg-primary/20 hover:bg-primary/30 text-primary transition-colors duration-200"
              >
                <Link to="/cais-web/contact">Join Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto min-w-[160px] h-11 text-base glass hover:bg-primary/5 hover:border-primary/30 transition-all duration-200"
              >
                <Link to="/cais-web/events">View Events</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
