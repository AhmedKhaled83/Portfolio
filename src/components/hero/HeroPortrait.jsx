import React from "react";
import { motion } from "framer-motion";
import FloatCard from "./FloatCard";

// Positions for the floating stat cards, in order.
const cardPositions = [
    "-left-6 sm:-left-12 top-8",
    "-right-4 sm:-right-10 top-[42%]",
    "-left-4 sm:-left-8 bottom-10",
];

export default function HeroPortrait({ src, alt, stats = [] }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative mx-auto w-64 sm:w-80 lg:w-[24rem] lg:order-last"
        >
            {/* Glow */}
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-primary opacity-25 blur-3xl" />
            {/* Dot pattern */}
            <div
                className="absolute -top-8 -right-8 w-36 h-36 opacity-40"
                style={{
                    backgroundImage: "radial-gradient(hsl(var(--accent)) 1.5px, transparent 1.5px)",
                    backgroundSize: "14px 14px",
                }}
            />
            {/* Offset outline */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 sm:translate-x-5 sm:translate-y-5 rounded-[2rem] border-2 border-primary/40" />

            {/* Photo */}
            <div className="relative overflow-hidden rounded-[2rem] bg-card aspect-[3/4] shadow-2xl shadow-primary/30">
                <img src={src} alt={alt} className="w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {stats.slice(0, cardPositions.length).map((stat, index) => (
                <FloatCard key={stat.label} {...stat} index={index} className={cardPositions[index]} />
            ))}
        </motion.div>
    );
}
