import React from "react";
import HeroSection from "../portfolio/HeroSection";
import ExperienceTimeline from "../portfolio/ExperienceTimeline";
import SkillsGrid from "../portfolio/SkillsGrid";
import EducationSection from "../portfolio/EducationSection";
import ProjectsSection from "../portfolio/ProjectsSection";
import ContactFooter from "../portfolio/ContactFooter";
import FloatingNav from "../portfolio/FloatingNav";

const HERO_IMAGE = '../assets/bg/bg1.png';
const SKILLS_IMAGE = '../assets/bg/bg2.png';

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <FloatingNav />
            <HeroSection heroImage={HERO_IMAGE} />
            <ExperienceTimeline />
            <SkillsGrid skillsImage={SKILLS_IMAGE} />
            <EducationSection />
            <ProjectsSection />
            {/* <TestimonialsSection /> */}
            <ContactFooter />
        </div>
    );
}