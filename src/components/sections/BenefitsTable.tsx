import { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

type Program = {
    id: number;
    name: string;
    referrerBonus: number;
    refereeBonus: number;
};

const programsData: Program[] = [
    {
        id: 1,
        name: "Professional Certificate Program in Product Management",
        referrerBonus: 7000,
        refereeBonus: 9000,
    },
    {
        id: 2,
        name: "PG Certificate Program in Strategic Product Management",
        referrerBonus: 9000,
        refereeBonus: 11000,
    },
    {
        id: 3,
        name: "Executive Program in Data Driven Product Management",
        referrerBonus: 10000,
        refereeBonus: 10000,
    },
    {
        id: 4,
        name: "Executive Program in Product Management and Digital Transformation",
        referrerBonus: 10000,
        refereeBonus: 10000,
    },
    {
        id: 5,
        name: "Executive Program in Product Management",
        referrerBonus: 10000,
        refereeBonus: 10000,
    },
    {
        id: 6,
        name: "Advanced Certification in Product Management",
        referrerBonus: 10000,
        refereeBonus: 10000,
    },
    {
        id: 7,
        name: "Executive Program in Product Management and Project Management",
        referrerBonus: 10000,
        refereeBonus: 10000,
    },
];

const BenefitsTable = () => {
    const [isEnrolled, setIsEnrolled] = useState(true);
    const [showAllPrograms, setShowAllPrograms] = useState(false);

    const displayedPrograms = showAllPrograms
        ? programsData
        : programsData.slice(0, 7);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    What Are The{" "}
                    <span className="text-primary-500">Referral Benefits?</span>
                </h2>

                <div className="flex justify-end mb-6">
                    <label className="flex items-center cursor-pointer">
                        <span className="mr-2 text-sm">Enrolled</span>
                        <div className="relative">
                            <input
                                type="checkbox"
                                className="sr-only"
                                checked={isEnrolled}
                                onChange={() => setIsEnrolled(!isEnrolled)}
                            />
                            <div
                                className={`block w-10 h-6 rounded-full ${
                                    isEnrolled
                                        ? "bg-primary-500"
                                        : "bg-gray-400"
                                }`}
                            ></div>
                            <div
                                className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform transform ${
                                    isEnrolled
                                        ? "translate-x-4"
                                        : "translate-x-0"
                                }`}
                            ></div>
                        </div>
                    </label>
                </div>

                <div className="overflow-x-auto">
                    <div className="min-w-full rounded-lg shadow overflow-hidden">
                        <div className="grid grid-cols-12 bg-blue-100 p-4">
                            <div className="col-span-6 font-medium text-sm">
                                Programs
                            </div>
                            <div className="col-span-3 font-medium text-sm text-center">
                                Referrer Bonus
                            </div>
                            <div className="col-span-3 font-medium text-sm text-center">
                                Referee Bonus
                            </div>
                        </div>

                        {displayedPrograms.map((program) => (
                            <div
                                key={program.id}
                                className="grid grid-cols-12 border-b border-gray-100 p-4 bg-white"
                            >
                                <div className="col-span-6 flex items-center">
                                    <GraduationCap className="w-5 h-5 text-primary-500 mr-2" />
                                    <span className="text-sm">
                                        {program.name}
                                    </span>
                                </div>
                                <div className="col-span-3 text-sm text-center">
                                    ₹ {program.referrerBonus.toLocaleString()}
                                </div>
                                <div className="col-span-3 text-sm text-center">
                                    ₹ {program.refereeBonus.toLocaleString()}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {programsData.length > 7 && (
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={() => setShowAllPrograms(!showAllPrograms)}
                            className="text-sm flex items-center text-gray-600 hover:text-primary-500"
                        >
                            {showAllPrograms ? "Show Less" : "Show More"}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                )}

                <div className="flex justify-center mt-10">
                    <Link to="/refer-now" className="btn btn-primary px-8 py-3">
                        Refer Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BenefitsTable;
