import React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function TechBadge({ children, muted = false, className }) {
    return (
        <Badge
            variant="outline"
            className={cn(
                "font-mono text-xs transition-colors",
                muted
                    ? "border-border/50 text-muted-foreground"
                    : "border-primary/20 text-primary bg-primary/5 hover:bg-primary/10",
                className
            )}
        >
            {children}
        </Badge>
    );
}
