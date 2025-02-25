const CtaButton = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <a
                href="#"
                className="bg-blue-500 hover:bg-blue-600 text-white border border-white py-2 px-6 rounded-md transition duration-300 text-center w-full"
            >
                Schedule 1-on-1 Call Now
            </a>
            <p className="text-sm text-gray-400 mt-2">
                Speak with our Learning Advisor
            </p>
        </div>
    );
};

export default CtaButton;
