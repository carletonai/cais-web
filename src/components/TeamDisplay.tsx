import React from "react";
import {motion} from "framer-motion";
import { teamData } from "@/app/team/data";
import { Button } from "@/components/ui/button";
import {BackgroundBeams} from "@/components/background-beams";
import team from "@/app/team/team";



const TeamPage = () => {
    interface DisplayMembersProps
    {
        image: string;
        name: string;
        description: string;
        title: string;
        linkedinURL: string;
        linkedin: string;
        githubURL: string;
        github: string;

    }

    const DisplayMembers: React.FC<DisplayMembersProps> = ({image,name,description,title,linkedin,linkedinURL,github,githubURL}) => {
        return (

            <div className="relative z-10">
                {/*[url('/cais-web/gradient.png')] */}
                <div className="bg-[#1c1f29] bg-opacity-40 hover:bg-opacity-60 bg-cover lg:h-[500px] lg:w-auto rounded-3xl md:h-[350px] md:w-[250px] h-[250px] flex justify-center ">
                    <div className="p-8 text-center">
                        <div className="person-box">
                            <div>
                                <img
                                    className=" lg:h-52 lg:w-52 md:h-32 md:w-32 h-24 w-24 rounded-full border-4 border-white border-x-14 border-glow border-b-red-500  mx-auto object-cover"
                                    src={image}
                                    alt="Description of the image"
                                />
                            </div>

                            <div className="lg:text-xl md:text-sm text-xs lg:pt-5 md:pt-5 pt-2">
                                <h3 className="lg:text-3xl text-xl">{title}</h3>
                                <p className="lg:text-xl text-sm lg:pb-12 pb-4 ">{name}</p>

                                {/*Removed TBD*/}
                                {/*
                                <p className="lg:pb-6 pb-2 ">
                                        {description}
                                </p>
                                */}
                                <p className="flex space-x-2 justify-center">
                                    <Button className="w-auto lg:h-16 bg-transparent">
                                        <a href={githubURL} target="_blank" rel="noopener noreferrer">
                                            <img
                                                className="h-auto md:w-12 lg:w-16 sm:"
                                                src={github}
                                                alt="Github"
                                            />
                                        </a>
                                    </Button>

                                    <Button className="w-auto lg:h-16 bg-transparent">
                                        <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
                                            <img
                                                className="h-auto md:w-12 lg:w-16 sm:"
                                                src={linkedin}
                                                alt="Linkedin"
                                            />
                                        </a>
                                    </Button>
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    };
    return (
        <div className="p-8">

            <div>

                {/* Executives */}
                <h1 className="text-4xl font-bold mb-6">Executives</h1>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {teamData.slice(0, 7).map((member, index) => (
                        <motion.div
                        key={member.name}
                        whileHover={{y:-20}}
                        transition={{
                            type:"spring",
                            stiffness:300,
                            damping:25,
                        }}>
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut", }}
                            >
                                <DisplayMembers
                                    image={member.image}
                                    name={member.name}
                                    description={member.description}
                                    title={member.title}
                                    linkedinURL={member.linkedinURL}
                                    linkedin={member.linkedin}
                                    github={member.github}
                                    githubURL={member.githubURL}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Development */}
                <h1 className="text-4xl font-bold mb-6 pt-32">Development</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {teamData.slice(7, 11).map((member, index) => (
                        <motion.div
                            key={member.name}
                            whileHover={{y:-20}}
                            transition={{
                                type:"spring",
                                stiffness:300,
                                damping:25,
                            }}>
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut", }}
                            >
                                <DisplayMembers
                                    image={member.image}
                                    name={member.name}
                                    description={member.description}
                                    title={member.title}
                                    linkedinURL={member.linkedinURL}
                                    linkedin={member.linkedin}
                                    githubURL={member.githubURL}
                                    github={member.github}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>



            </div>
        </div>
    )
}


export default TeamPage;