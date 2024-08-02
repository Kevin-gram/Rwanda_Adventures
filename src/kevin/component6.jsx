import { FaArrowRight } from "react-icons/fa";
import React from "react";
import myImage from '../images/wallpaper.jpg';
import '../components/bg.css';
import { useNavigate } from 'react-router-dom';

const page = {
    heading: "Get to know Rwanda",
    text: "Explore all articles",
    text1: "Here are a few things to help you get acquainted with this unique hilly country.",
};

const SeeMore = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log("Button clicked"); // Check if handleClick function is triggered
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of the page
        setTimeout(() => {
            navigate('/Places'); // Navigate after a small delay
        }, 300); // Adjust the delay time as needed
    };

    return (
        <button className="bg-white text-green-700 px-4 py-2 rounded-md mt-4 flex items-center text-sm md:text-base w-40" onClick={handleClick}>
            Learn more
            <FaArrowRight className="ml-2 h-4 md:h-5" />
        </button>
    );
};

export default function Component6() {
    return (
        <div id='six' className="background">
            <div className="sm:h-full relative lg:h-full">
                <div className="flex flex-col p-10 pt-40 text-white gap-10">
                    <h1 className="text-3xl md:text-5xl font-bold">{page.heading}</h1>
                    <p className="text-2xl pt-4">{page.text1}</p>
                    <SeeMore />
                </div>
            </div>
        </div>
    );
}
