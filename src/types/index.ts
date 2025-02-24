import React from "react";

export interface NavLinkProps {
    text: string;
    href: string;
    active?: boolean;
}

export interface ButtonProps {
    text: string | React.ReactNode;
    variant: "primary" | "secondary" | "outline";
    onClick?: () => void;
    className?: string;
}
