import React from "react";
import { motion } from "framer-motion";
import { scaleIn } from "@/lib/animationVariants";
import { cn } from "@/lib/utils";
import { skillSizeClasses, skillCategoryColors } from "@/data/skills";

const titleSize = {
    large: "text-2xl sm:text-3xl",
    medium: "text-lg sm:text-xl",
    small: "text-sm sm:text-base",
};

export default function SkillTile({ skill }) {
    const { name, category, size } = skill;

    return (
        <motion.div variants={scaleIn} className={cn(skillSizeClasses[size], "group")}>
            <div
                className={cn(
                    "h-full p-5 sm:p-6 rounded-2xl bg-gradient-to-br border backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] cursor-default flex flex-col justify-between",
                    skillCategoryColors[category]
                )}
            >
                <div>
                    <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">{category}</span>
                    <h3 className={cn("font-bold mt-2 text-foreground group-hover:text-primary transition-colors", titleSize[size])}>
                        {name}
                    </h3>
                </div>

                {size === "large" && (
                    <div className="mt-4 flex items-center gap-2">
                        <div className="h-1 flex-1 rounded-full bg-muted overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "90%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, delay: 0.5 }}
                                className="h-full rounded-full bg-primary"
                            />
                        </div>
                        <span className="font-mono text-xs text-muted-foreground">Expert</span>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
