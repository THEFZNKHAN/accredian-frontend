import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FooterAccordionProps {
    title: string;
    children: React.ReactNode;
}

const FooterAccordion = ({ title, children }: FooterAccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-700">
            <button
                className="flex justify-between items-center w-full py-4 text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-medium">{title}</span>
                <span className="ml-6">
                    {isOpen ? <FaMinus size={16} /> : <FaPlus size={16} />}
                </span>
            </button>
            {isOpen && <div className="pb-4">{children}</div>}
        </div>
    );
};

export default FooterAccordion;
