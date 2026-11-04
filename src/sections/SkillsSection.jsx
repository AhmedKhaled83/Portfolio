import React from "react";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/lib/animationVariants";

const skills = [
    { name: "React Native", category: "core", size: "large" },
    { name: "React.js", category: "core", size: "large" },
    { name: "TypeScript", category: "core", size: "medium" },
    { name: "JavaScript (ES6+)", category: "core", size: "medium" },
    { name: "Redux Toolkit", category: "state", size: "medium" },
    { name: "Zustand", category: "state", size: "small" },
    { name: "JSX", category: "core", size: "small" },
    { name: "HTML5 / CSS3", category: "web", size: "small" },
    { name: "PHP", category: "web", size: "small" },
    { name: "REST APIs", category: "integration", size: "medium" },
    { name: "Axios", category: "integration", size: "small" },
    { name: "MySQL", category: "integration", size: "small" },
    { name: "Tailwind CSS", category: "design", size: "small" },
    { name: "Bootstrap / SASS", category: "design", size: "small" },
    { name: "Material UI", category: "design", size: "small" },
    { name: "iOS Development", category: "platform", size: "small" },
    { name: "Android Development", category: "platform", size: "small" },
    { name: "Xcode", category: "tools", size: "small" },
    { name: "Android Studio", category: "tools", size: "small" },
    { name: "Agile / Scrum", category: "process", size: "small" },
    { name: "OOP / SOLID", category: "process", size: "small" },
    { name: "MVC", category: "process", size: "small" },
    { name: "Git / GitHub", category: "tools", size: "small" },
    { name: "Figma / Sketch", category: "design", size: "small" },
    { name: "Context API", category: "state", size: "small" },
    { name: "TanStack Query", category: "state", size: "small" },
];

const sizeClasses = {
    large: "col-span-2 row-span-2",
    medium: "col-span-2 row-span-1",
    small: "col-span-1 row-span-1",
};

const categoryColors = {
    core: "from-primary/20 to-primary/5 border-primary/30 hover:border-primary/60",
    state: "from-accent/20 to-accent/5 border-accent/30 hover:border-accent/60",
    web: "from-primary/15 to-primary/5 border-primary/20 hover:border-primary/50",
    integration: "from-accent/15 to-accent/5 border-accent/20 hover:border-accent/50",
    platform: "from-primary/10 to-transparent border-border/50 hover:border-primary/40",
    tools: "from-muted/50 to-transparent border-border/50 hover:border-muted-foreground/40",
    process: "from-accent/10 to-transparent border-border/50 hover:border-accent/40",
    design: "from-primary/10 to-transparent border-border/50 hover:border-primary/40",
};

export default function SkillsGrid({ skillsImage }) {
    return (
        <section id="skills" className="relative py-24 sm:py-32 px-6 overflow-hidden">
            {/* Background accent image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={skillsImage}
                    alt="Abstract tech layers"
                    className="w-full h-full object-cover opacity-[0.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Section header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    className="mb-16"
                >
                    <span className="font-mono text-sm text-accent tracking-widest uppercase">// Skills</span>
                    <h2 className="text-4xl sm:text-5xl font-bold mt-3 text-foreground">Technical Arsenal</h2>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    variants={staggerContainer(0.05, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            variants={scaleIn}
                            className={`${sizeClasses[skill.size]} group`}
                        >
                            <div
                                className={`h-full p-5 sm:p-6 rounded-2xl bg-gradient-to-br border backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] cursor-default flex flex-col justify-between ${categoryColors[skill.category]}`}
                            >
                                <div>
                                    <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                                        {skill.category}
                                    </span>
                                    <h3
                                        className={`font-bold mt-2 text-foreground group-hover:text-primary transition-colors ${skill.size === "large" ? "text-2xl sm:text-3xl" : skill.size === "medium" ? "text-lg sm:text-xl" : "text-sm sm:text-base"
                                            }`}
                                    >
                                        {skill.name}
                                    </h3>
                                </div>
                                {skill.size === "large" && (
                                    <div className="mt-4">
                                        <div className="flex items-center gap-2 mt-1">
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
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}