import React from "react";

interface TabProps {
    label: string;
    active?: boolean;
    onClick?: () => void;
}

const Tab: React.FC<TabProps> = ({ label, active, onClick }) => (
    <button
        className={`relative px-6 py-3 text-lg font-medium transition-colors duration-200 ${
            active ? "text-blue-500" : "text-gray-700 hover:text-blue-400"
        }`}
        onClick={onClick}
    >
        {label}
        {active && (
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 mb-1 bg-blue-500 rounded-full"></span>
        )}
    </button>
);

interface TabsProps {
    tabs: string[];
    activeTab: number;
    onTabChange: (index: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
    const handleTabClick = (index: number) => {
        onTabChange(index);
        const element = document.getElementById(tabs[index]);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="flex justify-center border-b border-gray-200 bg-blue-50 rounded-full mx-auto max-w-3xl">
            {tabs.map((tab, index) => (
                <Tab
                    key={index}
                    label={tab}
                    active={index === activeTab}
                    onClick={() => handleTabClick(index)}
                />
            ))}
        </div>
    );
};

export default Tabs;
