import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const stats = [
	{
		number: "500+",
		label: "Members",
		description: "Active students in our community"
	},
	{
		number: "20+",
		label: "Events",
		description: "Workshops and meetups per year"
	},
	{
		number: "15+",
		label: "Projects",
		description: "Collaborative AI projects completed"
	},
	{
		number: "10+",
		label: "Partners",
		description: "Industry and academic partnerships"
	}
];

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1
		}
	}
};

const item = {
	hidden: { opacity: 0, scale: 0.9 },
	show: { 
		opacity: 1, 
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 20
		}
	}
};

export function Stats() {
	return (
		<section className="py-24 relative overflow-hidden w-full">
			<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
			
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
			</div>

			<div className="container mx-auto px-4 sm:px-6 relative">
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold mb-4 text-glow">Our Impact</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Growing our community and making a difference in AI education
					</p>
				</motion.div>

				<motion.div 
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
				>
					{stats.map((stat, index) => (
						<motion.div key={index} variants={item}>
							<div 
								className={cn(
									"max-w-xs w-full group/card cursor-pointer overflow-hidden relative card h-full rounded-md shadow-xl mx-auto flex flex-col justify-between p-6",
									"bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
								)}
							>
								<div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
								<div className="text-center relative z-10">
									<motion.div 
										className="text-5xl font-bold mb-3 text-primary group-hover:text-glow-sm transition-all duration-300"
										initial={{ scale: 0.5, opacity: 0 }}
										whileInView={{ scale: 1, opacity: 1 }}
										transition={{ delay: 0.2, duration: 0.5 }}
									>
										{stat.number}
									</motion.div>
									<div className="text-xl font-semibold mb-2 text-gray-50">
										{stat.label}
									</div>
									<p className="text-sm text-gray-300">
										{stat.description}
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