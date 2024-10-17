"use client";
import { useState } from "react";

const ContacForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    website: "",
    email: "",
    phone: "",
    services: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen">
      <div className="w-full h-[30vh] bg-blue-950 my-10 flex items-center">
        <h1 className="text-white pl-6 text-2xl font-semibold">Contact</h1>
      </div>
      <div className="flex justify-center items-center">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded w-full"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded w-full"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="company"
              placeholder="Company/Organisation*"
              value={formData.company}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded w-full"
              required
            />
            <input
              type="url"
              name="website"
              placeholder="Website"
              value={formData.website}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded w-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded w-full"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded w-full"
              required
            />
          </div>
          <input
            type="text"
            name="services"
            placeholder="Services*"
            value={formData.services}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded w-full"
            required
          />
          <textarea
            name="message"
            placeholder="Tell us about your business."
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded w-full"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-[#f79521] text-white px-4 py-2 rounded-full mt-4 w-1/6 translate-x-56"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContacForm;
