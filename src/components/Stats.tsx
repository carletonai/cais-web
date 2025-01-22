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
	hidden: { opacity: 0, scale: 0.95 },
	show: { 
		opacity: 1, 
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 30,
			duration: 0.4
		}
	}
};

export function Stats() {
	return (
		<section className="py-16 relative">
			<div className="container mx-auto px-4 sm:px-6 relative z-10">
				<motion.div 
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					className="text-center mb-12"
				>
					<h2 className="text-3xl sm:text-4xl font-bold mb-3 text-glow">Our Impact</h2>
					<p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
						Growing our community and making a difference in AI education
					</p>
				</motion.div>

				<motion.div 
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-50px" }}
					className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
				>
					{stats.map((stat, index) => (
						<motion.div key={index} variants={item}>
							<div 
								className={cn(
									"group relative h-full rounded-lg p-5 sm:p-6",
									"bg-card/50 backdrop-blur-sm",
									"border border-primary/10",
									"transition-all duration-200 ease-out",
									"hover:border-primary/30 hover:bg-primary/5",
									"hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/5"
								)}
							>
								<div className="text-center relative z-10">
									<motion.div 
										className="text-3xl sm:text-4xl font-bold mb-2 text-primary group-hover:text-glow transition-colors duration-200"
										initial={{ scale: 0.9, opacity: 0 }}
										whileInView={{ scale: 1, opacity: 1 }}
										transition={{ delay: 0.1, duration: 0.3 }}
									>
										{stat.number}
									</motion.div>
									<div className="text-base sm:text-lg font-medium mb-1 text-foreground/90">
										{stat.label}
									</div>
									<p className="text-xs sm:text-sm text-muted-foreground">
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