import React from "react";
import ReactDOM from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import PokedexPage from "./pages/PokedexPage";
import AboutPage from "./pages/AboutPage";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PokedexPage /> },
      { path: "/about", element: <AboutPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);