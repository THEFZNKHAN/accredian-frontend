import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import TopBanner from "./components/layout/TopBanner";
import Tabs from "./components/layout/Tabs";
import HeroSection from "./components/sections/HeroSection";
import Refer from "./components/sections/Refer";

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ["Refer", "Benefits", "FAQs", "Support"];

    return (
        <Router>
            <TopBanner />
            <Navbar />

            <div className="container mx-auto flex justify-center items-center flex-col px-4 py-8">
                <div className="mb-8 w-[797px] relative">
                    <Tabs
                        tabs={tabs}
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                    />
                </div>

                <HeroSection />
                <Refer />
            </div>
        </Router>
    );
};

export default App;
