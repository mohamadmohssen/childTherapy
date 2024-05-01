import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Components/Home";
import ErrorPage from "./Components/ErrorPage";
import Contactus from "./Components/Contactus";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
  { path: "/contactus", element: <Contactus /> },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
