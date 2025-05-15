import React from "react";
import { FiPhone, FiMail, FiInstagram } from "react-icons/fi";

function Contact() {
  return (
    <section id="Contact" className="font-hamston">
      <div className="bg-[#1E201E] text-white flex flex-col items-center px-4 py-20">
        <h2 className="text-3xl font-bold mb-10 border-b-4 border-[#ECDFCC] pb-2">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {/* Phone Card */}
          <div className="bg-[#3C3D37] rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <FiPhone size={36} className="text-white mb-4" />
            <h3 className="text-xl font-semibold mb-2">Telepon</h3>
            <p className="text-gray-300">+62 895-1808-0416</p>
          </div>

          {/* Email Card */}
          <div className="bg-[#3C3D37] rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <FiMail size={36} className="text-white mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-300">dastindgg@gmail.com</p>
          </div>

          {/* Instagram Card */}
          <div className="bg-[#3C3D37] rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <FiInstagram size={36} className="text-white mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instagram</h3>
            <a
              href="https://www.instagram.com/dastindgg_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              @dastindgg_
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
