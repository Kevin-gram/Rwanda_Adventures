import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import Mainpage from './components/mainpage';
import { Context } from './components/TouristContext';
import Services from './kevin/Services';
import Places from './kevin/Places'
import { ToastContainer } from 'react-toastify';
import Aside from './components/Dashboard/Aside';
import Alltb from './components/tables/Alltb';
import Userstable from './components/tables/Userstable';
import Booking from './kevin/Booking';
import TouristExperience from "./components/TouristExperience"

const App = () => {
  const images = [
    {
      img: '../public/forest.jpg',
      title: 'lorem Ipsum',
      description:
        'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
      id: '1',
    },
    {
      img: '../public/frog.jpg',
      title: 'lorem Ipsum',
      description:
        'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
      id: '2',
    },
    {
      img: '../public/gollira.jpg',
      title: 'lorem Ipsum',
      description:
        'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',

      id: '3',
    },
    {
      img: '../public/ima.jpg',
      title: 'lorem Ipsum',
      description:
        'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
      id: '4',
    },
    {
      img: '../public/iman.jpg',
      title: 'lorem Ipsum',
      description:
        'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
      id: '5',
    },
    {
      img: '../public/img.jpg',
      title: 'lorem Ipsum',
      description:
        'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
      id: '6',
    },
    {
      img: '../public/monkey.jpg',
      title: 'lorem Ipsum',
      description:
        'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
      id: '7',
    },
    {
      img: '../public/mountain.jpg',
      title: 'lorem Ipsum',
      description:
        'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
      id: '8',
    },
    {
      img: '../public/waterfalls.jpg',
      title: 'lorem Ipsum',
      description:
        'lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum',
      id: '9',
    },
  ];
  return (
    <Context.Provider value={{ images }}>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} c />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/dashboard" element={<Aside />} />
          <Route path="/tables" element={<Alltb />} />
          <Route path="/userstable" element={<Userstable />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/TouristExperience" element={<TouristExperience/>} />
          <Route path="/Places" element={<Places />} />
        </Routes>
      </Router>
    </Context.Provider>
  );
};
export default App;
