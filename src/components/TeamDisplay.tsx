import React, { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
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
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  image,
  name,
  title,
  description,
  linkedinURL,
  isLeft,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: [0.21, 1.11, 0.81, 0.99],
      }}
      className={`flex items-center ${isLeft ? "justify-end pr-16" : "justify-start pl-16"} w-full`}
    >
      <div className="relative w-full max-w-2xl rounded-3xl bg-neutral-900/90 p-12 transition-all duration-300 hover:bg-neutral-800/90 hover:-translate-y-1">
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-8">
            <div className="h-60 w-60 overflow-hidden rounded-3xl border-2 border-neutral-800 transition-colors duration-300 group-hover:border-primary/50">
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

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-neutral-200">{name}</h3>
            <p className="mt-2 text-lg text-primary">{title}</p>
            <p className="mt-6 text-base text-neutral-400 line-clamp-3">
              {description}
            </p>
          </div>

          <div className="mt-8 flex space-x-4">
            <a
              href={linkedinURL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-3 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-primary"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
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
    <div
      ref={ref}
      className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2"
    >
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

const TeamSection: React.FC<{
  title: string;
  members: typeof teamData.members;
  startIndex: number;
}> = ({ title, members, startIndex }) => {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-24 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400"
      >
        {title}
      </motion.h2>
      <div className="relative">
        <ScrollingLine />

        {/* Team members */}
        <div className="space-y-32">
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TeamDisplay = () => {
  const members = teamData.members;
  const executives = members.slice(0, 7);
  const developers = members.slice(7, 11);

  return (
    <div className="px-6 lg:px-14 pb-24">
      <div className="space-y-48">
        <TeamSection
          title="Executive Team"
          members={executives}
          startIndex={0}
        />
        <TeamSection
          title="Development Team"
          members={developers}
          startIndex={executives.length}
        />
      </div>
    </div>
  );
};

export default TeamDisplay;
