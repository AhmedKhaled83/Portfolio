import React from "react";
import { Smartphone, Monitor } from "lucide-react";

export default function PlatformIcons({ platforms }) {
    return (
        <div className="flex items-center gap-1.5 text-muted-foreground">
            {platforms.some((p) => p !== "Web") && <Smartphone className="w-3.5 h-3.5" />}
            {platforms.includes("Web") && <Monitor className="w-3.5 h-3.5" />}
            <span className="font-mono text-[11px]">{platforms.join(" · ")}</span>
        </div>
    );
}
