import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function FloatCard({ icon: Icon, value, label, className, index = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
                opacity: { duration: 0.5, delay: 0.8 + index * 0.15 },
                scale: { duration: 0.5, delay: 0.8 + index * 0.15 },
                y: { duration: 4 + index * 0.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 },
            }}
            className={cn(
                "absolute z-10 flex items-center gap-3 px-3 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-card/80 backdrop-blur-xl border border-border/60 shadow-xl shadow-black/30",
                className
            )}
        >
            <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-primary text-primary-foreground shrink-0">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
            <span className="text-left">
                <span className="block text-lg sm:text-xl font-bold text-foreground leading-none">{value}</span>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1 whitespace-nowrap">
                    {label}
                </span>
            </span>
        </motion.div>
    );
}
