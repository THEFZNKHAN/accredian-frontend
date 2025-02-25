import Logo from "../UI/Logo";
import ProgramsSection from "../sections/ProgramsSection";
import ContactSection from "../sections/ContactSection";
import CompanySection from "../sections/CompanySection";
import SocialLinks from "../sections/SocialLinks";
import CtaButton from "../UI/CTAButton";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white w-screen px-4 py-10">
            <div className="container mx-auto max-w-7xl">
                <div className="flex justify-between items-start mb-8">
                    <div className="m-6">
                        <Logo />
                    </div>
                    <div className="m-4">
                        <CtaButton />
                    </div>
                </div>

                <hr className="border-gray-700 my-8" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ProgramsSection />
                    <ContactSection />
                    <CompanySection />
                </div>

                <div className="mt-16">
                    <h3 className="text-xl font-semibold mb-4">
                        Why Accredian
                    </h3>
                    <SocialLinks />
                </div>

                <div className="mt-12 text-center text-gray-400 text-sm">
                    © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All
                    Rights Reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
