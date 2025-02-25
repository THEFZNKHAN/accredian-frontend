import FooterAccordion from "../layout/FooterAccordion";

const programs = [
    { id: 1, title: "Data Science & AI" },
    { id: 2, title: "Product Management" },
    { id: 3, title: "Business Analytics" },
    { id: 4, title: "Digital Transformation" },
    { id: 5, title: "Business Management" },
    { id: 6, title: "Project Management" },
    { id: 7, title: "Strategy & Leadership" },
    { id: 8, title: "Senior Management" },
    { id: 9, title: "Fintech" },
];

const ProgramsSection = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6 hidden md:block">
                Programs
            </h2>
            <div className="md:hidden">
                {programs.map((program) => (
                    <FooterAccordion key={program.id} title={program.title}>
                        <ul className="pl-4 py-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white"
                                >
                                    View Program
                                </a>
                            </li>
                        </ul>
                    </FooterAccordion>
                ))}
            </div>
            <div className="hidden md:block">
                <ul className="space-y-3">
                    {programs.map((program) => (
                        <li key={program.id}>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-white transition"
                            >
                                {program.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProgramsSection;
