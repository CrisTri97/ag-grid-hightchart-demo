import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/favorites",
          element: <Favorites />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
