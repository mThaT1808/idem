import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import Home from "./pages/HomePage";
import Footer from "./components/UI/Footer/Footer"
import JobForm from "./pages/JobForm";
import ThanksgivingPage from "./pages/ThanksgivingPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/jobForm",
    element: <JobForm />
  },
  {
    path: "/watingYou",
    element: <ThanksgivingPage />
  },
]);

function App() {
  return (
    <div className="window">
      <RouterProvider router={router} />
      <Footer />
    </div>
    
  );
}

export default App;
