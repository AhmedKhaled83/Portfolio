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
            "Published 10+ production mobile applications and 3 websites, contributing across the full product lifecycle from development to release on App Store, Google Play, and web.",
            "Contributed to updating and enhancing a company website, now serving ~1 million users, improving performance and user experience at scale.",
            "Developed and maintained a Banking mobile application serving ~50K users, increasing application security by ~40% through JWT, OAuth 2.0, encryption, and biometric authentication aligned with OWASP Mobile Security standards.",
            "Delivered a ~60% performance improvement across a high-traffic Medical Insurance application (100K+ users) by re-architecting state management, optimizing component rendering, and eliminating unnecessary API calls.",
            "Delivered new E-commerce and Web platforms from the ground up, while modernizing legacy systems with current best practices to boost performance and maintainability.",
            "Established code review and security standards adopted across the team, mentoring team members on secure coding practices.",
            "Served as the lead developer for a dedicated project, taking full ownership of technical direction, architecture decisions, and feature delivery from planning through release.",
        ],
        stack: ["React Native", "React", "TypeScript", "Redux Toolkit", "Zustand", "TanStack Query", "OWASP"],
    },
    {
        company: "LOGIN HR System",
        linkedIn: "https://www.linkedin.com/company/login-systems/",
        role: "React Native Developer (Part-Time)",
        period: "September 2024 – January 2025",
        highlights: [
            "Built an E-commerce mobile application from scratch (0 to 1), serving 10K+ users, laying the technical foundation from initial architecture through first release.",
            "Collaborated closely with UX/UI designers and product managers to translate Figma/Sketch designs into intuitive, responsive interfaces.",
            "Implemented secure and scalable mobile features with a focus on performance and clean architecture, ensuring a smooth user experience from launch.",
        ],
        stack: ["React Native", "JavaScript", "E-commerce", "Figma"],
    },
    {
        company: "IT Fusion",
        linkedIn: "https://www.linkedin.com/company/it-fusion-software-house/",
        role: "React, React Native Developer",
        period: "March 2023 – January 2025",
        highlights: [
            "Built a Medical mobile application from scratch, scaling to serve 400K+ users, establishing core architecture, state management, and API integration from the ground up.",
            "Upgraded legacy applications with new features and modern technical practices, and modernized outdated websites using MVC architecture to improve structure and maintainability.",
            "Contributed to E-commerce, FinTech, and Web platforms, translating Figma/Sketch designs into responsive, high-quality user interfaces.",
            "Participated in code reviews, offered constructive feedback, and helped maintain high code quality across the team.",
            "Integrated RESTful APIs and managed application state using Redux, deploying applications via App Store and Google Play.",
        ],
        stack: ["React Native", "React", "Redux", "MVC", "REST APIs"],
    },
    {
        company: "Sarri Technology",
        linkedIn: "https://www.linkedin.com/company/sari-it-technology/",
        role: "React, React Native Developer",
        period: "October 2022 – March 2023",
        highlights: [
            "Developed, maintained, and deployed Android and iOS applications, working alongside cross-functional teams to scope requirements and ship to production.",
            "Built an E-commerce mobile application and an HR System mobile application from scratch, each scaling to 10K+ users, from initial development through release.",
        ],
        stack: ["React Native", "React", "Android", "iOS"],
    },
    {
        company: "Mono Company",
        linkedIn: "https://www.linkedin.com/company/mono-services/",
        role: "React Native Developer",
        period: "May 2022 – August 2022",
        highlights: [
            "Built the company's first E-commerce mobile application, setting up the initial technical foundation — architecture, state handling, and API connections — for both iOS and Android.",
            "Partnered with the design and QA team to align on requirements and deliver the company's first stable production release across iOS and Android.",
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