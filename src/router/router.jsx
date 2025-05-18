import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../Pages/Root/Root";
import HeroSection from "../Components/Header/HeroSection";
import ErrorPage from "../Pages/ErrorPages/ErrorPage";
import BookDetails from "../Components/BookDetails/BookDetails";
import ListedBooks from "../Pages/ReadList/ListedBooks";
import ListedBook from "../Pages/ReadList/ListedBook";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("../booksData.json"),
        Component: HeroSection,
      },
      {
        path: "listedBooks",
        loader: () => fetch("../booksData.json"),
        Component: ListedBooks,
      },
      // {
      //   path: "listedBook/:bookId",
      //   loader: () => fetch("../booksData.json"),
      //   Component: ListedBook,
      // },
      {
        path: "*",
        Component: ErrorPage,
      },
      {
        path: "bookDetails/:bookId",
        loader: () => fetch("../booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);
export default router;
