import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/GuestLayout/Login.jsx";
import Signup from "../pages/GuestLayout/Signup.jsx";
import Index from "../pages/GuestLayout/Index.jsx";
import NotFoundLayout from "../pages/NotFoundLayout.jsx";
import MainLayout from "../layout/MainLayout.jsx";
import GuestLayout from "../layout/GuestLayout.jsx";
import Dashboard from "../pages/MainLayout/Dashboard.jsx";
import { Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" />
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      }
    ]
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/index",
        element: <Index />,
      },
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundLayout />,
  },
]);

export default router;
