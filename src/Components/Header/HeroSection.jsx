import React from "react";
import header from "../../assets/header.png"; // Update path if different
import { useLoaderData } from "react-router";
import Books from "../../Pages/Books/Books";

const HeroSection = () => {
  const books = useLoaderData();

  return (
    <div className="container mx-auto">
      <section className="bg-[#f8f8f8] rounded-xl px-6 py-10 md:py-20 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="text-center md:text-left space-y-6 max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold text-black leading-snug">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-md text-xl">
            View The List
          </button>
        </div>

        {/* Image */}
        <div className="w-52 md:w-64">
          <img
            src={header}
            alt="Book Cover"
            className="w-full object-contain"
          />
        </div>
      </section>
      {/* Book */}
        <h2 className="text-2xl mt-10 md:text-4xl text-center font-bold">Books</h2>
      <div> </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 my-10">
        {books.map((book) => (
          <Books book={book} key={book.bookId}></Books>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
