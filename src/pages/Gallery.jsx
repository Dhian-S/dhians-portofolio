import React from "react";
import Masonry from "../blocks/Components/Masonry/Masonry";
import { FiInstagram } from "react-icons/fi";
import { image } from "framer-motion/client";

const data = [
  { id: 1, image: 'https://i.imgur.com/H1E3yG2.jpeg', height: 600 },
  { id: 2, image: 'https://i.imgur.com/iW21C6h.jpeg', height: 500 },
  { id: 3, image: 'https://i.imgur.com/8jRlMdM.jpeg', height: 800 },
  { id: 4, image: 'https://i.imgur.com/BSGEeF4.jpeg', height: 800 },
  { id: 5, image: 'https://i.imgur.com/e0kLMBJ.jpeg', height: 450 },
  { id: 6, image: 'https://i.imgur.com/AoM79Jl.jpeg', height: 460 },
  { id: 7, image: 'https://i.imgur.com/O2WmL0y.jpeg', height: 920 },
  { id: 8, image: 'https://i.imgur.com/QE017c7.jpeg', height: 600 },
  { id: 9, image: 'https://i.imgur.com/TcIfrQ3.jpeg', height: 950 },
  { id: 10, image: 'https://i.imgur.com/s6wH3pW.jpeg', height: 900 },
  { id: 11, image: 'https://i.imgur.com/AWfzQxP.jpeg', height: 400 },
  { id: 12, image: 'https://i.imgur.com/7c19xKr.jpeg', height: 900 },
  { id: 13, image: 'https://i.imgur.com/UzLIiu1.jpeg', height: 440 },
  { id: 14, image: 'https://i.imgur.com/cvckP1R.jpeg', height: 370 },
  { id: 15, image: 'https://i.imgur.com/1dX6NNp.jpeg', height: 300 },
  { id: 16, image: 'https://i.imgur.com/uwol4P5.jpeg', height: 300 },
  { id: 17, image: 'https://i.imgur.com/AU7tfRv.jpeg', height: 350 },
  { id: 18, image: 'https://i.imgur.com/weoCzH3.jpeg', height: 450 },
  { id: 19, image: 'https://i.imgur.com/VCLgkmb.jpeg', height: 400 },
  { id: 20, image: 'https://i.imgur.com/5a6ItmX.jpeg', height: 300 },
  { id: 21, image: 'https://i.imgur.com/cHfgL4R.jpeg', height: 350 },
  { id: 22, image: 'https://i.imgur.com/kBM8CGI.jpeg', height: 260 }
];

function Gallery() {
  return (
    <section id="Gallery">
      <div className="p-4 font-hamston bg-[#1a1c1a]">
        <div className="text-center mb-4">
          <h1 className="text-2xl text-white font-AmericanCaptain border-b-2 border-white inline-block font-extrabold">
            MY PHOTOS
          </h1>
          <p className="text-white">Here are a few shots I captured.</p>
        </div>

        <div>
          <Masonry data={data} />
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://instagram.com/dastindgg_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#ECDFCC] text-black font-semibold rounded hover:bg-gray-300 transition-all duration-300"
          >
            <FiInstagram size={20} />
            See More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
