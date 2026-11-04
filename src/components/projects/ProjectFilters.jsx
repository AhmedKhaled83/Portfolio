import React from "react";
import { cn } from "@/lib/utils";

export default function ProjectFilters({ categories, active, onChange, getCount }) {
    return (
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter projects by category">
            {categories.map((category) => {
                const isActive = active === category;
                return (
                    <button
                        key={category}
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => onChange(category)}
                        className={cn(
                            "px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300",
                            isActive
                                ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                                : "bg-card/40 text-muted-foreground border-border/50 hover:border-primary/40 hover:text-foreground"
                        )}
                    >
                        {category}
                        <span className={cn("ml-2 font-mono text-xs", isActive ? "opacity-80" : "opacity-60")}>
                            {getCount(category)}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}
