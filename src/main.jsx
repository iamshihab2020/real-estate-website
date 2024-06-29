import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import AuthProvider from "./providers/AuthProviders.jsx";
import { HelmetProvider } from "react-helmet-async";
import { EstateProvider } from "./providers/EstateProvider.jsx";
import { TestimonialProvider } from "./providers/TestimonialProvider.jsx";
import { TeamProvider } from "./providers/TeamProvider.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <EstateProvider>
          <TeamProvider>
            <TestimonialProvider>
              <RouterProvider router={router} />
            </TestimonialProvider>
          </TeamProvider>
        </EstateProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
