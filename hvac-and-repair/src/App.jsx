//React Hooks
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Main App Imports
import Root from "./Root.jsx";
import "./App.css";
import React from "react";

//Route Pages
import Home from "./pages/Home.jsx"; 
import Services from "./pages/Services/Services.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import AboutUs from "./pages/AboutUs.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    basename: "/home",
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/testimonials",
        element: <Testimonials />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
    ],
  },
]);

const App = () => {

  return (
    <RouterProvider router={router}/>
  )
};

export default App;
