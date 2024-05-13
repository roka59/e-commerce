import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <div className="text-center text-8xl m-10">E-commerce</div>,
    },
  ]);

  export default router;