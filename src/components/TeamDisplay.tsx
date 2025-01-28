import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { Member } from "@/types/team";
import teamData from "@/data/team.json";
import { FaLinkedin } from "react-icons/fa";

interface TeamMemberCardProps {
  image: string;
  name: string;
  description: string;
  title: string;
  linkedinURL: string;
  isLeft: boolean;
  index: number;
  scrollDirection?: "up" | "down";
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  image,
  name,
  title,
  description,
  linkedinURL,
  isLeft,
  index,
  scrollDirection = "down",
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -100 : 100,
        y: scrollDirection === "down" ? 50 : -50,
        scale: 0.95,
        rotateX: scrollDirection === "down" ? 10 : -10,
        rotateY: isLeft ? -30 : 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        transition: {
          type: "spring",
          stiffness: 120,
          damping: scrollDirection === "down" ? 25 : 30,
          mass: 0.8,
          delay: isLeft ? index * 0.1 : (index + 1) * 0.1,
        },
      }}
      viewport={{ once: false, margin: "0px 0px -150px 0px" }}
      className="relative grid grid-cols-[1fr,2px,1fr] w-full px-16 group"
    >
      <div className="pr-16">
        {isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-end"
          >
            <div className="max-w-md text-right">
              <h3 className="text-2xl font-semibold text-neutral-200">
                {name}
              </h3>
              <p className="mt-2 text-lg text-primary">{title}</p>
              <p className="mt-4 text-base text-neutral-400">{description}</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-end"
          >
            <div className="relative w-[280px] rounded-3xl bg-neutral-900/90 p-6 transition-all duration-300 hover:bg-neutral-800/90 hover:-translate-y-1 border border-transparent hover:border-primary/20">
              <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="h-48 w-48 overflow-hidden rounded-3xl border-2 border-neutral-800 transition-colors duration-300 group-hover:border-primary/50">
                    <img
                      src={image}
                      alt={name}
                      width={320}
                      height={320}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <a
                  href={linkedinURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 rounded-full p-3 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-primary"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="relative" />

      <div className="pl-16">
        {isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="relative w-[280px] rounded-3xl bg-neutral-900/90 p-6 transition-all duration-300 hover:bg-neutral-800/90 hover:-translate-y-1 border border-transparent hover:border-primary/20">
              <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="h-48 w-48 overflow-hidden rounded-3xl border-2 border-neutral-800 transition-colors duration-300 group-hover:border-primary/50">
                    <img
                      src={image}
                      alt={name}
                      width={320}
                      height={320}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <a
                  href={linkedinURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 rounded-full p-3 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-primary"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="max-w-md">
              <h3 className="text-2xl font-semibold text-neutral-200">
                {name}
              </h3>
              <p className="mt-2 text-lg text-primary">{title}</p>
              <p className="mt-4 text-base text-neutral-400">{description}</p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const ScrollingLine = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className="absolute inset-0 flex justify-center">
      <div className="relative h-full w-px bg-gradient-to-b from-primary/50 via-primary/10 to-transparent">
        <motion.div
          className="absolute top-0 w-px h-full origin-top bg-primary"
          style={{ scaleY }}
        />
        <motion.div
          className="absolute w-4 h-4 -translate-x-[7px] bg-primary rounded-full"
          style={{ top: useTransform(scaleY, [0, 1], ["0%", "100%"]) }}
        >
          <div className="absolute inset-0 animate-pulse rounded-full bg-primary blur-md" />
        </motion.div>
      </div>
    </div>
  );
};

const AppScrollDetector = () => {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }
  });

  return null;
};

const ScrollDirectionContext = React.createContext<"up" | "down">("down");

const TeamSection: React.FC<{
  title: string;
  members: typeof teamData.members;
  startIndex: number;
}> = ({ title, members, startIndex }) => {
  const scrollDirection = React.useContext(ScrollDirectionContext);

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
        whileInView={{
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          transition: { duration: 0.8, ease: "easeOut" },
        }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-24 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400"
      >
        {title}
      </motion.h2>
      <div className="relative">
        <ScrollingLine />
        <div className="space-y-32 relative">
          {members.map((member, idx) => (
            <TeamMemberCard
              key={member.name}
              image={member.image}
              name={member.name}
              description={member.description}
              title={member.title}
              linkedinURL={member.linkedinURL}
              isLeft={idx % 2 === 0}
              index={startIndex + idx}
              scrollDirection={scrollDirection}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FloatingLights = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute left-[20%] top-[30%] h-[40vh] w-[40vh] rounded-full bg-primary/30 blur-[100px]"
      />
      <motion.div
        initial={{ x: -100, y: -50 }}
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[10%] top-[20%] h-[30vh] w-[30vh] rounded-full bg-purple-500/20 blur-[80px]"
      />
    </div>
  );
};

const TeamDisplay = () => {
  const members = teamData.members;
  const executives = members.slice(0, 7);
  const developers = members.slice(7, 11);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  return (
    <ScrollDirectionContext.Provider value={scrollDirection}>
      <div className="px-6 lg:px-14 pb-24 relative">
        <AppScrollDetector />
        <FloatingLights />

        {}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] opacity-10 blur-3xl pointer-events-none"
        />

        <div className="space-y-48 relative z-10">
          <TeamSection
            title="Executive Team"
            members={executives}
            startIndex={0}
          />
        </div>
      </div>
    </ScrollDirectionContext.Provider>
  );
};

export default TeamDisplay;
