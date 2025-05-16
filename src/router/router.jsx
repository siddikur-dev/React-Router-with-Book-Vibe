import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../Pages/Root/Root";
import HeroSection from "../Components/Header/HeroSection";
import ErrorPage from "../Pages/ErrorPages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: HeroSection,
      },
      {
        path: "r",
        Component: ErrorPage,
      },
    ],
  },
]);
export default router;
