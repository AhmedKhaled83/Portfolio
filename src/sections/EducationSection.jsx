import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import TechBadge from "@/components/common/TechBadge";
import { fadeLeft, fadeRight, viewportOnce } from "@/lib/animationVariants";
import { degree, courses } from "@/data/education";

function InfoCard({ variants, icon: Icon, tone = "primary", children }) {
    const toneClasses = tone === "accent"
        ? { card: "hover:border-accent/30", iconBox: "bg-accent/10", icon: "text-accent" }
        : { card: "hover:border-primary/30", iconBox: "bg-primary/10", icon: "text-primary" };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className={`p-8 rounded-2xl bg-card/50 border border-border/50 transition-all duration-500 ${toneClasses.card}`}
        >
            <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${toneClasses.iconBox}`}>
                    <Icon className={`w-6 h-6 ${toneClasses.icon}`} />
                </div>
                <div>{children}</div>
            </div>
        </motion.div>
    );
}

export default function EducationSection() {
    return (
        <Section id="education">
            <SectionHeader eyebrow="Education" title="Academic Foundation" />

            <div className="grid sm:grid-cols-2 gap-6">
                <InfoCard variants={fadeLeft} icon={GraduationCap}>
                    <h3 className="text-xl font-bold text-foreground">{degree.university}</h3>
                    <p className="text-muted-foreground mt-1">{degree.faculty}</p>
                    <p className="text-foreground font-medium mt-2">{degree.title}</p>
                    <div className="flex items-center gap-3 mt-3">
                        <TechBadge>{degree.grade}</TechBadge>
                        <span className="font-mono text-xs text-muted-foreground">{degree.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{degree.location}</p>
                </InfoCard>

                <InfoCard variants={fadeRight} icon={BookOpen} tone="accent">
                    <h3 className="text-xl font-bold text-foreground">Professional Courses</h3>
                    <p className="text-muted-foreground mt-1">Continuous learning & certifications</p>
                    <ul className="mt-4 space-y-3">
                        {courses.map((course) => (
                            <li key={course} className="flex items-center gap-3 text-sm text-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                {course}
                            </li>
                        ))}
                    </ul>
                </InfoCard>
            </div>
        </Section>
    );
}
