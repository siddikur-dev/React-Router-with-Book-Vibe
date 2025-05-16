import React from "react";
import { useLoaderData, useParams } from "react-router";

const UserDetails = () => {
  const { userId } = useParams();
  const bookId = parseInt(userId);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const {
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
  } = singleBook;

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 bg-white rounded-lg shadow-md max-w-5xl mx-auto">
      {/* Book Image */}
      <div className="w-full md:w-1/3 flex justify-center items-start">
        <img
          src={image}
          alt="Why Do You Hate Money?"
          className="w-full max-w-xs object-cover"
        />
      </div>

      {/* Book Info */}
      <div className="w-full md:w-2/3 space-y-4">
        <h2 className="text-2xl font-bold">{bookName}</h2>
        <p className="text-gray-600">{author}</p>
        <p className="text-gray-800 font-medium">{category}</p>

        <div>
          <h4 className="font-semibold">Review :</h4>
          <p className="text-gray-600 mt-1">{review}</p>
        </div>

        <div className="flex gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-green-100 mr-1  text-green-600 text-sm font-medium px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mt-4">
          <div className="font-medium">Number of Pages:</div>
          <div>{totalPages}</div>
          <div className="font-medium">Publisher:</div>
          <div className="font-semibold">{publisher}</div>
          <div className="font-medium">Year of Publishing:</div>
          <div>{yearOfPublishing}</div>
          <div className="font-medium">Rating:</div>
          <div className="font-semibold">{rating}</div>
        </div>

        <div className="flex gap-3 mt-6">
          <button className="px-5 py-2 bg-gray-200 text-gray-800 rounded-md font-medium hover:bg-gray-300">
            Read
          </button>
          <button className="px-5 py-2 bg-sky-400 text-white rounded-md font-medium hover:bg-sky-500">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
