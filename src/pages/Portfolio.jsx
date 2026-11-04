import React from "react";
import FloatingNav from "@/components/layout/FloatingNav";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/sections/HeroSection";
import ExperienceSection from "@/sections/ExperienceSection";
import SkillsSection from "@/sections/SkillsSection";
import EducationSection from "@/sections/EducationSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ContactSection from "@/sections/ContactSection";

export default function Portfolio() {
    return (
        <div className="min-h-screen text-foreground font-sans">
            <FloatingNav />
            <main>
                <HeroSection />
                <ExperienceSection />
                <SkillsSection />
                <EducationSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}
