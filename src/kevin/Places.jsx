import React from 'react';
import Navbar from '../components/Navbar2';
import Footer from '../kevin/Footer';
import '../components/places.css'; 
import myImage1 from '../images/kigali-convention.jpg';
import myImage2 from '../images/Bisate Lodge.jpg';
import myImage3 from '../images/One&Only.jpg';
import myImage4 from '../images/Arena.jpg';
import myImage5 from '../images/Hot-Air-Balloon-in-Akagera-Rwanda.jpg';
import myImage6 from '../images/Kings-Palace-Nyanza.jpg';
import ContactUs from './ContactUs';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const placesData = [
    {
        image: myImage1,
        name: "Kigali conventiiion center",
        description: "Nestled in Kigali's bustling heart, the Kigali Convention Center epitomizes modern elegance and sophistication. With state-of-the-art facilities, it hosts prestigious events, conferences, and exhibitions, showcasing Rwanda's progressive spirit and vibrant culture on the global stage."
    },
    {
        image: myImage2,
        name: "Bisate Lodge",
        description: "DNestled in the breathtaking landscapes of Rwanda, Bisate Lodge offers an unparalleled experience amidst lush greenery and serene surroundings. With its eco-friendly design and luxurious accommodations, it provides a perfect retreat for nature lovers and adventure seekers alike."
    },
    {
        image: myImage3,
        name: "One&Only Gorilla's Nest",
        description: "Situated amidst the lush forests of Rwanda, One&Only Gorilla's Nest redefines luxury and tranquility. With its lavish accommodations, world-class amenities, and unparalleled views of the surrounding landscape, it offers a sanctuary of opulence and relaxation. Whether embarking on a gorilla trekking adventure or indulging in gourmet dining experiences, guests are treated to an unforgettable journey of discovery and delight."
    },
    {
        image: myImage4,
        name: "Bk Arena",
        description: "BK Arena is a vibrant hub of entertainment and excitement, offering a diverse range of gaming facilities and recreational activities. From thrilling go-karting circuits to state-of-the-art video game arcades and basketball courts, it's a paradise for thrill-seekers and sports enthusiasts. Hosting grand events and attracting visitors from around the globe, BK Arena is a premier destination for unforgettable experiences."
    },
    {
        image: myImage5,
        name: "Royal Air Balloon in Akagera",
        description: "Take to the skies and witness the beauty of Akagera National Park from a unique perspective with the Royal Air Balloon experience. Drift gently above the sprawling savannahs and shimmering lakes, spotting diverse wildlife and breathtaking landscapes below. It's an exhilarating adventure that promises unforgettable moments and unparalleled views of Rwanda's natural wonders."
    },
    {
        image: myImage6,
        name: "Kings Palace Nyanza",
        description: "Steeped in history and cultural significance, the King's Palace in Nyanza stands as a testament to Rwanda's rich heritage. Visitors can explore the majestic palace grounds, adorned with traditional architecture and artifacts, and immerse themselves in the fascinating stories of Rwanda's royal past."
    }
];

export default function Places() {

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
                    Book With Us 
                </button>
            </div>
        );
    };
    return (
        <div>
            <Navbar />
            <div className='flex justify-center'><p className='flex text-center pt-20'> Rwanda's top venues </p></div>
            <div className="back">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-12">
                    {placesData.map((place, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
                            <img src={place.image} alt={place.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{place.name}</h3>
                                <p className="text-gray-700 text-sm">{place.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className="bg-white  hover:bg-green-900 text-black px-8 py-2 rounded-md mt-4 flex items-center">
                <ServiceButton />
                <FaArrowRight className="ml-2 w-5 h-5" />

            </button>
            <ContactUs />
            <Footer />
        </div>
    );
}
