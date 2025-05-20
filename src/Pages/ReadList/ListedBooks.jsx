import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import {
  getStoredBook,
  getWhitelistBook,
} from "../../Components/Utility/AddToDB";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Books from "../Books/Books";
import ListedBook from "./ListedBook";
const ListedBooks = () => {
  const data = useLoaderData();
  const [sort, setSort] = useState("");
  const [readList, setReadList] = useState([]);

  // whitelist function
  const whitelistBook = () => {
    const bookWhitelistData = getWhitelistBook();
    const convertedWhitelistBook = bookWhitelistData.map((id) => parseInt(id));
    const myWhiteList = data.filter((book) =>
      convertedWhitelistBook.includes(book.bookId)
    );
    setReadList(myWhiteList);
  };
  useEffect(() => {
    const bookStoreData = getStoredBook();
    const convertedStoreBook = bookStoreData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStoreBook.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);
  // handleSort Function
  const handleSort = (sort) => {
    if (sort === "pages") {
      const sortedByPages = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedByPages);
    }
    if (sort === "rating") {
      const sortedByRating = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedByRating);
    }
  };
  return (
    <div className="container mx-auto">
      {/* Dropdown sortList */}
      <div className="dropdown flex justify-center my-4">
        <div tabIndex={0} className="btn btn-accent m-1">
          sort by
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a onClick={() => handleSort("pages")}>Pages </a>
          </li>
          <li>
            <a onClick={() => handleSort("rating")}>Rating </a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>White List</Tab>
        </TabList>

        <TabPanel>
          {readList.map((b) => (
            <ListedBook key={b.bookId} b={b}></ListedBook>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>White List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
