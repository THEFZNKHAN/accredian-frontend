import {
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";

const SocialLinks = () => {
    return (
        <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
                <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                    aria-label="Facebook"
                >
                    <FaFacebook size={24} />
                </a>
                <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin size={24} />
                </a>
                <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                    aria-label="Twitter"
                >
                    <FaTwitter size={24} />
                </a>
                <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                    aria-label="Instagram"
                >
                    <FaInstagram size={24} />
                </a>
                <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                    aria-label="YouTube"
                >
                    <FaYoutube size={24} />
                </a>
            </div>
        </div>
    );
};

export default SocialLinks;
