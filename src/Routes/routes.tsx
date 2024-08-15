import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { About, Dashboard, NotFound, Projects } from '../Pages/Exports';
import Layout from '../Layout/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" replace />,
        errorElement: <NotFound />, 
      },
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
      }
      
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
