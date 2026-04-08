import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportOnce } from "@/lib/animationVariants";

const courses = [
    "React & React Native – Udacity",
    "JavaScript ES6 – Udacity",
    "Redux Toolkit",
];

export default function EducationSection() {
    return (
        <section id="education" className="relative py-24 sm:py-32 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Section header */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    className="mb-16"
                >
                    <span className="font-mono text-sm text-accent tracking-widest uppercase">// Education</span>
                    <h2 className="text-4xl sm:text-5xl font-bold mt-3 text-foreground">Academic Foundation</h2>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {/* Degree */}
                    <motion.div
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        className="p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500"
                    >
                        ...
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-primary/10">
                                <GraduationCap className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground">Tanta University</h3>
                                <p className="text-muted-foreground mt-1">Faculty of Computer and Information Systems</p>
                                <p className="text-foreground font-medium mt-2">B.Sc. Computer Science</p>
                                <div className="flex items-center gap-3 mt-3">
                                    <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5 font-mono text-xs">
                                        Very Good
                                    </Badge>
                                    <span className="font-mono text-xs text-muted-foreground">
                                        09/2020 – 06/2024
                                    </span>
                                </div>
                                <p className="text-sm text-muted-foreground mt-2">Tanta, Egypt</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Courses */}
                    <motion.div
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        className="p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-accent/30 transition-all duration-500"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-accent/10">
                                <BookOpen className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground">Professional Courses</h3>
                                <p className="text-muted-foreground mt-1">Continuous learning & certifications</p>
                                <ul className="mt-4 space-y-3">
                                    {courses.map((course, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                            {course}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}