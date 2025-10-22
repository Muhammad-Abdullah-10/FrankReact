import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root.jsx";
import PropertyListing from "./pages/PropertyListing/PropertyListing.jsx";
import Home from "./pages/Home/Home.jsx";
import PropertyContextProvider from "./context/PropertyContextProvider.jsx";
import PropertyDetails from "./pages/PropertyDetail/PropertyDetails.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Home />} />
      <Route
        path="propertylisting"
        element={
          <PropertyContextProvider>
            <PropertyListing />
          </PropertyContextProvider>
        }
      />
      <Route
        path="propertylisting/property/:id"
        element={
          <PropertyContextProvider>
            <PropertyDetails />
          </PropertyContextProvider>
        }
      />

    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
