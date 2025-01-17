import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function JoinCTA() {
	return (
		<section className="py-24 relative overflow-hidden w-full">
			<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
			
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background" />
			</div>

			<motion.div 
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="container mx-auto px-4 sm:px-6 text-center relative"
			>
				<div 
					className={cn(
						"max-w-2xl mx-auto group cursor-pointer overflow-hidden relative card rounded-2xl shadow-xl p-8 md:p-12 flex flex-col justify-between border border-transparent dark:border-neutral-800",
						"bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
						"before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
						"hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
						"hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
						"transition-all duration-500"
					)}
				>
					<div className="relative z-50">
						<h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-50 group-hover:text-glow-sm transition-all duration-300">
							Join Our Community
						</h2>
						<p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
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
								className="min-w-[200px] h-12 text-lg bg-primary/20 hover:bg-primary/30 text-primary hover:text-glow-sm transition-all duration-300"
							>
								<Link to="/cais-web/contact">Join Now</Link>
							</Button>
							<Button 
								asChild 
								variant="outline"
								size="lg"
								className="min-w-[200px] h-12 text-lg glass hover:bg-white/5 hover:border-primary/50 transition-all duration-300"
							>
								<Link to="/cais-web/events">View Events</Link>
							</Button>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
