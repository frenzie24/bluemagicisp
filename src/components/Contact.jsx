import React, { useState } from "react";

const Contact = ({widths}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you for reaching out!");
    };

    return (
        <div className={widths + " mx-auto p-6 rounded-lg shadow-md"}>
            <h2 className="text-xl font-semibold text-gray-300 text-center mb-4">Contact Us</h2>
            <div className="w-full flex flex-row flex-wrap justify-center">
                <div className="w-1/2">
                    <form onSubmit={handleSubmit} className="space-y-4 ">
                        {/* Name Input */}

                        <div>
                            <label className="block text-gray-300 font-medium mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label className="block text-gray-300 font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        {/* Message Input */}
                        <div>
                            <label className="block text-gray-300 font-medium mb-1">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Write your message here..."
                                rows="5"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>

                </div>
                <div className="w-1/2">
                    <h3>BETTER YET GET PERSONAL WITH US</h3>
                    <div>
                        TEXT HERE TEXT HERE TEXT HERE
                    </div>
                    <a href="tel:+8503724284" className="text-blue-500 hover:underline">
                        8503724284</a> EXT <a href="tel:+202" className="text-blue-500 hover:underline">
                    </a>
                    <div className="max-w-md mx-auto p-4 rounded-lg shadow-md">
                        <h2 className="text-center text-xl font-semibold mb-4 text-gray-300">
                            Hours of Operation
                        </h2>
                        <table className="w-full text-left ">
                            <thead>
                                <tr>
                                    <th className="px-1 py-2 ">Day</th>
                                    <th className="px-1 py-2 ">Hours</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-1 py-2">Monday</td>
                                    <td className="px-1 py-2">9:00 AM - 5:00 PM</td>
                                </tr>
                                <tr>
                                    <td className="px-1 py-2">Tuesday</td>
                                    <td className="px-1 py-2">9:00 AM - 5:00 PM</td>
                                </tr>
                                <tr>
                                    <td className="px-1 py-2">Wednesday</td>
                                    <td className="px-1 py-2">9:00 AM - 5:00 PM</td>
                                </tr>
                                <tr>
                                    <td className="px-1 py-2">Thursday</td>
                                    <td className="px-1 py-2">9:00 AM - 5:00 PM</td>
                                </tr>
                                <tr>
                                    <td className="px-1 py-2">Friday</td>
                                    <td className="px-1 py-2">9:00 AM - 5:00 PM</td>
                                </tr>
                                <tr>
                                    <td className="px-1 py-2">Saturday</td>
                                    <td className="px-1 py-2">10:00 AM - 2:00 PM</td>
                                </tr>
                                <tr>
                                    <td className="px-1 py-2">Sunday</td>
                                    <td className="px-1 py-2">Closed</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Contact;