import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import ExperienceCard from "@/components/experience/ExperienceCard";
import { experiences } from "@/data/experience";
import { viewportOnce } from "@/lib/animationVariants";

export default function ExperienceSection() {
    return (
        <Section id="experience">
            <SectionHeader eyebrow="Experience" title="Experience" />

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
                        <ExperienceCard key={exp.company} experience={exp} index={index} />
                    ))}
                </div>
            </div>
        </Section>
    );
}
