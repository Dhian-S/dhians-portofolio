import React from "react";
import { FiInstagram, FiMail, FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#1a1c1a] text-gray-300 font-hamston py-6 border-t-2 border-[#ECDFCC]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Kiri */}
        <div className="text-xl font-bold">Dastindgg</div>

        {/* Tengah */}
        <div className="flex space-x-6 text-lg">
          <a
            href="https://instagram.com/dastindgg_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FiInstagram />
          </a>
          <a
            href="mailto:dastin@example.com"
            className="hover:text-white transition"
          >
            <FiMail />
          </a>
          <a
            href="tel:+6281234567890"
            className="hover:text-white transition"
          >
            <FiPhone />
          </a>
        </div>

        {/* Kanan */}
        <div className="text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
