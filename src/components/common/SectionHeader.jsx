import React from "react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animationVariants";
import { cn } from "@/lib/utils";

export default function SectionHeader({ eyebrow, title, description, align = "left", className, titleClassName }) {
    const centered = align === "center";

    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className={cn("mb-16", centered && "text-center", className)}
        >
            <span className="font-mono text-sm text-accent tracking-widest uppercase">// {eyebrow}</span>
            <h2 className={cn("text-4xl sm:text-5xl font-bold mt-3 text-foreground", titleClassName)}>{title}</h2>
            {description && (
                <p className={cn("text-muted-foreground mt-4 max-w-2xl", centered && "mx-auto")}>{description}</p>
            )}
        </motion.div>
    );
}
