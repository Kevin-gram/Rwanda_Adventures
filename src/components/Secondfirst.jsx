import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of the page
        setTimeout(() => {
            navigate('/Services'); // Navigate after a small delay
        }, 300); 
    };

    return (
        <div>
            <button
                className="bg-green-400 text-white p-2 rounded-md text-center mt-4 hover:bg-green-500"
                onClick={handleClick}
            >
                See more
            </button>
        </div>
    );
};

const Secondfirst = () => {
    return (
        <div id='second' className="w-full h-full mt-2">
            <div className="imageontop">
                <div className="imageandp">
                    <img src="../public/img.jpg" alt="" />
                    <div className="bg-blue-200 p-3 bluediv">
                        <p className="font-bold">OUR SERVICES</p>
                        <p className="text-sm mt-4">
                        Embark on a unique adventure with our top-tier tourism services. From thrilling hikes to unforgettable gorilla treks, tranquil camping trips under the stars to immersive museum tours, we offer a diverse range of experiences to suit every traveler. Dive into local culture with vibrant cultural explorations, or explore the wonders of nature in pristine national parks. With us, your journey promises excitement, discovery, and unforgettable memories. Start your adventure today and experience the best that tourism has to offer.
                        </p>
                        <ServiceButton/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Secondfirst;
