import React from "react";
import TrueFocus from "../blocks/TextAnimations/TrueFocus/TrueFocus";

function Home() {
  return (
    <section
      id="Home"
      className="scroll-mt-16" // Tambahkan scroll-margin-top untuk memastikan posisi tepat di bawah navbar
    >
      <div className="bg-[#1a1c1a] text-white px-8 py-16 flex flex-col md:flex-row items-center justify-center gap-8">
        
        {/* Kiri: Teks + TrueFocus */}
        <div className="md:w-1/2 w-full">
          <div className="pb-3 font-hamston">
            <TrueFocus
              sentence="Photography Enthusiast"
              manualMode={true}
              blurAmount={5}
              borderColor="#255F38"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
              font="Hamston"
            />
          </div>

          <h2 className="text-4xl font-bold font-hamston mb-4">Dastins</h2>
          
          <p className="text-lg font-hamston leading-relaxed">
            <i>
              An amateur photographer with a strong passion for visual storytelling,
              who also possesses basic programming skills to support my creative work
              both technically and digitally.
            </i>
          </p>
        </div>

        {/* Kanan: Gambar */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="https://i.imgur.com/dmS1Nv0.png"
            alt="Dastin Rachmadhian"
            className="rounded-md shadow-lg max-w-xs md:max-w-sm w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default Home;
