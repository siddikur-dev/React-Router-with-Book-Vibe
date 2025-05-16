import React from "react";
import { FaRegStar } from "react-icons/fa";

const Books = ({ book }) => {
  const {
    // bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className=" container mx-auto border border-gray-300 rounded-xl w- p-4  shadow-sm  ">
      {/* Book Image */}
      <div className="bg-gray-100 p-4 rounded-xl flex justify-center">
        <img src={image} alt="Book Cover" className="h-40 object-contain" />
      </div>

      {/* Tags */}
      <div className="flex gap-2 mt-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-green-100 mr-1  text-green-600 text-sm font-medium px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Book Title */}
      <h2 className="text-xl font-bold mt-4">{bookName}</h2>
      <p className="text-gray-600 text-sm">{author}</p>

      {/* Footer Info */}
      <div className="flex justify-between items-center mt-4 border-t-2 border-gray-400  pt-3 text-sm text-gray-700 font-medium">
        <span>{category}</span>
        <span className="flex items-center gap-1">
          {rating} <FaRegStar className="text-lg text-gray-500" />
        </span>
      </div>
    </div>
  );
};

export default Books;
