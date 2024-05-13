import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ResetPassword from "./pages/ChangePassword";

const router = createBrowserRouter([
    {
      path: "/",
      element: <div className="text-center text-8xl m-10">E-commerce</div>,
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/reset-password",
        element: <ResetPassword />
    }
  ]);

  export default router;