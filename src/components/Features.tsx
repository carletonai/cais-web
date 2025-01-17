import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const features = [
	{
		title: "Workshops & Events",
		description: "Regular hands-on workshops and events focused on AI/ML technologies",
		content: "From beginner-friendly introductions to advanced topics in machine learning, our events cater to all skill levels."
	},
	{
		title: "Project Collaboration",
		description: "Work on real AI projects with fellow students",
		content: "Join teams working on exciting AI projects, from computer vision to natural language processing."
	},
	{
		title: "Learning Resources",
		description: "Access to curated AI/ML learning materials",
		content: "Get access to carefully selected tutorials, courses, and resources to help you master AI concepts."
	},
	{
		title: "Industry Connections",
		description: "Network with AI professionals and companies",
		content: "Meet industry experts and learn about AI career opportunities through our networking events."
	}
];

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2
		}
	}
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { 
		opacity: 1, 
		y: 0,
		transition: {
			duration: 0.8,
			ease: [0.6, -0.05, 0.01, 0.99]
		}
	}
};

export function Features() {
	return (
		<section className="py-24 relative overflow-hidden w-full">
			<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
			
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
			</div>

			<div className="container mx-auto px-4 sm:px-6 relative">
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold mb-4 text-glow">What We Offer</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Join our community and explore the world of artificial intelligence through various learning opportunities.
					</p>
				</motion.div>

				<motion.div 
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 gap-8"
				>
					{features.map((feature, index) => (
						<motion.div key={index} variants={item}>
							<div 
								className={cn(
									"group w-full cursor-pointer overflow-hidden relative card h-full rounded-md shadow-xl mx-auto flex flex-col justify-between p-6 border border-transparent dark:border-neutral-800",
									"bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
									"before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
									"hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
									"hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
									"transition-all duration-500"
								)}
							>
								<div className="text relative z-50">
									<h3 className="font-bold text-xl md:text-2xl text-gray-50 relative mb-2 group-hover:text-glow-sm transition-all duration-300">
										{feature.title}
									</h3>
									<p className="font-normal text-base text-gray-50 relative mb-4">
										{feature.description}
									</p>
									<p className="text-sm text-gray-300 relative">
										{feature.content}
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
