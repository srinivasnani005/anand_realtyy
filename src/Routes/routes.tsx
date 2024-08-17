import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { About, Dashboard, Gallery, Landing, NotFound, Projects, Selector } from '../Pages/Exports';
import Layout from '../Layout/Layout';

const router = createBrowserRouter([

    {
      path: '/',
      element: <Landing />,
      errorElement: <NotFound />, 
    },
    {
      path : "/selector",
      element : <Selector />,
    },
    {
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        //projects
        path: "/projects",
        element: <Projects />,
      },

      //gallery
      {
        path : "/gallery",
        element : <Gallery />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
