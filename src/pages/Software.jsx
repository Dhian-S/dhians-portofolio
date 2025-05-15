import React from "react";
import Lightroom from "../assets/photoshop-lightroom.png";
import Snapseed from "../assets/icons8-snapseed-48.png";
import Lens from "../assets/lens.png"

function Software() {
  return (
    <section id="Software">
      <div className="bg-[#1a1c1a] font-hamston text-white px-8 py-16">
        {/* Judul */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <h1 className="text-4xl font-bold border-b-2 border-white rounded-sm inline-block mb-2">
            Software
          </h1>
          <p>These are some of the software I use.</p>
        </div>

        {/* Icon Software */}
        <div className="flex items-center justify-center gap-12">
          <img src={Lightroom} alt="Lightroom" className="w-20 h-20" />
          <img src={Snapseed} alt="Snapseed" className="w-20 h-20" />
          <img src={Lens} alt="Lens Distortion" className="w-20 h-20 rounded-2xl" />
        </div>
      </div>
    </section>
  );
}

export default Software;
