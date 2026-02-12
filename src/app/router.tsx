import { createBrowserRouter } from "react-router-dom";
//import POSLayout from "../layouts/POSLayout";
import DashboardLayout from "../layouts//dashboardlayout/DashboardLayout";
import AuthLayout from "../layouts/authlayout/AuthLayout";
//import POSPage from "../pages/pos/POSPage";
import OrdersPage from "../pages/orders/OrdersPage";
import ProductsPage from "../pages/products/ProductsPage";
import LoginPage from "../pages/auth/LoginPage";

export const router = createBrowserRouter([
  // {
  //   element: <AuthLayout />,
  //   children: [
  //     { path: "/", element: <LoginPage /> },
  //   ],
  // },
  {
    element: <DashboardLayout />,
    children: [
      { path: "/", element: <OrdersPage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/settings", element: <div>Settings</div> },
    ],
  }
],
  {
    basename: "/FastFood/", // 👈 ESTO ES LO QUE FALTABA
  }
);
