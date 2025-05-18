import React from "react";
import { Link } from "react-router";

const ListedBook = ({ b }) => {
  const {
    image,
    bookId,
    bookName,
    author,
    tags,
    publisher,
    yearOfPublishing,
    totalPages,
    category,
    rating,
  } = b;
  console.log(bookId);

  return (
    <div className="flex gap-6 bg-white rounded-xl border p-5 shadow-sm max-w-5xl mx-auto items-center container">
      {/* Book Image */}
      <div className="w-32 flex-shrink-0">
        <img src={image} alt={bookName} className="rounded-md w-full h-auto" />
      </div>

      {/* Book Info */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{bookName}</h2>
          <p className="text-sm text-gray-600 mt-1">By : {author}</p>

          {/* Tags */}
          <div className="flex gap-2 mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm bg-green-100 text-green-700 font-medium px-2 py-1 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mt-4">
            <div className="flex items-center gap-1">
              <span>📍</span>
              <span>Year of Publishing: {yearOfPublishing}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>👤</span>
              <span>Publisher: {publisher}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>📄</span>
              <span>Page {totalPages}</span>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="flex justify-between items-center mt-4 flex-wrap gap-2">
          <span className="text-sm bg-blue-100 text-blue-700 font-medium px-3 py-1 rounded-full">
            Category: {category}
          </span>
          <span className="text-sm bg-orange-100 text-orange-700 font-medium px-3 py-1 rounded-full">
            Rating: {rating}
          </span>
          {/* <button className=""> */}
          <Link
            className=" btn  bg-green-500 hover:bg-green-600 text-white font-medium text-sm px-4 py-2 rounded-full"
            to={`/bookDetails/${bookId}`}
          >
            View Details
          </Link>
          {/* </button> */}
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
