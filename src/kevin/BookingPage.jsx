import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import  "./bookingstyles.css";
import { FaArrowLeft } from "react-icons/fa";
export default function Bookingpage () {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    numberOfPeople: "",
    date: "",
    message: "",
  });


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
                <div className="flex flex-row">  <FaArrowLeft className="mr-2 w-5 h-5 pt-1" />
                 Home</div>
               
              </button>
          </div>
      );
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="book container  mx-auto px-4 py-8 h-screen ">
      <button className="bg-green-700 hover:bg-green-900 text-white px-2 py-2 rounded-md mt-4 flex items-center">
                       
                          <ServiceButton    />
                    </button> 
                    <h2 className="text-4xl font-semibold flex items-center justify-center text-white mb-4">Book Your Tour</h2>
      <div className="container flex justify-center mx-auto px-4 py-8 h-screen "> 
      <form onSubmit={handleSubmit} className="  form rounded-tl-lg rounded-br-md w-full  max-h-72  md:w-3/4 lg:w-1/2 xl:w-1/2 ">
          <div className="grid grid-cols-1 gap-6">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="input"
            />
            <input
              type="number"
              name="numberOfPeople"
              placeholder="Number of People"
              value={formData.numberOfPeople}
              onChange={handleChange}
              className="input"
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="input"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="input h-32"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-3 px-6 mt-8 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
    </div>
    </div>
    
  );
};


