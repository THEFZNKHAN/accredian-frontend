import React, { useState } from "react";
import Button from "../common/Button";
import { NavLinkProps } from "../../types";
import { FaChevronDown } from "react-icons/fa";

const NavLink: React.FC<NavLinkProps> = ({ text, href, active }) => (
    <a
        href={href}
        className={`px-4 hover:text-blue-600 ${
            active ? "text-blue-500" : "text-gray-700"
        }`}
    >
        {text}
    </a>
);

const Navbar: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="flex items-center justify-around px-6 py-4 bg-white">
            <div className="flex items-center">
                <a href="/" className="text-blue-500 font-bold text-2xl mr-8">
                    accredian
                    <span className="block text-xs text-gray-500">
                        credentials that matter
                    </span>
                </a>
                <div className="relative">
                    <Button
                        text={
                            <span className="flex items-center">
                                Courses{" "}
                                <FaChevronDown className="ml-2 text-sm" />
                            </span>
                        }
                        variant="primary"
                        className="flex items-center"
                        onClick={toggleDropdown}
                    />
                    {dropdownOpen && (
                        <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                            <a
                                href="/courses/course1"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Course 1
                            </a>
                            <a
                                href="/courses/course2"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Course 2
                            </a>
                            <a
                                href="/courses/course3"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Course 3
                            </a>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <NavLink text="Refer & Earn" href="/refer" />
                <NavLink text="Resources" href="/resources" />
                <NavLink text="About Us" href="/about" />
                <Button text="Login" variant="outline" className="mr-3" />
                <Button text="Try for free" variant="primary" />
            </div>
        </nav>
    );
};

export default Navbar;
