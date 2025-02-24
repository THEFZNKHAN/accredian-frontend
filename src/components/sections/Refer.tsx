import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";

const Refer: React.FC = () => {
    return (
        <div
            id="refer"
            className="w-screen h-[785px] flex flex-col justify-between items-center m-0 relative overflow-hidden bg-blue-100 py-8 px-8 mt-20"
        >
            <div>
                <h1 className="text-3xl font-semibold">
                    How Do I <span className="text-blue-500">Refer?</span>
                </h1>
            </div>
            <div className="w-full h-full absolute z-0 -top-16">
                <img src="/circles.png" alt="circles" />
            </div>
            <div className="w-full h-full flex justify-evenly gap-x-6 mt-16 items-center z-10">
                <div className="w-[200px] flex flex-col justify-center items-center ">
                    <FaUserPlus className="text-9xl text-blue-500" />
                    <p className="text-center">
                        Submit referrals easily via our website’s referral
                        section.
                    </p>
                </div>
                <div className="w-[200px] flex flex-col justify-center items-center ">
                    <FaFilePen className="text-9xl text-blue-500" />
                    <p className="text-center">
                        Earn rewards once your referral joins an Accredian
                        program.
                    </p>
                </div>
                <div className="w-[200px] flex flex-col justify-center items-center ">
                    <GiWallet className="text-9xl text-blue-500" />
                    <p className="text-center">
                        Referrer receives a bonus 30 days after program
                        enrollment.
                    </p>
                </div>
            </div>
            <div>
                <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium text-center inline-block">
                    Refer Now
                </button>
            </div>
        </div>
    );
};

export default Refer;
