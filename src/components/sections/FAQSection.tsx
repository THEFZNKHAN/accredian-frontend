import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronUp, ChevronDown, Headphones } from "lucide-react";

type FAQ = {
    id: number;
    question: string;
    answer: string;
    category: string;
};

const faqData: FAQ[] = [
    {
        id: 1,
        question:
            "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
        answer: "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
        category: "Eligibility",
    },
    {
        id: 2,
        question: "What is the minimum system configuration required?",
        answer: "A computer with at least 4GB RAM, stable internet connection, and modern web browser is recommended for the best learning experience.",
        category: "How To Use?",
    },
    {
        id: 3,
        question: "Can I get a refund if I'm not satisfied with the course?",
        answer: "Yes, we offer a 7-day money-back guarantee if you decide the course isn't right for you.",
        category: "Terms & Conditions",
    },
];

const FAQSection = () => {
    const [activeCategory, setActiveCategory] = useState("Eligibility");
    const [openFAQ, setOpenFAQ] = useState<number | null>(1);

    const categories = ["Eligibility", "How To Use?", "Terms & Conditions"];
    const filteredFAQs = faqData.filter(
        (faq) => faq.category === activeCategory
    );

    return (
        <section className="py-16 px-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Frequently Asked{" "}
                    <span className="text-primary-500">Questions</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`w-full p-4 text-left rounded-md border ${
                                    activeCategory === category
                                        ? "border-primary-500 bg-white shadow-sm"
                                        : "border-gray-200 bg-white hover:bg-gray-50"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="md:col-span-3 space-y-4">
                        {filteredFAQs.map((faq) => (
                            <div
                                key={faq.id}
                                className="border-b border-gray-200 py-4"
                            >
                                <button
                                    onClick={() =>
                                        setOpenFAQ(
                                            openFAQ === faq.id ? null : faq.id
                                        )
                                    }
                                    className="flex justify-between items-center w-full text-left focus:outline-none"
                                >
                                    <h3 className="text-base font-medium text-primary-500">
                                        {faq.question}
                                    </h3>
                                    {openFAQ === faq.id ? (
                                        <ChevronUp className="h-5 w-5 text-gray-500" />
                                    ) : (
                                        <ChevronDown className="h-5 w-5 text-gray-500" />
                                    )}
                                </button>

                                {openFAQ === faq.id && (
                                    <div className="mt-3 text-sm text-gray-600">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 bg-primary-500 rounded-lg p-8 text-white">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center mb-6 md:mb-0">
                            <div className="bg-white p-4 rounded-full mr-6">
                                <Headphones className="h-8 w-8 text-primary-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-medium mb-2">
                                    Want to delve deeper into the program?
                                </h3>
                                <p>
                                    Share your details to receive expert
                                    insights from our program team!
                                </p>
                            </div>
                        </div>

                        <Link
                            to="/contact"
                            className="btn bg-white text-primary-500 hover:bg-blue-50 px-8 py-3"
                        >
                            Get in touch <span className="text-2xl ml-2">{'>'}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
