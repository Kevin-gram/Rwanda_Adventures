import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const height = document.querySelector('.navbar').offsetHeight;
    setNavbarHeight(height);
  }, []);

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

  return (
    <div className="relative">
      <div className="flex justify-between navbar">
        <h1 className="text-2xl font-serif text-white font-extrabold flex-nowrap">
          Rwanda Adventures
        </h1>
        <ul className="flex">
          <li className="text-serif text-white font-extrabold mx-5">
            <Link
              to="first"
              smooth={true}
              offset={-navbarHeight}
              duration={1000}
              className="cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li className="text-serif text-white font-extrabold mx-5">
            <Link
              to="five"
              smooth={true}
              offset={-navbarHeight + 30}
              duration={1000}
              className="cursor-pointer"
            >
            Places
            </Link>
          </li>
          
          <li className="text-serif text-white font-extrabold mx-5">
            <Link
              to="second"
              smooth={true}
              offset={-navbarHeight + 30}
              duration={1000}
              className="cursor-pointer"
            >
              Services
            </Link>
          </li>
          <li className="text-serif text-white font-extrabold mx-5">
            <Link
              to="team"
              smooth={true}
              offset={-navbarHeight}
              duration={1000}
              className="cursor-pointer"
            >
              Team
            </Link>
          </li>
          <li className="text-serif text-white font-extrabold mx-5">
            <Link
              to="contact"
              smooth={true}
              offset={-navbarHeight}
              duration={1000}
              className="cursor-pointer"
            >
              Contact Us
            </Link>
          </li>
          <Link
            to="LandingPage"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <li className="font-extrabold mx-5 cursor-pointer text-white"><LoginButton/></li>
          </Link>
          <img
            src="../public/menu.svg"
            alt=""
            className="w-5"
            onClick={() => setToggle(!toggle)}
          />
        </ul>
      </div>
      {toggle && (
        <div
          className="bg-white absolute top-0 right-0 flex flex-col justify-between px-3 pt-3 border-t-2 border-slate-300"
          style={{ height: 'auto', width: '100%' }}
        >
          <ul className="mt-11 border-b-2 border-slate-300">
            <Link
              to="first"
              smooth={true}
              offset={-navbarHeight}
              duration={1000}
              className="cursor-pointer text-black"
            >
              Home
            </Link>
          </ul>
          <ul className="border-b-2 border-slate-300">
            <Link
              to="five"
              smooth={true}
              offset={-navbarHeight + 30}
              duration={1000}
              className="cursor-pointer text-black"
            >
              Places
            </Link>
          </ul>
          <ul className="border-b-2 border-slate-300">
            <Link
              to="second"
              smooth={true}
              offset={-navbarHeight + 30}
              duration={1000}
              className="cursor-pointer text-black"
            >
              Services
            </Link>
          </ul>
          <ul className="border-b-2 border-slate-300">
            <Link
              to="team"
              smooth={true}
              offset={-navbarHeight}
              duration={1000}
              className="cursor-pointer text-black"
            >
              Team
            </Link>
          </ul>
          <ul className="border-b-2 border-slate-300">
            <Link
              to="contact"
              smooth={true}
              offset={-navbarHeight}
              duration={1000}
              className="cursor-pointer text-black"
            >
              Contact Us
            </Link>
          </ul>
          <ul className="border-b-2 border-slate-300">
            <Link
              to="LandingPage"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              className="cursor-pointer text-black"
            >
              <LoginButton/>
            </Link>
          </ul>
          <h2 onClick={() => setToggle(false)} style={{ cursor: 'pointer' }} className="self-end">
            X
          </h2>
        </div>
      )}
    </div>
  );
};

export default Navbar;
