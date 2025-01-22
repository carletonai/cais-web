import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Events & Workshops",
    description: "Regular AI/ML workshops and networking events",
    content:
      "Join our hands-on workshops, guest speaker sessions, and collaborative events. Check our events calendar for upcoming activities and easily RSVP through our events page.",
    link: "/cais-web/events",
  },
  {
    title: "Project Opportunities",
    description: "Contribute to real-world AI projects",
    content:
      "Get involved in ongoing AI projects, from beginner-friendly to advanced implementations. Work with team members and gain practical experience in machine learning development.",
    link: "/cais-web/projects",
  },
  {
    title: "Community Resources",
    description: "Access learning materials and support",
    content:
      "Connect with our active Discord community, access curated AI/ML learning resources, and get guidance from experienced members. Perfect for both beginners and advanced practitioners.",
    link: "/cais-web/resources",
  },
  {
    title: "Club Governance",
    description: "Transparent club structure and operations",
    content:
      "Learn about our constitution, executive team, and how to get involved in club leadership. We maintain open communication about club decisions and future directions.",
    link: "/cais-web/about",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export function Features() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-glow">
            Get Involved
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Discover how you can be part of Carleton's AI community. Whether
            you're just starting or already experienced, we have opportunities
            for everyone.
          </p>
          <Link
            to="/cais-web/about"
            className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors"
          >
            <span>View All Opportunities</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Link to={feature.link} className="block h-full">
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
                  <div className="relative z-50">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg sm:text-xl group-hover:text-primary transition-colors duration-200">
                        {feature.title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </div>
                    <p className="font-medium text-sm sm:text-base text-foreground/90 mb-3">
                      {feature.description}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {feature.content}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
