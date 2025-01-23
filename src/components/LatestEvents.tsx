import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const events = [
  {
    title: "Introduction to Machine Learning",
    date: "March 15, 2024",
    time: "5:30 PM - 7:30 PM",
    location: "Tory Building 432",
    description:
      "Learn the fundamentals of machine learning algorithms and their applications.",
    type: "Workshop",
  },
  {
    title: "AI in Healthcare Panel Discussion",
    date: "March 20, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "River Building 2200",
    description:
      "Industry experts discuss the impact of AI in modern healthcare.",
    type: "Panel",
  },
  {
    title: "Neural Networks Deep Dive",
    date: "March 25, 2024",
    time: "5:00 PM - 7:00 PM",
    location: "Herzberg Labs 3422",
    description:
      "Advanced workshop on neural network architectures and implementation.",
    type: "Workshop",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

export function LatestEvents() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-glow">
              Upcoming Events
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Join us for our upcoming workshops and events
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="glass hover:bg-primary/5 hover:border-primary/30 transition-all duration-200"
          >
            <Link to="/events">View All Events</Link>
          </Button>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {events.map((event, index) => (
            <motion.div key={index} variants={item}>
              <div
                className={cn(
                  "group relative h-full rounded-lg p-5 sm:p-6",
                  "bg-card/50 backdrop-blur-sm",
                  "border border-primary/10",
                  "transition-all duration-200 ease-out",
                  "hover:border-primary/30 hover:bg-primary/5",
                  "hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/5",
                )}
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary mb-2">
                        {event.type}
                      </span>
                      <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors duration-200">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm sm:text-base text-foreground/90">
                      {event.date} • {event.time}
                    </p>
                    <p className="text-sm text-foreground/80">
                      {event.location}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
