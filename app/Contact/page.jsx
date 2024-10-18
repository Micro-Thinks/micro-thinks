"use client";
import { useState } from "react";
import emailjs from 'emailjs-com';  
import { toast } from "react-toastify";

const ContacForm = ({ref}) => {
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare the data to send via EmailJS
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      company: formData.company,
      website: formData.website,
      email: formData.email,
      phone: formData.phone,
      services: formData.services,
      message: formData.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          setIsSubmitting(false);
          toast.success("Submitted Successfully")
          setErrorMessage('');
          // Clear form after success
          setFormData({
            firstName: "",
            lastName: "",
            company: "",
            website: "",
            email: "",
            phone: "",
            services: "",
            message: "",
          });
        },
        (error) => {
          setIsSubmitting(false);
          toast.error("Submission failed")
          setSuccessMessage('');

        }
      );
  };
  return (
    <div className="min-h-screen  p-2" ref={ref} id="contact-form">
      <div className="w-full lg:h-[30vh] h-[15vh] rounded-r-xl bg-blue-950 lg:my-10 my-2 justify-center  flex items-center">
        <h1 className="text-white pl-6  text-2xl xl:text-4xl   lg:text-3xl font-semibold">Contact</h1>
      </div>
      <div className="flex justify-center items-center p-2">
        <form className="space-y-4 border-2 p-4 shadow-xl rounded-xl" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none  w-full"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none w-full"
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
              className="border border-gray-300 p-3 rounded-lg focus:outline-none w-full"
              required
            />
            <input
              type="url"
              name="website"
              placeholder="Website"
              value={formData.website}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none w-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none w-full"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none w-full"
              required
            />
          </div>
          <input
            type="text"
            name="services"
            placeholder="Services*"
            value={formData.services}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none w-full"
            required
          />
          <textarea
            name="message"
            placeholder="Tell us about your business."
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg focus:outline-none w-full"
            rows="4"
          ></textarea>
          <div className="flex items-center justify-center">

          <button
            type="submit"
            className="bg-[#f79521] text-white px-5 py-1 text-center  rounded-full focus:outline-none mt-4  "
            >
            Submit
          </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default ContacForm;
