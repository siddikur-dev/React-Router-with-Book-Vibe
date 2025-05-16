import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../Pages/Root/Root";
import HeroSection from "../Components/Header/HeroSection";
import ErrorPage from "../Pages/ErrorPages/ErrorPage";
import UserDetails from "../Components/UserDetails/UserDetails";

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
        path: "*",
        Component: ErrorPage,
      },
      {
        path: "userDetails/:userId",
        loader: () => fetch("../booksData.json"),
        Component: UserDetails,
      },
    ],
  },
]);
export default router;
