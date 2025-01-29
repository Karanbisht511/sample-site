import React, { useState } from "react";
import axios from "axios";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // To display submission status

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const resToken = await axios.get("https://site-backend-rho.vercel.app/generateToken");

      const res = await axios.post(
        "https://site-backend-rho.vercel.app/send-email",
        formData,
        {
          headers: {
            Authorization: `Bearer ${resToken.data.token}`,
          },
        }
      );
      setStatus(res.data?.message);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div className="bg-[#211915] text-white py-12 mt-12">
      <div className="container mx-auto px-6">
        <nav className="text-sm text-orange-400">
          HOME &gt; <span className="text-white">CONTACT US</span>
        </nav>
        <h1 className="text-4xl font-bold mt-6 mb-6">Contact Us</h1>
      </div>

      <div className="bg-white text-black py-12 px-6 mt-6 container mx-auto rounded-md">
        <p className="text-lg text-gray-700 max-w-2xl">
          Elit sit amet leo accumsan volutpat. Suspendisse hendrerit vehicula
          leo, vel efficitur felis ultrices non.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-left">
          <div className="text-left md:mr-auto">
            <h3 className="font-bold">CALL US</h3>
            <p className="font-semibold">(800) 123-4567</p>
          </div>
          <div className="text-left md:mr-auto">
            <h3 className="font-bold">SEND AN EMAIL</h3>
            <p className="font-semibold">porto@domain.com</p>
          </div>
          <div className="text-left md:mr-auto">
            <h3 className="font-bold">OUR LOCATION</h3>
            <p className="font-semibold">
              12345 Porto Blvd. | Suite 1500 | Los Angeles, California 90000
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border rounded-md bg-gray-100"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your E-mail Address"
              className="w-full p-3 border rounded-md bg-gray-100"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full p-3 border rounded-md bg-gray-100"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-3 border rounded-md bg-gray-100 h-32"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button className="bg-black text-white py-3 px-6 rounded-md flex items-center gap-2">
              Send Message <span>↗</span>
            </button>
            {status && <p className="text-green-600 mt-2">{status}</p>}
          </form>

          <div>
            <h3 className="font-bold mb-2">Where We Are</h3>
            <iframe
              className="w-full h-72 rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.95373631566614!3d-37.81720997975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f7450b%3A0xb1a0413f4d80a567!2sVictoria%20Market!5e0!3m2!1sen!2sus!4v1645702821909!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
