import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
  MoveUpRight,
} from "lucide-react";
import ContinuousTextSlider from "./ContinuousTextSlider";

function Contact() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed flex flex-col items-center justify-center"
    >
        <ContinuousTextSlider/>
      <div className="p-4 md:p-10 rounded-xl w-full md:max-w-[90%]  grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">
            Have a Project in Mind? <br /> Let’s Talk!
          </h2>
          <p className="text-gray-500">
            Are you looking to create a seamless and engaging user experience?
            We're here to help!
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-white text-black p-3 rounded-full">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Call Now</p>
                <p className="font-semibold">{import.meta.env.VITE_TELE}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white text-black p-3 rounded-full">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-semibold">{import.meta.env.VITE_EMAIL}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white text-black p-3 rounded-full">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="font-semibold">{import.meta.env.VITE_ADRESS}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex space-x-4">
            <Facebook className="hover:text-blue-500 cursor-pointer" />
            <Twitter className="hover:text-blue-400 cursor-pointer" />
            <Instagram className="hover:text-pink-500 cursor-pointer" />
            <Linkedin className="hover:text-blue-700 cursor-pointer" />
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md md:px-6 py-3 shadow-lg text-black md:p-6 p-2 rounded">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-600 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-600 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-600 focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-white hover:text-blue-600 transition flex items-center space-x-2 justify-center cursor-pointer border border-blue-600"
            >
              <span>Send Message</span>
              <MoveUpRight  className="h-4 w-4"/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
