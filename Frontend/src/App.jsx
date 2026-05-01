import React from "react";
import  Navbar from './components/components_lite/Navbar';
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/components_lite/Home";
import PrivacyPolicy from "./components/components_lite/PrivacyPolicy.jsx";
import TermsOfService from "./components/components_lite/TermsofService.jsx";
import Jobs from "./components/components_lite/Jobs.jsx";
import Browse from "./components/components_lite/Browse.jsx";

const appRouter = createBrowserRouter([
  {path:"/",
    element:<Home/>
  },
    {path:"/login",
    element:<Login/>
  },
    {path:"/register",
    element:<Register/>
  },
  {
    path: "/PrivacyPolicy",
    element: <PrivacyPolicy />,
  },
   {
    path: "/TermsofService",
    element: <TermsOfService />,
  },
  {
    path: "/Jobs",
    element: <Jobs />,
  },
   {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Browse",
    element: <Browse />,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider  router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;