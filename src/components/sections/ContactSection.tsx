const ContactSection = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <ul className="space-y-3 text-gray-300">
                <li>
                    Email us (For Data Science Queries):{" "}
                    <a
                        href="mailto:admissions@accredian.com"
                        className="hover:text-white"
                    >
                        admissions@accredian.com
                    </a>
                </li>
                <li>
                    Email us (For Product Management Queries):{" "}
                    <a
                        href="mailto:pm@accredian.com"
                        className="hover:text-white"
                    >
                        pm@accredian.com
                    </a>
                </li>
                <li>
                    Data Science Admission Helpline:{" "}
                    <a href="tel:+919079653292" className="hover:text-white">
                        +91 9079653292
                    </a>{" "}
                    (9 AM - 7 PM)
                </li>
                <li>
                    Product Management Admission Helpline:{" "}
                    <a href="tel:+919625811095" className="hover:text-white">
                        +91 9625811095
                    </a>
                </li>
                <li>
                    Enrolled Student Helpline:{" "}
                    <a href="tel:+917969322507" className="hover:text-white">
                        +91 7969322507
                    </a>
                </li>
                <li>
                    Office Address: 4th Floor, 250, Phase IV, Udyog Vihar,
                    Sector 18, Gurugram, Haryana 122015
                </li>
            </ul>
        </div>
    );
};

export default ContactSection;
