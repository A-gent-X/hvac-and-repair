//React Hooks
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ServiceFile from "./components/ServiceFile.jsx";

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

const serviceFile = [
  {
    date: new Date(2024, 7, 14)
  }
]

const App = () => {

  return (
    <RouterProvider router={router}/>
  )
};

export default App;
