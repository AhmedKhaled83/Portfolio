import React from "react";
import { profile } from "@/data/profile";

export default function Footer() {
    return (
        <footer className="mt-24 py-8 border-t border-border/30 text-center">
            <p className="text-xs font-mono text-muted-foreground">
                © {new Date().getFullYear()} {profile.fullName} — Crafted with React
            </p>
        </footer>
    );
}
