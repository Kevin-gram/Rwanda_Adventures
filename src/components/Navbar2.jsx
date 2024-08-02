import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const ServiceButton = () => {
        const navigate = useNavigate();
    
        const handleClick = () => {
            navigate('/');
        };
    
        return (
            <div>
                <button
                  
                    onClick={handleClick}
                >
                   Home
                </button>
            </div>
        );
    };
    const LoginButton = () => {
        const navigate = useNavigate();
    
        const handleClick = () => {
            navigate('/Login');
        };
    
        return (
            <div>
                <button
                  
                    onClick={handleClick}
                >
                 Login
                </button>
            </div>
        );
    };


    const BookingButton = () => {
        const navigate = useNavigate();

        const handleClick = () => {
            navigate('/booking');
        };

        return (
            <div>
                <button

                    onClick={handleClick}
                >
                    Booking
                </button>
            </div>
        );
    };

    return (
        <div id='first' className={`relative ${scrolling ? 'bg-white' : ''}`}>
            <div className="flex justify-between navbar  p-0 t-0 r-0 l-0 z-10 fixed w-full">
                <Link
                    to="LandingPage"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                >
                    <h1 className="text-2xl font-serif font-extrabold flex-nowrap cursor-pointer">
                        Rwanda Adventures
                    </h1>
                </Link>
                <ul className="flex items-center">
                    <Link
                        to="LandingPage"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >
                        <li className=" font-extrabold mx-5 cursor-pointer"><ServiceButton/></li>
                    </Link>
                    <Link
                        to="five"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >
                        <li className=" font-extrabold mx-5 cursor-pointer places"><BookingButton/></li>
                    </Link>
                  
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >
                        <li className=" font-extrabold mx-5 cursor-pointer">Contact Us</li>
                    </Link>
                    <Link
                        to="LandingPage"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >
                        <li className=" font-extrabold mx-5 cursor-pointer"><LoginButton/></li>
                    </Link>
                    <img
                        src="/menu.svg" 
                        alt="Menu"
                        className="w-5 cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />
                </ul>
            </div>
            {toggle && (
                <div className="bg-white text-babsolute top-0 flex justify-between px-3 pt-3" style={{ height: '450px', width: '100%' }}>
                    <div>
                        <ul className="mt-11">
                            <Link
                                to="LandingPage"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                onClick={() => setToggle(false)}
                            >
                                <li className="text-black cursor-pointer">Home</li>
                            </Link>
                            <Link
                                to="five"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1000}
                                onClick={() => setToggle(false)}
                            >
                                <li className="text-black cursor-pointer">Places</li>
                            </Link>
                            <li className="text-black cursor-pointer">lorem</li>
                            <li className="text-black cursor-pointer">lorem</li>
                            <li className="text-black cursor-pointer">lorem</li>
                            <Link to="/Login">
                                <li className="text-black cursor-pointer">Login</li>
                            </Link>
                        </ul>
                    </div>
                    <h2 onClick={() => setToggle(false)} style={{ cursor: 'pointer' }}>X</h2>
                </div>
            )}
        </div>
    );
};

export default Navbar;
