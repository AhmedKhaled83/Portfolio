import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { fadeUp, fadeLeft, staggerContainer, viewportOnce } from "@/lib/animationVariants";

function LinkedInIcon() {
    return (
        <svg className="w-5 h-5 inline-block ml-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
    );
}

const experiences = [
    {
        company: "Nice Deer",
        linkedIn: "https://www.linkedin.com/company/nice-deer/",
        role: "React, React Native Developer",
        period: "August 2025 – Present",
        highlights: [
            "Architected high-performance, cross-platform mobile apps for iOS and Android with exceptional speed and responsiveness.",
            "Built secure, scalable features with optimized code and industry-standard data protection practices.",
            "Led responsive UI development from Figma/Sketch designs with advanced performance optimization.",
            "Integrated RESTful APIs, managed state with Redux/Context API, deployed to App Store & Google Play.",
            "Championed Agile methodologies including sprint planning, standups, and retrospectives.",
        ],
        stack: ["React Native", "React", "Redux", "TypeScript", "REST APIs"],
    },
    {
        company: "LOGIN HR System",
        linkedIn: "https://www.linkedin.com/company/login-systems/",
        role: "React Native Developer (Part-Time)",
        period: "September 2024 – January 2025",
        highlights: [
            "Developed and maintained high-performance cross-platform mobile applications.",
            "Built secure, scalable mobile features focused on performance and clean architecture.",
            "Designed scalable, secure features with performance optimization and user-centric design.",
            "Collaborated with UX/UI designers and product managers to deliver intuitive, responsive designs.",
        ],
        stack: ["React Native", "React", "JavaScript", "Mobile UI/UX"],
    },
    {
        company: "IT Fusion",
        linkedIn: "https://www.linkedin.com/company/it-fusion-software-house/",
        role: "React, React Native Developer",
        period: "March 2023 – January 2025",
        highlights: [
            "Developed and maintained cross-platform mobile applications for iOS and Android.",
            "Translated Figma/Sketch mockups into intuitive, responsive user interfaces.",
            "Participated in code reviews and maintained high code quality across the team.",
            "Integrated RESTful APIs, managed state with Redux, deployed via App Store & Google Play.",
        ],
        stack: ["React Native", "React", "Redux", "Figma", "REST APIs"],
    },
    {
        company: "Sarri Technology",
        linkedIn: "https://www.linkedin.com/company/sari-it-technology/",
        role: "React, React Native Developer",
        period: "October 2022 – March 2023",
        highlights: [
            "Developed, maintained and deployed Android and iOS applications.",
            "Collaborated with cross-functional teams to define project requirements.",
            "Worked closely with designers and testers to deliver high-quality applications.",
        ],
        stack: ["React Native", "React", "Android", "iOS"],
    },
    {
        company: "Mono Company",
        linkedIn: "https://www.linkedin.com/company/mono-services/",
        role: "React Native Developer",
        period: "May 2022 – August 2022",
        highlights: [
            "Developed, maintained and deployed Android and iOS applications.",
            "Collaborated with cross-functional teams to define requirements and deliver quality apps.",
        ],
        stack: ["React Native", "Android", "iOS"],
    },
];

export default function ExperienceTimeline() {
    return (
        <section id="experience" className="relative py-24 sm:py-32 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Section header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    className="mb-16"
                >
                    <span className="font-mono text-sm text-accent tracking-widest uppercase">// Experience</span>
                    <h2 className="text-4xl sm:text-5xl font-bold mt-3 text-foreground">Experience</h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <motion.div
                        initial={{ scaleY: 0, originY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={viewportOnce}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute left-0 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent"
                    />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={fadeLeft}
                                initial="hidden"
                                whileInView="show"
                                viewport={viewportOnce}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="relative pl-8 sm:pl-20"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 sm:left-8 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background" />

                                {/* Content card */}
                                <div className="group p-6 sm:p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:bg-card/80">
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                        <div>
                                            {exp.linkedIn ? (
                                                <a
                                                    href={exp.linkedIn}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center hover:text-primary transition-colors cursor-pointer"
                                                >
                                                    <h3 className="text-xl sm:text-2xl font-bold text-foreground hover:text-primary transition-colors">
                                                        {exp.company}
                                                    </h3>
                                                    <LinkedInIcon />
                                                </a>
                                            ) : (
                                                <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                    {exp.company}
                                                </h3>
                                            )}
                                            <p className="text-muted-foreground mt-1">{exp.role}</p>
                                        </div>
                                        <span className="font-mono text-xs text-muted-foreground whitespace-nowrap bg-secondary/50 px-3 py-1.5 rounded-full">
                                            {exp.period}
                                        </span>
                                    </div>

                                    {/* Highlights */}
                                    <ul className="space-y-2 mb-5">
                                        {exp.highlights.map((h, i) => (
                                            <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                                                <span className="text-primary mt-1.5 shrink-0">▸</span>
                                                {h}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Stack badges */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.stack.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="outline"
                                                className="border-primary/20 text-primary bg-primary/5 font-mono text-xs hover:bg-primary/10 transition-colors"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}