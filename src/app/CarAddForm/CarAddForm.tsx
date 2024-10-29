"use client"

import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";

export default function CarSalesForm() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        city: "",
        carInfo: "",
        registration: "",
        color: "",
        mileage: "",
        price: "",
        description: "",
    });

    // Set explicit type for ChangeEvent
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Set explicit type for FormEvent
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Perform validation or data submission here
        console.log("Form data submitted:", formData);
        router.push("/Thankyou");  // Redirect to Thank You page after submission
    };

    return (
        <div className="py-6 mt-6 mb-4 mx-auto max-w-lg bg-blue-100">
            <h1 className="text-center text-blue-700 text-2xl px-4 py-2 font-bold">Post Your Car Ad</h1>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="flex flex-col items-center mt-8 space-y-4">
                
                {/* City Selection */}
                <select name="city" value={formData.city} onChange={handleChange} required
                    className="w-4/5 px-4 py-2 rounded-md text-sm border-2 border-gray-500">
                    <option value="">Select City</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Islamabad">Islamabad</option>
                    {/* Add more cities as needed */}
                </select>

                {/* Car Info */}
                <input type="text" name="carInfo" placeholder="Make/Model/Version" value={formData.carInfo}
                    onChange={handleChange} required className="w-4/5 px-4 py-2 rounded-md text-sm border-2 border-gray-500" />

                {/* Registration */}
                <select name="registration" value={formData.registration} onChange={handleChange} required
                    className="w-4/5 px-4 py-2 rounded-md text-sm border-2 border-gray-500">
                    <option value="">Registered In</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Sindh">Sindh</option>
                    {/* Add more options as needed */}
                </select>

                {/* Exterior Color */}
                <select name="color" value={formData.color} onChange={handleChange} required
                    className="w-4/5 px-4 py-2 rounded-md text-sm border-2 border-gray-500">
                    <option value="">Select Exterior Color</option>
                    <option value="White">White</option>
                    <option value="Silver">Silver</option>
                    <option value="Black">Black</option>
                    {/* Add more colors as needed */}
                </select>

                {/* Mileage */}
                <input type="number" name="mileage" placeholder="Mileage (km)" value={formData.mileage} onChange={handleChange} required
                    className="w-4/5 px-4 py-2 rounded-md text-sm border-2 border-gray-500" />

                {/* Price */}
                <input type="number" name="price" placeholder="Price (PKR)" value={formData.price} onChange={handleChange} required
                    className="w-4/5 px-4 py-2 rounded-md text-sm border-2 border-gray-500" />

                {/* Description */}
                <textarea name="description" placeholder="Describe your car (e.g., condition, features)" value={formData.description}
                    onChange={handleChange} required className="w-4/5 px-4 py-2 rounded-md text-sm border-2 border-gray-500"></textarea>

                {/* Upload Photos */}
                <input type="file" name="photos" multiple accept="image/*"
                    className="w-4/5 px-4 py-2 rounded-md text-sm border-2 border-gray-500" />

                {/* Submit Button */}
                <button type="submit" className="text-white mt-4 w-4/5 hover:bg-green-700 shadow-2xl hover:text-white font-semibold text-md py-2 px-4 rounded-md bg-blue-700">
                    Submit Car Ad
                </button>
            </form>
        </div>
    );
}
