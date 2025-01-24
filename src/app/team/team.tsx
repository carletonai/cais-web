import React from "react";
import TeamDisplay from "@/components/TeamDisplay";
import { motion } from "framer-motion";


const animations = {
    container: {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    },
    item: {
        hidden: { opacity: 0, y: 10 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    },
};

const TeamPage = () => {
    return (
        <div className="min-h-screen lg:px-14  relative overflow-hidden">
            <div className="absolute inset-0 bg-glow opacity-40" />
            <div className="absolute inset-0 bg-grid opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />


            <motion.div variants={animations.item}>
                <h1 className="p-8 text-center text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                    Carleton{" "}
                    <span className="text-primary font-mono inline-block mx-2 drop-shadow-[0_0_8px_rgba(226,56,63,0.3)]">
                ΛI
              </span>{" "}
                    Society

                    <span className="text-primary pl-3 inline-block mx-2 drop-shadow-[0_0_8px_rgba(226,56,63,0.3)]">{" "}
                    Team
                </span>
                </h1>


            </motion.div>
            <TeamDisplay />

        </div>
    )
}


export default TeamPage;
