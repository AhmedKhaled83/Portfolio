import React from "react";
import { cn } from "@/lib/utils";

export default function Section({ id, children, background, className, containerClassName }) {
    return (
        <section id={id} className={cn("relative py-24 sm:py-32 px-6", background && "overflow-hidden", className)}>
            {background && <div className="absolute inset-0 z-0">{background}</div>}
            <div className={cn("relative max-w-5xl mx-auto", background && "z-10", containerClassName)}>{children}</div>
        </section>
    );
}
