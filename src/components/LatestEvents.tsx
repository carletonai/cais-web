import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const events = [
	{
		title: "Introduction to Machine Learning",
		date: "March 15, 2024",
		time: "5:30 PM - 7:30 PM",
		location: "Tory Building 432",
		description: "Learn the fundamentals of machine learning algorithms and their applications.",
		type: "Workshop"
	},
	{
		title: "AI in Healthcare Panel Discussion",
		date: "March 20, 2024",
		time: "6:00 PM - 8:00 PM",
		location: "River Building 2200",
		description: "Industry experts discuss the impact of AI in modern healthcare.",
		type: "Panel"
	},
	{
		title: "Neural Networks Deep Dive",
		date: "March 25, 2024",
		time: "5:00 PM - 7:00 PM",
		location: "Herzberg Labs 3422",
		description: "Advanced workshop on neural network architectures and implementation.",
		type: "Workshop"
	}
];

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15
		}
	}
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { 
		opacity: 1, 
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.6, -0.05, 0.01, 0.99]
		}
	}
};

export function LatestEvents() {
	return (
		<section className="pt-12 pb-8 relative">
			<div className="container mx-auto px-4 sm:px-6 relative z-10">


				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4"
				>
					<div>
						<h2 className="text-4xl font-bold mb-2 text-glow">Upcoming Events</h2>
						<p className="text-lg text-muted-foreground">Join us for our upcoming workshops and events</p>
					</div>
					<Button 
						asChild 
						variant="outline"
						size="lg"
						className="glass hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
					>
						<Link to="/cais-web/events">View All Events</Link>
					</Button>
				</motion.div>

				<motion.div 
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-3 gap-8"
				>
					{events.map((event, index) => (
						<motion.div key={index} variants={item}>
							<div
								className={cn(
									"max-w-xs w-full group/card relative h-full rounded-xl p-6",
									"border border-primary/10",
									"transition-all duration-300"
								)}

							>
								<div className="relative z-10">
									<div className="flex justify-between items-start mb-4">
										<span className="px-3 py-1 rounded-full bg-primary/10 text-sm font-medium text-primary">
											{event.type}
										</span>
										<span className="text-sm text-muted-foreground">{event.date}</span>
									</div>
									<h3 className="text-xl mb-2 group-hover/card:text-primary transition-colors duration-300">{event.title}</h3>
									<p className="text-sm text-foreground/80 mb-4">{event.description}</p>
									<div className="space-y-3 text-sm text-muted-foreground">
										<div className="flex items-center gap-2">
											<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
											{event.time}
										</div>
										<div className="flex items-center gap-2">
											<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
											</svg>
											{event.location}
										</div>
									</div>
								</div>
								<div className="mt-6">
									<Button 
										asChild 
										className="w-full glass hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
									>
										<Link to={`/cais-web/events#${event.title.toLowerCase().replace(/ /g, '-')}`}>
											Learn More
										</Link>
									</Button>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}