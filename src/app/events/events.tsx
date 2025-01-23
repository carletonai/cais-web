import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon, MapPinIcon, ArrowRightIcon } from "lucide-react";

const eventTypes = ["All", "Workshop", "Panel", "Symposium"];

const events = [
  {
    title: "Introduction to Machine Learning",
    date: "March 15, 2024",
    time: "5:30 PM - 7:30 PM",
    location: "Tory Building 432",
    description: "Learn the fundamentals of machine learning algorithms and their applications.",
    type: "Workshop",
    image: "/images/events/ml-workshop.jpg",
    rsvpLink: "https://forms.google.com/...",
    tags: ["beginner-friendly", "hands-on"]
  },
  {
    title: "AI in Healthcare Panel Discussion",
    date: "March 20, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "River Building 2200",
    description: "Industry experts discuss the impact of AI in modern healthcare.",
    type: "Panel",
    image: "/images/events/healthcare-panel.jpg",
    rsvpLink: "https://forms.google.com/...",
    tags: ["healthcare", "industry-experts"]
  },
  {
    title: "Neural Networks Deep Dive",
    date: "March 25, 2024",
    time: "5:00 PM - 7:00 PM",
    location: "Herzberg Labs 3422",
    description: "Advanced workshop on neural network architectures and implementation.",
    type: "Workshop",
    image: "/images/events/neural-networks.jpg",
    rsvpLink: "https://forms.google.com/...",
    tags: ["advanced", "technical"]
  },
  {
    title: "AI Ethics Symposium",
    date: "April 5, 2024",
    time: "4:00 PM - 6:00 PM",
    location: "Richcraft Hall 2228",
    description: "Join us for a discussion on ethical considerations in AI development.",
    type: "Symposium",
    image: "/images/events/ethics-symposium.jpg",
    rsvpLink: "https://forms.google.com/...",
    tags: ["ethics", "discussion"]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

const EventsPage = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredEvents = events.filter(
    event => selectedType === "All" || event.type === selectedType
  );

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-glow opacity-30" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-background" />

      {/* Hero Section with Parallax */}
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
          Join us for immersive workshops, insightful panels, and engaging discussions about the future of artificial intelligence.
          </motion.p>
        </motion.div>
        </section>

      {/* Filter Section */}
      <section className="relative z-10 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {eventTypes.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                onClick={() => setSelectedType(type)}
                className={cn(
                  "px-6 py-2 rounded-full transition-all duration-300",
                  selectedType === type && "scale-105"
                )}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {events.map((event, index) => (
              <motion.div key={index} variants={item}>
                <div
                  className={cn(
                    "group relative h-full rounded-lg p-6",
                    "bg-card/50 backdrop-blur-sm",
                    "border border-primary/10",
                    "transition-all duration-200 ease-out",
                    "hover:border-primary/30 hover:bg-primary/5",
                    "hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/5"
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
                      <a href={event.rsvpLink} target="_blank" rel="noopener noreferrer">
                        RSVP Now
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="relative z-10 py-16 px-4 mb-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-glow">Events Calendar</h2>
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
