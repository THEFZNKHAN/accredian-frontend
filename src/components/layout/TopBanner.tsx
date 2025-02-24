import React from "react";

const TopBanner: React.FC = () => {
    return (
        <header className="bg-blue-50 py-2 text-center text-sm">
            <p className="flex items-center justify-center">
                Navigate your ideal career path with tailored expert advice
                <a
                    href="/contact"
                    className="ml-2 text-primary-500 hover:underline"
                >
                    Contact Expert
                </a>
            </p>
        </header>
    );
};

export default TopBanner;
