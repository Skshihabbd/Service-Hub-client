import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
// import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import router from "./main component/router/Router.jsx";
import AuthProvider from "./main component/Auth provider/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
import Laoding from "./page component/loading/Laoding.jsx";
// import AuthProvider from "./main component/Auth provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

<HelmetProvider>
<AuthProvider>
<Suspense fallback={<Laoding></Laoding>}>
  <RouterProvider router={router} />

</Suspense>
</AuthProvider>
</HelmetProvider>


   
  </React.StrictMode>
);
