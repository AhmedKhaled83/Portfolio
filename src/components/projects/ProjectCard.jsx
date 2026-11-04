import React from "react";
import { motion } from "framer-motion";
import { Users, ArrowUpRight } from "lucide-react";
import TechBadge from "@/components/common/TechBadge";
import StoreLinks from "./StoreLinks";
import PlatformIcons from "./PlatformIcons";

const MAX_BADGES = 4;

export default function ProjectCard({ project, onOpen }) {
    const extraBadges = project.stack.length - MAX_BADGES;

    return (
        <motion.article
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={onOpen}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), onOpen())}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${project.title}`}
            className="group cursor-pointer rounded-2xl bg-card/50 border border-border/50 hover:border-primary/40 overflow-hidden transition-colors duration-500 hover:bg-card/80 flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
            {/* Image */}
            <div className="relative overflow-hidden h-48 bg-muted/10">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-background/70 backdrop-blur-sm border border-border/50 font-mono text-[10px] uppercase tracking-widest text-accent">
                    {project.category}
                </span>
                {project.metric && (
                    <span className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/80 backdrop-blur-sm text-primary-foreground text-[11px] font-semibold">
                        <Users className="w-3 h-3" />
                        {project.metric}
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-3 mb-3">
                    <PlatformIcons platforms={project.platforms} />
                    {project.company && (
                        <span className="font-mono text-[11px] text-muted-foreground">@ {project.company}</span>
                    )}
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.summary}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {project.stack.slice(0, MAX_BADGES).map((tech) => (
                        <TechBadge key={tech}>{tech}</TechBadge>
                    ))}
                    {extraBadges > 0 && <TechBadge muted>+{extraBadges}</TechBadge>}
                </div>

                <StoreLinks project={project} />

                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                    View details
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
            </div>
        </motion.article>
    );
}
