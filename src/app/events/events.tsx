import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon, MapPinIcon, ArrowRightIcon } from "lucide-react";
import eventsData from "@/data/events.json";

const eventTypes = ["All", "Workshop", "Panel", "Symposium"];

const events = eventsData.events;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
<<<<<<< Updated upstream
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
=======
    transition: { staggerChildren: 0.15 },
>>>>>>> Stashed changes
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
<<<<<<< Updated upstream
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const filterContainer = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      staggerChildren: 0.1,
    },
  },
};

const filterItem = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
=======
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1.0],
>>>>>>> Stashed changes
    },
  },
};

const EventsPage = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredEvents = events.filter(
    (event) => selectedType === "All" || event.type === selectedType,
  );

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {}
      <div className="absolute inset-0 bg-glow opacity-30" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-background" />

      {}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_65%)] opacity-20" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center relative z-10 px-4"
        >
          <motion.h1
            className="text-7xl sm:text-8xl font-bold mb-6 text-glow bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/50"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Events
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Join us for immersive workshops, insightful panels, and engaging
            discussions about the future of artificial intelligence.
          </motion.p>
        </motion.div>
      </section>

      {}
      <section className="relative z-10 py-8">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={filterContainer}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {eventTypes.map((type) => (
<<<<<<< Updated upstream
              <motion.div key={type} variants={filterItem}>
                <Button
                  variant={selectedType === type ? "default" : "outline"}
                  onClick={() => setSelectedType(type)}
                  className={cn(
                    "px-6 py-2 rounded-full transition-all duration-300 hover:scale-105",
                    selectedType === type && "scale-105 shadow-lg shadow-primary/20",
                  )}
                >
                  {type}
                </Button>
              </motion.div>
=======
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                onClick={() => setSelectedType(type)}
                className={cn(
                  "px-6 py-2 rounded-full transition-all duration-300",
                  selectedType === type && "scale-105",
                )}
              >
                {type}
              </Button>
>>>>>>> Stashed changes
            ))}
          </motion.div>
        </div>
      </section>

      {}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
<<<<<<< Updated upstream
            <AnimatePresence mode="wait">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  variants={item}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, y: 20 }}
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
=======
            {filteredEvents.map((event, index) => (
              <motion.div key={index} variants={item}>
                <div
                  className={cn(
                    "group relative h-full rounded-lg p-6",
                    "bg-card/50 backdrop-blur-sm",
                    "border border-primary/10",
                    "transition-all duration-200 ease-out",
                    "hover:border-primary/30 hover:bg-primary/5",
                    "hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/5",
                  )}
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 text-sm font-medium rounded-md bg-primary/10 text-primary mb-2">
                          {event.type}
                        </span>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-200">
                          {event.title}
                        </h3>
                      </div>
                    </div>
                    <div className="space-y-3 mb-4">
                      <p className="text-base text-foreground/90">
                        {event.date} • {event.time}
                      </p>
                      <p className="text-sm text-foreground/80">
                        📍 {event.location}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {event.description}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full glass hover:bg-primary/5 hover:border-primary/30"
                      asChild
                    >
                      <a
                        href={event.rsvpLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        RSVP Now
                      </a>
                    </Button>
>>>>>>> Stashed changes
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
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {}
      <section className="relative z-10 py-16 px-4 mb-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-glow">
              Events Calendar
            </h2>
            <p className="text-lg text-muted-foreground">
              View our full schedule of upcoming events
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden border border-primary/10 bg-card/50 backdrop-blur-sm"
          >
            <iframe
              src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID"
              style={{ border: 0 }}
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
