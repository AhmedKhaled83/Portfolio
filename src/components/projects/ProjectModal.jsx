import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { X, Users, Briefcase, Smartphone, CheckCircle2 } from "lucide-react";
import TechBadge from "@/components/common/TechBadge";
import StoreLinks from "./StoreLinks";

function Fact({ icon: Icon, label, value, highlight = false }) {
    return (
        <div className={`p-3 rounded-xl border ${highlight ? "bg-primary/10 border-primary/20" : "bg-secondary/40 border-border/50"}`}>
            <span className={`flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest ${highlight ? "text-primary" : "text-muted-foreground"}`}>
                <Icon className="w-3 h-3" /> {label}
            </span>
            <p className="text-sm font-semibold text-foreground mt-1">{value}</p>
        </div>
    );
}

function Heading({ children }) {
    return <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-7 mb-3">{children}</h4>;
}

export default function ProjectModal({ project, onClose }) {
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && onClose();
        document.addEventListener("keydown", onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-background/80 backdrop-blur-md p-0 sm:p-6"
        >
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
                className="relative w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-card border border-border/60 shadow-2xl"
            >
                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/70 backdrop-blur-sm border border-border/50 text-foreground hover:bg-background transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>

                <div className="relative h-56 sm:h-64">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                </div>

                <div className="p-6 sm:p-8 -mt-12 relative">
                    <span className="font-mono text-xs uppercase tracking-widest text-accent">{project.category}</span>
                    <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-bold text-foreground mt-1">
                        {project.title}
                    </h3>

                    {/* Quick facts */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
                        <Fact icon={Smartphone} label="Platforms" value={project.platforms.join(", ")} />
                        {project.company && <Fact icon={Briefcase} label="Built at" value={project.company} />}
                        {project.metric && <Fact icon={Users} label="Reach" value={project.metric} highlight />}
                    </div>

                    <Heading>Overview</Heading>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{project.description}</p>

                    <Heading>Key features</Heading>
                    <ul className="space-y-2">
                        {project.features.map((f) => (
                            <li key={f} className="flex gap-2.5 text-sm text-foreground/90">
                                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                {f}
                            </li>
                        ))}
                    </ul>

                    <Heading>Tech stack</Heading>
                    <div className="flex flex-wrap gap-2 mb-7">
                        {project.stack.map((tech) => (
                            <TechBadge key={tech}>{tech}</TechBadge>
                        ))}
                    </div>

                    <StoreLinks project={project} />
                </div>
            </motion.div>
        </motion.div>
    );
}
