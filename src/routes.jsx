import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <h1> Home Page </h1>,
      },

      {
        path: "/about",
        element: <h1> About Page </h1>,
      },
    ],
  },
]);

const routes = ({ children }) => {
  return (
    <>
      <RouterProvider router={router}>{children}</RouterProvider>
    </>
  );
};

export default routes;
