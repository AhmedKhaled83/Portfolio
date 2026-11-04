import React from "react";
import { motion } from "framer-motion";
import TechBadge from "@/components/common/TechBadge";
import { LinkedInIcon } from "@/components/icons/BrandIcons";
import { fadeLeft, viewportOnce } from "@/lib/animationVariants";

function CompanyName({ company, linkedIn }) {
    if (!linkedIn) {
        return (
            <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                {company}
            </h3>
        );
    }

    return (
        <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
        >
            <h3 className="text-xl sm:text-2xl font-bold">{company}</h3>
            <LinkedInIcon />
        </a>
    );
}

// Matches user-count metrics such as "~1 million users" or "100K+ users".
const userMetricPattern = /(~?\d+(?:K\+?| million)\+? users)/;

function HighlightText({ text }) {
    return text.split(userMetricPattern).map((part, i) =>
        i % 2 === 1 ? (
            <span key={i} className="font-semibold text-accent">
                {part}
            </span>
        ) : (
            part
        )
    );
}

export default function ExperienceCard({ experience, index }) {
    const { company, linkedIn, role, period, highlights, stack } = experience;

    return (
        <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative pl-8 sm:pl-20"
        >
            {/* Timeline dot */}
            <div className="absolute left-0 sm:left-8 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background" />

            <div className="group p-6 sm:p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:bg-card/80">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                        <CompanyName company={company} linkedIn={linkedIn} />
                        <p className="text-muted-foreground mt-1">{role}</p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground whitespace-nowrap bg-secondary/50 px-3 py-1.5 rounded-full self-start sm:self-auto">
                        {period}
                    </span>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-5">
                    {highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                            <span className="text-primary mt-1.5 shrink-0">▸</span>
                            <span>
                                <HighlightText text={h} />
                            </span>
                        </li>
                    ))}
                </ul>

                {/* Stack */}
                <div className="flex flex-wrap gap-2">
                    {stack.map((tech) => (
                        <TechBadge key={tech}>{tech}</TechBadge>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
