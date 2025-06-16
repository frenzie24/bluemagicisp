import { useEffect, useState } from "react";

const statesAndTerritories = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
    "Wisconsin", "Wyoming",
    "American Samoa", "Guam", "Northern Mariana Islands", "Puerto Rico", "U.S. Virgin Islands"
];

const UserRegistration = () => {
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        middleName: "",
        lastName: "",
        streetAddress: "",
        city: "",
        state: "",
        zip: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        promotionalEmails: false,
        consent: false,
    });
/*
    async function init() {
        // Load the Address Validation library.
        await google.maps.importLibrary('addressValidation');
        // Set event listeners
    }

    async function validateAddress(address) {
        const { AddressValidation } = await google.maps.importLibrary("addressValidation");
        const result = await AddressValidation.fetchAddressValidation({
            address: {
                addressLines: [address],
            },
        });
        return result;
    }
        */

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const passwordsMatch = formData.password && formData.password === formData.confirmPassword;

    const handleSubmit = (e) => {
        e.preventDefault();
       // const addressVaild = validateAddress(`${formData.streetAddress}, ${formData.city}, ${formData.state}, ${formData.zip} `);
        console.log(addressVaild);
        console.log("Submitted Data:", formData);
    };


    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">User Registration</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded" onChange={handleChange} required />
                <input type="text" name="firstName" placeholder="First Name" className="w-full p-2 border rounded" onChange={handleChange} required />
                <input type="text" name="middleName" placeholder="Middle Name" className="w-full p-2 border rounded" onChange={handleChange} />
                <input type="text" name="lastName" placeholder="Last Name" className="w-full p-2 border rounded" onChange={handleChange} required />
                <input type="text" name="streetAddress" placeholder="Street Address" className="w-full p-2 border rounded" onChange={handleChange} required />
                <div className="grid grid-cols-3 gap-4">
                    <input type="text" name="city" placeholder="City" className="w-full p-2 border rounded" onChange={handleChange} required />
                    <select name="state" className="w-full p-2 border rounded bg-white" onChange={handleChange} required>
                        <option value="">Select State</option>
                        {statesAndTerritories.map((state) => (
                            <option key={state} value={state}>{state}</option>
                        ))}
                    </select>
                    <input type="text" name="zip" placeholder="ZIP Code" className="w-full p-2 border rounded" onChange={handleChange} required />
                </div>
                <input type="tel" name="phoneNumber" placeholder="Phone Number" className="w-full p-2 border rounded" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" className="w-full p-2 border rounded" onChange={handleChange} required />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" className={`w-full p-2 border rounded ${passwordsMatch ? "border-green-500" : "border-red-500"}`} onChange={handleChange} required />
                {!passwordsMatch && <p className="text-red-500 text-sm">Passwords do not match</p>}
                <div className="flex items-center space-x-2">
                    <input type="checkbox" name="promotionalEmails" className="w-4 h-4" onChange={handleChange} />
                    <label>I would like to receive promotional emails and offers from Bluemagic ISP</label>
                </div>
                <div className="flex items-center space-x-2">
                    <input type="checkbox" name="consent" className="w-4 h-4" onChange={handleChange} required />
                    <label>I consent to Bluemagic ISP terms of service</label>
                </div>
                <button type="submit" className={`w-full p-2 rounded ${passwordsMatch ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-400 text-gray-700 cursor-not-allowed"}`} disabled={!passwordsMatch}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default UserRegistration;