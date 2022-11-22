import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";

function App() {
  const { charts } = useSelector((state: any) => state.favorites) || [];
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
          element: charts === null || undefined ? <Home /> : <Favorites />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
