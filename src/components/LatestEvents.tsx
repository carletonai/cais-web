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
import eventsData from "@/data/events.json";

// Sort events by date and get the latest 3
const events = eventsData.events
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

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
            <motion.div key={event.id} variants={item}>
              <Card className="bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors duration-200">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-lg font-semibold mb-1">
                        {event.title}
                      </CardTitle>
                      <CardDescription>
                        {event.date} • {event.time}
                      </CardDescription>
                    </div>
                    <span
                      className={cn(
                        "px-2 py-1 rounded text-xs font-medium",
                        event.type === "Workshop"
                          ? "bg-blue-500/10 text-blue-500"
                          : event.type === "Panel"
                            ? "bg-purple-500/10 text-purple-500"
                            : "bg-green-500/10 text-green-500",
                      )}
                    >
                      {event.type}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    📍 {event.location}
                  </p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
