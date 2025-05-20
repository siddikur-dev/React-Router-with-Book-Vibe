import React, { useState, useEffect } from "react";
import header from "../../assets/header.png";
import { useLoaderData } from "react-router";
import Books from "../../Pages/Books/Books";

const HeroSection = () => {
  const books = useLoaderData();

  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [showAll, setShowAll] = useState(false);

  // onChange Search Function
  useEffect(() => {
    const searchResult = books.filter((book) =>
      book.bookName.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(searchResult);
    setShowAll(true);
  }, [searchText, books]);

  const visibleBooks = showAll ? filteredBooks : filteredBooks.slice(0, 6);

  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <section className="bg-[#f8f8f8] rounded-xl px-6 py-10 md:py-20 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-center md:text-left space-y-6 max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold text-black leading-snug">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-md text-xl">
            View The List
          </button>
        </div>
        <div className="w-52 md:w-64">
          <img
            src={header}
            alt="Book Cover"
            className="w-full object-contain"
          />
        </div>
      </section>

      {/* Book Search */}
      <div className="flex flex-col md:flex-row items-center justify-center  my-10">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search Your Books"
          className="input input-xl focus:outline-none w-full md:w-[300px] mb-2"
        />

        <p className="btn btn-info btn-xl ">Search</p>
      </div>

      {/* Books List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 my-10">
        {visibleBooks.length > 0 ? (
          visibleBooks.map((book) => (
            <Books book={book} key={book.bookId}></Books>
          ))
        ) : (
          <p className="text-center col-span-3 text-xl text-gray-600">
            No books found for "{searchText}"
          </p>
        )}
      </div>

      {/* Show All / Show Less Button */}
      {filteredBooks.length > 6 && (
        <div className="flex justify-center mb-10">
          <button
            onClick={() => {
              setShowAll(!showAll);
              if (showAll) window.scrollTo(0, 600);
            }}
            className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
          >
            <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
            <span className="relative z-20 flex items-center text-sm">
              <svg
                className="relative w-5 h-5 mr-2 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              {showAll ? "Show Less" : "Show All"}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
