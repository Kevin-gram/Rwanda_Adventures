import React from "react";
import myImage1 from '../images/tea-plantation-7344892_1280.jpg';
import myImage2 from '../images/savannah-8079856_1280.jpg';
import myImage3 from '../images/download (2).jpeg';
import myImage4 from '../images/Volcano-Hiking-Rwanda.jpg';
import myImage5 from '../images/camping-4303357_1280.jpg';
import myImage6 from '../images/kingfisher-6374507_1280.jpg';
import myImage7 from '../images/lake-balaton-1608516_1280.jpg';
import myImage8 from '../images/mount-kilimanjaro-7287230_1280.jpg';
import myImage9 from '../images/elephant-6824511_1280.jpg';
import myImage10 from '../images/bridge-2203661_1280.jpg';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './shadow.css';
const Page = [
    {
        title: "Virunga National Park",
        description: "  Encounter awe-inspiring volcanoes, rare mountain gorillas, and breathtaking landscapes in this adventure-filled park.",
        image: myImage8
    },

    {
        title: "Akagera National Park",
        description: "Discover vast savannahs, scenic lakes, and a rich tapestry of wildlife in this diverse landscape.",
        image: myImage2
    },

    {
        title: "Nyungwe National Park",
        description: " Explore lush rainforests, diverse wildlife, and captivating canopy walks in this natural wonderland.",
        image: myImage1
    },

];
const activities = [
    {
        title: "Hiking",
        image: myImage4,
    },
    {
        title: "Camping",
        image: myImage5,
    },
    {
        title: "Bird Watching",
        image: myImage6,
    },
    {
        title: "Game Drive",
        image: myImage9,
    },
    {
        title: "Boat Cruise",
        image: myImage7,
    },
    {
        title: "Canopy Walk",
        image: myImage10,
    },
];

export default function ServicePage() {

    const ServiceButton = () => {
        const navigate = useNavigate();

        const handleClick = () => {
    
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of the page
        setTimeout(() => {
            navigate('/booking'); // Navigate after a small delay
        }, 300); 
        };

        return (
            <div>
                <button

                    onClick={handleClick}
                >
                    Book Here
                </button>
            </div>
        );
    };
    return (
        <div className="mx-10 text-white" >
            <div>
                <h1 className="text-center text-3xl  font-semibold pt-10 text-black">Our Services</h1>
                <div className="flex flex-row justify-between">
                    <h3 className=" text-2xl text-center  font-bold  text-black">Tours</h3>
                    <p className="border-b border-gray-500 w-full sm:w-1/2 pt-4 pb-4 hidden lg:block md:block "></p>
                </div>

                <div className="flex flex-col gap-5 items-center">
                    <div className="flex flex-col md:flex-row gap-2 mx-2 items-center">
                        <div className="relative">
                            <div className="h-72 w-72 md:w-auto overflow-hidden rounded-md">
                                <img src={Page[0].image} alt="Guided Tour" className="h-full w-full object-cover" />

                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-10 text-center bg-white bg-opacity-0">
                                <h1 className="text-2xl font-bold ">{Page[0].title}</h1>
                            </div>
                        </div>

                        <div className=" px-4 py-6 max-w-xl">
                            <p className="text-xl text-center text-black">{Page[0].description}</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 mx-2 items-center">
                        <div className="relative">
                            <div className="h-72 w-72 md:w-auto overflow-hidden rounded-md">
                                <img src={Page[1].image} alt="Guided Tour" className="h-full w-full object-cover" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-10 text-center  bg-opacity-0">
                                <h1 className="text-2xl font-bold">{Page[1].title}</h1>
                            </div>
                        </div>

                        <div className=" px-4 py-6 max-w-xl">
                            <p className="text-xl text-center text-black">{Page[1].description}</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 mx-2 items-center">
                        <div className="relative">
                            <div className="h-72 w-72 md:w-auto overflow-hidden rounded-md">
                                <img src={Page[2].image} alt="Guided Tour" className="h-full w-full object-cover" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-10 text-center bg-white bg-opacity-0">
                                <h1 className="text-2xl font-bold">{Page[2].title}</h1>
                            </div>
                        </div>
                        <div className=" px-4 py-6 max-w-xl">
                            <p className="text-xl text-center text-black">{Page[2].description}</p>
                        </div>
                    </div>
                </div>
                <div id='service' className="flex flex-col md:flex-row justify-between py-10">
                    <h3  className="text-2xl font-bold mt-2 md:w-1/2 text-black"> Activities</h3>
                    <div className="flex flex-col md:flex-col w-full md:w-1/2 justify-between items-center">

                        <div className="border-t border-black">
                            <p className="text-lg h-1/  lg:w-full md:w-auto text-black">
                                In Rwanda, beyond its renowned national parks, immerse yourself in vibrant cultural experiences, thrilling outdoor adventures, and captivating historical sites. Explore bustling markets, embark on scenic hikes, and engage with local communities for an unforgettable journey.</p>
                        </div>


                    </div>
                </div>

                <div className=" flex flex-col md:grid grid-cols-3 lg:grid-cols-3 justify-evenly  gap-5 ">
                    <div className="flex flex-col md:flex-row gap-5 mx-2 items-center  ">
                        <div className="relative shadow-xl  ">
                            <div className="h-72 w-72 md:w-auto overflow-hidden rounded-md">
                                <img src={activities[0].image} alt="Guided Tour" className="h-full w-full object-cover transition-transform transform hover:scale-110" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-10 text-center bg-white bg-opacity-0">
                                <h1 className="text-2xl font-bold">{activities[0].title}</h1>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col md:flex-row gap-2 mx-2 items-center">
                        <div className="relative shadow-xl ">
                            <div className="h-72 w-72 md:w-auto overflow-hidden rounded-md">
                                <img src={activities[1].image} alt="Guided Tour" className="h-full w-full object-cover transition-transform transform hover:scale-110" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-10 text-center bg-white bg-opacity-0">
                                <h1 className="text-2xl font-bold">{activities[1].title}</h1>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col md:flex-row gap-2 mx-2 items-center">
                        <div className="relative shadow-xl ">
                            <div className="h-72 w-72 md:w-auto overflow-hidden rounded-md">
                                <img src={activities[2].image} alt="Guided Tour" className="h-full w-full object-cover transition-transform transform hover:scale-110" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-10 text-center bg-white bg-opacity-0">
                                <h1 className="text-2xl font-bold">{activities[2].title}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 mx-2 items-center">
                        <div className="relative shadow-xl ">
                            <div className="h-72 w-72 md:w-auto overflow-hidden rounded-md">
                                <img src={activities[3].image} alt="Guided Tour" className="h-full w-full object-cover transition-transform transform hover:scale-110" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-10 text-center bg-white bg-opacity-0">
                                <h1 className="text-2xl font-bold">{activities[3].title}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 mx-2 items-center">
                        <div className="relative shadow-xl ">
                            <div className="h-72 w-72 md:w-auto overflow-hidden rounded-md">
                                <img src={activities[4].image} alt="Guided Tour" className="h-full w-full object-cover transition-transform transform hover:scale-110" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-10 text-center bg-white bg-opacity-0">
                                <h1 className="text-2xl font-bold">{activities[4].title}</h1>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-2 mx-2 items-center">
                        <div className="relative shadow-xl ">
                            <div className="h-72 w-72 md:w-auto overflow-hidden rounded-md shadow">
                                <img src={activities[5].image} alt="Guided Tour" className="h-full w-full object-cover transition-transform transform hover:scale-110" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-10 text-center bg-white bg-opacity-0">
                                <h1 className="text-2xl font-bold">{activities[5].title}</h1>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
            <button className="bg-white  hover:bg-green-900 text-black px-8 py-2 rounded-md mt-4 flex items-center">
                <ServiceButton />
                <FaArrowRight className="ml-2 w-5 h-5" />

            </button>
        </div>

    );
}
