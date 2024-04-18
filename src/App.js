import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import Home from "./pages/HomePage";
import Footer from "./components/UI/Footer/Footer"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
