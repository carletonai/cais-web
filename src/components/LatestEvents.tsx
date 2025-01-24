import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarIcon, MapPinIcon, ArrowRightIcon } from "lucide-react";
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
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={item}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="group relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-colors"
            >
              <div className="aspect-video relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${event.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span className="inline-flex items-center gap-1">
                    <CalendarIcon className="w-4 h-4" />
                    {event.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPinIcon className="w-4 h-4" />
                    {event.location}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {event.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group/btn"
                    asChild
                  >
                    <a href={event.rsvpLink} target="_blank" rel="noopener noreferrer">
                      RSVP
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
