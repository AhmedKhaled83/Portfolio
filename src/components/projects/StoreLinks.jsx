import React from "react";
import { AppleIcon, PlayIcon, GlobeIcon } from "@/components/icons/BrandIcons";

const base = "flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-[1.02] whitespace-nowrap";
const primary = `${base} bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20`;
const accent = `${base} bg-accent/10 border border-accent/20 text-accent hover:bg-accent/20`;

export default function StoreLinks({ project }) {
    const links = [
        project.ios && { href: project.ios, label: "App Store", Icon: AppleIcon, className: primary },
        project.android && { href: project.android, label: "Google Play", Icon: PlayIcon, className: accent },
        project.web && { href: project.web, label: "Website", Icon: GlobeIcon, className: primary },
    ].filter(Boolean);

    if (!links.length) return null;

    return (
        <div className="flex flex-wrap gap-3">
            {links.map(({ href, label, Icon, className }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={className}
                >
                    <Icon />
                    {label}
                </a>
            ))}
        </div>
    );
}
