import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import SkillTile from "@/components/skills/SkillTile";
import { skills } from "@/data/skills";
import { staggerContainer, viewportOnce } from "@/lib/animationVariants";
import SkillsBg from "@/assets/bg/bg2.png";

const background = (
    <>
        <img src={SkillsBg} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-[0.06]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
    </>
);

export default function SkillsSection() {
    return (
        <Section id="skills" background={background}>
            <SectionHeader eyebrow="Skills" title="Technical Arsenal" />

            <motion.div
                variants={staggerContainer(0.05, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
            >
                {skills.map((skill) => (
                    <SkillTile key={skill.name} skill={skill} />
                ))}
            </motion.div>
        </Section>
    );
}
