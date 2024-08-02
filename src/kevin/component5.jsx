import { FaArrowRight } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import React, { useState } from "react";
import myImage1 from '../images/mount-kilimanjaro-7287230_1280.jpg';
import myImage2 from '../images/tea-plantation-7344892_1280.jpg';
import myImage3 from '../images/lake-balaton-1608516_1280.jpg';
import myImage4 from '../images/kingfisher-6374507_1280.jpg';
import myImage5 from '../images/trees-975091_1280.jpg';
import myImage6 from '../images/elephant-6824511_1280.jpg';
import '../components/places.css';
import { useNavigate } from 'react-router-dom';

const page = {
    heading: "Get to know Rwanda",
    text: "Explore all articles",
    text1: "Here are a few things to help you get acquainted with this unique hilly country.",
};

export default function Component5() {
    const [likes, setLikes] = useState(Array(6).fill(0)); // Initialize likes state with 0 for each image
    const [liked, setLiked] = useState(Array(6).fill(false)); // Initialize liked state with false for each image

    const handleLikeClick = (index) => {
        const newLikes = [...likes];
        const newLiked = [...liked];
        
        if (newLiked[index]) {
            newLikes[index] -= 1; // Decrease like count
        } else {
            newLikes[index] += 1; // Increase like count
        }
        
        newLiked[index] = !newLiked[index]; // Toggle like status
        setLikes(newLikes);
        setLiked(newLiked);
    };

    const formatLikesCount = (count) => {
        if (count === 0) {
            return ""; // Display no number if there are no likes
        } else if (count >= 1000) {
            return (count / 1000).toFixed(1) + "k";
        } else {
            return count;
        }
    };

    const descriptions = [
        "Mountain Volcanoes",
        " Nyungwe Tea Plantation",
        "Lake Kivu",
        "Nyandungu Eco Tourisim park ",
        "Nyungwe Forest",
        "Akagera National Park"
    ];

    

    const ServiceButton = () => {
        const navigate = useNavigate();
    
        const handleClick = () => {
            navigate('/Services');
            
            // Wait for navigation to complete before scrolling
            setTimeout(() => {
                const serviceSection = document.getElementById('service');
                if (serviceSection) {
                    serviceSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100); // Adjust delay if necessary
        };
    
        return (
            <div>
                <button
                    className=""
                    onClick={handleClick}
                >
                   Activities
                </button>
            </div>
        );
    };

    return (
        <div id='five' className="py-10 bg-slate-100 sm:h-full mb-20">
            <div className="bg-slate-100 h-full mx-10 sm:flex flex-col gap-5">
                <div className="flex flex-col sm:flex-row justify-between">
                    <div className="w-full sm:w-1/2 sm:flex-col">
                        <p className="border-b border-gray-500 w-full sm:w-1/2 pt-4 pb-4"></p>
                        <h1 className="text-xl font-bold pt-4">{page.heading}</h1>
                        <div className="flex flex-row gap-1">
                            <p className="text-green-700 font-semibold text-sm"><ServiceButton/></p>
                            <FaArrowRight className="ml-2 w-3 h-3 lg:w-4 lg:h-4 mt-1.5 md:mt-3.5 text-green-700" />
                        </div>
                    </div>
                    <div>
                        <p className="pt-10 text-lg">{page.text1}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:mx-50 pt-10">
                    {[myImage1, myImage2, myImage3, myImage4, myImage5, myImage6].map((image, index) => (
                        <div key={index} className="flex flex-col justify-center items-center">
                            <div className="relative">
                                <img src={image} alt={descriptions[index]} className="h-52 object-cover rounded-md transition-transform transform hover:scale-110 p-4" />
                                <div className="absolute bottom-0 right-0 flex flex-col items-center ml-10 md:flex-row lg:flex-row">
                                    <CiHeart
                                        className={`text-${liked[index] ? 'red-400' : 'black'} text-xl hover:text-red-400 cursor-pointer mt-3`}
                                        onClick={() => handleLikeClick(index)}
                                    />
                                    <p className={`text-lg text-${liked[index] ? 'red-400' : 'black'}`}>
                                        {formatLikesCount(likes[index]) || '\u00A0'}
                                    </p> 
                                </div>
                            </div>
                            <p className="text-center text-lg">{descriptions[index]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
