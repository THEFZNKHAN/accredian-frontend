import React from "react";
import { ButtonProps } from "../../types";

const Button: React.FC<ButtonProps> = ({
    text,
    variant,
    onClick,
    className = "",
}) => {
    const baseClasses =
        "px-4 py-2 rounded-md font-medium transition-all duration-200";

    const variantClasses = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        outline: "border border-blue-500 text-blue-500 hover:bg-blue-50",
    };

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
