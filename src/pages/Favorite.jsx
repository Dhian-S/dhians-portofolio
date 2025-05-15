import React from "react";

function Favorite() {
  return (
    <section id="Favorite" className="bg-[#1E201E] font-hamston text-white px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold border-b-2 text-white border-white inline-block mb-2">
          Favorite
        </h2>
        <p className="text-white">My most favorite photos.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 transition-all duration-300">
        <div className="w-full md:w-1/3 shadow-lg rounded overflow-hidden transition duration-300 ease hover:scale-110">
          <img src="https://i.imgur.com/I176ei0.jpeg" alt="Favorite 1" className="w-full h-auto object-cover rounded" />
        </div>

        <div className="w-full md:w-1/3 shadow-lg rounded overflow-hidden transition duration-300 ease hover:scale-110">
          <img src="https://i.imgur.com/DdSEmVz.jpeg" alt="Favorite 2" className="w-full h-auto object-cover rounded" />
        </div>
      </div>
    </section>
  );
}

export default Favorite;
