import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Footer from '../kevin/Footer';
import axios from 'axios';
import profilePlaceholder from '../images/preview_nat (1).png';
import { Rating } from '@mui/material';

const TouristExperience = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
     
        const response = await axios.get('https://api.example.com/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const defaultData = [
    { id: 1, name: 'Person 1', description: 'Lorem ipsum dolor sit amet.', rating: 4.5, profile: profilePlaceholder },
    { id: 2, name: 'Person 2', description: 'Consectetur adipiscing elit.', rating: 4.2, profile: profilePlaceholder },
    { id: 3, name: 'Person 3', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', rating: 4.8, profile: profilePlaceholder },
    { id: 4, name: 'Person 4', description: 'USed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', rating: 4.1, profile: profilePlaceholder },
  ];

  const ServiceButton = () => {
    const handleClick = () => {
      navigate('/');
    };

    return (
      <div>
        <button onClick={handleClick} className="bg-green-700 hover:bg-green-900 text-white px-2 py-2 rounded-md mt-4 flex items-center">
          <FaArrowLeft className="mr-2 w-5 h-5 pt-1" />
          Home
        </button>
      </div>
    );
  };

  return (
    <div className='bg-gray-100'>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <ServiceButton />
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 py-8 w-full max-w-screen-lg">
            {(data && data.length > 0 ? data : defaultData).map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                <img src={item.profile} alt="Profile" className="h-32 w-32 object-cover rounded-full shadow-lg mb-4" />
                <div className="text-center">
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <Rating name="rating" value={item.rating} precision={0.1} readOnly />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TouristExperience;
