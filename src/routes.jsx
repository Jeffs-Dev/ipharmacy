import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Data from "./pages/Data/Data";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "/data",
        element: <Data />
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
