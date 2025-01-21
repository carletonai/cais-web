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
		<section className="pt-12 pb-8 relative">
			<div className="container mx-auto px-4 sm:px-6 relative z-10">
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
									"max-w-xs w-full group/card relative h-full rounded-xl p-6",
									"border border-primary/10",
									"transition-all duration-300"
								)}

							>
								<div className="text-center relative z-10">
									<motion.div 
										className="text-5xl font-bold mb-3 text-primary group-hover/card:text-glow-sm transition-all duration-300"
										initial={{ scale: 0.5, opacity: 0 }}
										whileInView={{ scale: 1, opacity: 1 }}
										transition={{ delay: 0.2, duration: 0.5 }}
									>
										{stat.number}
									</motion.div>
									<div className="text-xl font-semibold mb-2 text-foreground/90">
										{stat.label}
									</div>
									<p className="text-sm text-muted-foreground">
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