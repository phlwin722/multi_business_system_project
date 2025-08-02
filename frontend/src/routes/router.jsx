import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/GuestLayout/Login.jsx";
import Signup from "../pages/GuestLayout/Signup.jsx";
import Index from "../pages/GuestLayout/Index.jsx";
import NotFoundLayout from "../pages/NotFoundLayout.jsx";
import MainLayout from "../layout/MainLayout.jsx";
import GuestLayout from "../layout/GuestLayout.jsx";
import Dashboard from "../pages/MainLayout/Dashboard.jsx";
import { Navigate } from "react-router-dom";
import Sales from "../pages/MainLayout/Sales.jsx";
import ListEmployee from "../pages/MainLayout/ListEmployee.jsx";
import ArchiveEmployee from "../pages/MainLayout/ArchiveEmployee.jsx";
import ListBusiness from "../pages/MainLayout/ListBusiness.jsx";
import ArchiveBusiness from "../pages/MainLayout/ArchiveBusiness.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path : "/businesses/list",
        element: <ListBusiness />
      },
      {
        path: "/businesses/archive",
        element: <ArchiveBusiness />
      },
      {
        path: "/employee/list",
        element: <ListEmployee />
      },
      {
        path: "/employee/archive",
        element: <ArchiveEmployee />
      },
      {
        path: "/reports/sales",
        element: <Sales />,
      },
    ],
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
