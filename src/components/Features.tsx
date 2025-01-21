import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
	{
		title: "Events & Workshops",
		description: "Regular AI/ML workshops and networking events",
		content: "Join our hands-on workshops, guest speaker sessions, and collaborative events. Check our events calendar for upcoming activities and easily RSVP through our events page.",
		link: "/cais-web/events"
	},
	{
		title: "Project Opportunities",
		description: "Contribute to real-world AI projects",
		content: "Get involved in ongoing AI projects, from beginner-friendly to advanced implementations. Work with team members and gain practical experience in machine learning development.",
		link: "/cais-web/projects"
	},
	{
		title: "Community Resources",
		description: "Access learning materials and support",
		content: "Connect with our active Discord community, access curated AI/ML learning resources, and get guidance from experienced members. Perfect for both beginners and advanced practitioners.",
		link: "/cais-web/resources"
	},
	{
		title: "Club Governance",
		description: "Transparent club structure and operations",
		content: "Learn about our constitution, executive team, and how to get involved in club leadership. We maintain open communication about club decisions and future directions.",
		link: "/cais-web/about"
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
		<section className="pt-12 pb-8 relative">
			<div className="container mx-auto px-4 sm:px-6 relative z-10">


				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold mb-4 text-glow">Get Involved</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
						Discover how you can be part of Carleton's AI community. Whether you're just starting or already experienced, we have opportunities for everyone.
					</p>
					<Link to="/cais-web/about" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
						<span>View All Opportunities</span>
						<ArrowUpRight className="h-4 w-4" />
					</Link>
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
							<Link to={feature.link} className="block">
								<div 
									className={cn(
										"group relative h-full rounded-xl p-6",
										"border border-primary/10",
										"transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
									)}
								>
									<div className="relative z-50">
										<div className="flex items-center justify-between mb-2">
											<h3 className="font-bold text-xl md:text-2xl group-hover:text-primary transition-colors duration-300">
												{feature.title}
											</h3>
											<ArrowUpRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
										</div>
										<p className="font-normal text-base text-foreground/80 mb-4">
											{feature.description}
										</p>
										<p className="text-sm text-muted-foreground">
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
