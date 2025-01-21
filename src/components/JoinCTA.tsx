import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function JoinCTA() {
	return (
		<section className="pt-12 pb-32 relative">
			<div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
				<motion.div 
					className={cn(
						"max-w-2xl mx-auto relative rounded-xl p-8 md:p-12",
						"border border-primary/10",
						"transition-all duration-300"
					)}

				>
					<div className="relative z-50">
						<h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
							Join Our Community
						</h2>
						<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">

							Whether you're just starting your AI journey or you're an experienced practitioner,
							CAIS offers a supportive community to learn, grow, and innovate together.
						</p>
						<motion.div 
							className="flex flex-col sm:flex-row gap-4 justify-center items-center"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.8 }}
						>
							<Button 
								asChild 
								size="lg"
								className="min-w-[200px] h-12 text-lg bg-primary/20 hover:bg-primary/30 text-primary transition-colors duration-300"
							>
								<Link to="/cais-web/contact">Join Now</Link>
							</Button>
							<Button 
								asChild 
								variant="outline"
								size="lg"
								className="min-w-[200px] h-12 text-lg glass hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
							>
								<Link to="/cais-web/events">View Events</Link>
							</Button>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
