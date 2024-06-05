import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout";
import "./App.css";
import Products from "./pages/Products";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Cards from "./pages/Cards";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/products",
          element: <Products />,
        },
        {
          index: true,
          element: <Products />,
        },
        {
          path: "/cart",
          element: <Cards />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
