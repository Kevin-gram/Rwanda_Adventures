import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: ""
    });
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = {};

        if (!formData.firstName.trim()) {
            validationErrors.firstName = "First name is required";
        }
        if (!formData.lastName.trim()) {
            validationErrors.lastName = "Last name is required";
        }
        if (!formData.email.trim()) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Email is invalid";
        }
        if (!formData.phoneNumber.trim()) {
            validationErrors.phoneNumber = "Phone number is required";
        } else if (isNaN(formData.phoneNumber)) {
            validationErrors.phoneNumber = "Phone number should be numeric";
        }
        if (!formData.message.trim()) {
            validationErrors.message = "Message is required";
        }
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                // Simulate a successful API call with a delay
                setTimeout(() => {
                    alert('Thank you for reaching out');
                    // Redirecting the user after successful submission
                    // navigate("/success");
                }, 1000)
            } catch (err) {
                console.log(err)
            }
        }
    };

    return (
        <div id='contact' className="mt-12">
            <form className="flex flex-col gap-3  w-full justify-start max-w-lg mx-auto p-6 border rounded-lg shadow-xl bg-slate-300 " onSubmit={handleSubmit}>
                <h1 className="text-3xl font-semibold mb-4 text-center">Contact Us</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        {errors.firstName && <div className="text-red-500">{errors.firstName}</div>}
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        {errors.lastName && <div className="text-red-500">{errors.lastName}</div>}
                    </div>
                </div>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className={`px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <div className="text-red-500">{errors.email}</div>}
                <input
                    type="tel"
                    placeholder="Enter your Phone number"
                    className={`px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.phoneNumber ? 'border-red-500' : ''}`}
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
                {errors.phoneNumber && <div className="text-red-500">{errors.phoneNumber}</div>}
                <textarea
                    placeholder="Your Message"
                    className={`px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.message ? 'border-red-500' : ''}`}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
                {errors.message && <div className="text-red-500">{errors.message}</div>}
                <button className="bg-green-400 text-white font-semibold py-2 rounded-lg hover:bg-green-800 transition duration-300" type="submit">Submit</button>
            </form>
        </div>

    );
}
