import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Data from "./pages/Data/Data";
import Register from "./pages/Register/Register";
import ProductTable from "./components/Tables/ProductTable/ProductTable";
import ClientTable from "./components/Tables/ClientTable/ClientTable";
import SellerTable from "./components/Tables/SellerTable/SellerTable";
import CategoryTable from "./components/Tables/CategoryTable/CategoryTable";

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
        element: <Data />,
        children: [
          {
            path: '/data/product',
            element: <ProductTable />
          },
          {
            path: '/data/client',
            element: <ClientTable />
          },
          {
            path: '/data/seller',
            element: <SellerTable />
          },
          {
            path: '/data/category',
            element: <CategoryTable />
          }
        ]
      },

      {
        path: "/register",
        element: <Register />
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
