import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/Layout";
import "./App.css";
import Products from "./pages/Products";
import Cards from "./pages/Cards";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Products />}></Route>
          <Route path="/cart" element={<Cards />}></Route>
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
