import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";
import ProjectFilters from "@/components/projects/ProjectFilters";
import { projects, projectCategories } from "@/data/projects";

const countFor = (category) =>
    category === "All" ? projects.length : projects.filter((p) => p.category === category).length;

export default function ProjectsSection() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [selected, setSelected] = useState(null);

    const visibleProjects = useMemo(
        () => (activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)),
        [activeFilter]
    );

    return (
        <Section id="projects">
            <SectionHeader
                eyebrow="Projects"
                title="Products"
                description="Production apps live on the App Store, Google Play, and the web — across banking, FinTech, healthcare, and e-commerce. Tap any project for the full story."
                className="mb-10"
            />

            <ProjectFilters
                categories={projectCategories}
                active={activeFilter}
                onChange={setActiveFilter}
                getCount={countFor}
            />

            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <AnimatePresence mode="popLayout">
                    {visibleProjects.map((project) => (
                        <ProjectCard key={project.title} project={project} onOpen={() => setSelected(project)} />
                    ))}
                </AnimatePresence>
            </motion.div>

            <AnimatePresence>
                {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
            </AnimatePresence>
        </Section>
    );
}
