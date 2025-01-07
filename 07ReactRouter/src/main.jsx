import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout2 from "./Layout2.jsx";
import About_us from "./components/About-us/About_us.jsx";
import Home from "./components/Home/Home.jsx";
import Contact_us from "./components/Contact-us/Contact_us.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout2 />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about_us",
        element: <About_us />,
      },
      {
        path: "contact_us",
        element: <Contact_us />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
