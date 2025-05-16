import React from "react";
import header from "../../assets/header.png"; // Update path if different

const HeroSection = () => {
  return (
    <div className="container mx-auto">
      <section className="bg-[#f8f8f8] rounded-xl px-6 py-10 md:py-20 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="text-center md:text-left space-y-6 max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-black leading-snug">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-md">
            View The List
          </button>
        </div>

        {/* Image */}
        <div className="w-52 md:w-64">
          <img src={header} alt="Book Cover" className="w-full object-contain" />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
