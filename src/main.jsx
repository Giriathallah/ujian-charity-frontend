import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminPage from "./pages/adminPage.jsx";
import LoginPage from "./pages/loginPage.jsx";
import DetailsDonation from "./pages/detailsDonationPage.jsx";
import AddDonationPage from "./pages/addDonationPage.jsx";
import EditDonationPage from "./pages/editDonationPage.jsx";
import DetailsPage from "./pages/detailsPage.jsx";
import AboutPage from "./pages/aboutPage.jsx";
import ContactPage from "./pages/contactPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/details/:id",
    element: <DetailsPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/add-donation",
    element: <AddDonationPage />,
  },
  {
    path: "/edit-donation/:id",
    element: <EditDonationPage />,
  },
  {
    path: "/details-donation/:id",
    element: <DetailsDonation />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
