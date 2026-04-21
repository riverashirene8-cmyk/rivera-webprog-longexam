import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import Layout from "./layouts/Layout";
import AuthLayout from "./layouts/AuthLayout";

// Pages
import HomePage from "./pages/LandingPages/HomePage";
import AboutPage from "./pages/LandingPages/AboutPage";
import ProductListPage from "./pages/LandingPages/ProductListPage";
import ProductPage from "./pages/LandingPages/ProductPage";

import SignInPage from "./pages/AuthPages/SignInPage";
import SignUpPage from "./pages/AuthPages/SignUpPage";

import NotFoundPage from "./pages/NotFoundPage";

// ROUTES
const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "products",
        element: <ProductListPage />,
      },
      {
        path: "products/:slug",
        element: <ProductPage />,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "signin",
        element: <SignInPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;