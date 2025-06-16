import React, { useState } from "react";
import BMSpinBanner from "./BMSpinBanner";

const ContactUs = ({ width }) => {
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
        <div className={width + " mx-auto my-20 rounded-lg bg-slate-800/30 flex flex-row flex-wrap justify-center"}>
            <h1 className=" text-center my-4 w-full">Contact Us</h1>
            <BMSpinBanner />
            <div className="w-4/5 flex flex-row flex-wrap justify-center p-2">
                <div className="p-4 min-w-64 w-1/2  sm:w-128">
                 <h2>Have a question?</h2>
                    <form onSubmit={handleSubmit} className="space-y-4 ">
                        {/* Name Input */}

                        <div>
                            <label className="block font-medium mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        {/* Account Input */}
                        <div>
                            <label className="block font-medium mb-1">MDN or Account Number</label>
                            <input
                                type="text"
                                name="account"
                                value={formData.account}
                                onChange={handleChange}
                                className="w-full p-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                                required
                            />
                        </div>


                        {/* Subject Input */}
                        <div>
                            <label className="block font-medium mb-1">MDN or Account Number</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label className="block font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        {/* Message Input */}
                        <div>
                            <label className="block font-medium mb-1">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Write your message here..."
                                rows="5"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-slate-700 text-white py-2 rounded-md font-medium hover:bg-slate-900 transition"
                        >
                            Send Message
                        </button>
                    </form>

                </div>
                         <div className="p-4 min-w-64 w-1/2 sm:w-96">
                    <h3>BETTER YET GET PERSONAL WITH US</h3>
                    <div>

                       
                        <p>Please submit your contact information or see our contact information below. Emails will be responded to within one business day.</p>

                        <p>Contact Number:  <a href="tel:+8503724284" className="text-blue-500 hover:underline">
                            8503724284</a> <a href="tel:+202" className="text-blue-500 hover:underline">EXT
                            </a></p>
                        <p>Contact Email : <a href='mailto:info@bluemagicisp.com' className="text-blue-500 hover:underline">info@bluemagicisp.com</a></p>
                    </div>

                    <div className="max-w-md mx-auto p-4 rounded-lg">
                        <h4 className="text-center text-xl font-semibold mb-4">
                            Hours of Operation
                        </h4>
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
                <div className="w-full">
                    <h2>Connect with Us</h2>

                    <div className="flex justify-center space-x-4">
                        {/* Facebook Button */}
                        <button
                            className="size-[50px] bg-[url(/images/icons8-facebook-30.png)] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                            onClick={() => window.open("https://www.facebook.com", "_blank")}
                        >

                        </button>

                        {/* Twitter Button */}
                        <button
                            className="size-[50px] bg-[url(/images/icons8-twitter-50.png)] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                            onClick={() => window.open("https://x.com/bluemagicisp", "_blank")}
                        >

                        </button>

                        {/* Instagram Button */}
                        <button
                            className="size-[50px] bg-[url(/images/icons8-instagram-50.png)] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                            onClick={() => window.open("https://www.instagram.com", "_blank")}
                        >

                        </button>
                    </div>


                </div>
            </div >
        </div >
    );
};

export default ContactUs;