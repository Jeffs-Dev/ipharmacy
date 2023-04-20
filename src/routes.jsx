import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Data from "./pages/Data/Data";
import Register from "./pages/Register/Register";
import ProductTable from "./components/Tables/ProductTable/ProductTable";
import ClientTable from "./components/Tables/ClientTable/ClientTable";
import SellerTable from "./components/Tables/SellerTable/SellerTable";
import CategoryTable from "./components/Tables/CategoryTable/CategoryTable";
import FormProduct from "./components/Forms/FormProduct/FormProduct";
import FormClient from "./components/Forms/FormClient/FormClient";
import FormSeller from "./components/Forms/FormSeller/FormSeller";
import FormCategory from "./components/Forms/FormCategory/FormCategory";
import SaleTable from "./components/Tables/SaleTable/SaleTable";
import FormSale from "./components/Forms/FormSale/FormSale";

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
          },
          {
            path: '/data/sale',
            element: <SaleTable />
          }
        ]
      },

      {
        path: "/register",
        element: <Register />,
        children: [
          {
            path: '/register/product',
            element: <FormProduct />
          },
          {
            path: '/register/client',
            element: <FormClient />
          },
          {
            path: '/register/seller',
            element: <FormSeller />
          },
          {
            path: '/register/category',
            element: <FormCategory/>
          },
          {
            path: '/register/sale',
            element: <FormSale/>
          }
        ]
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
