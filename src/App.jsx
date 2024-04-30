import { useState } from "react";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Content from "./Components/Content";
import Navbar from "./Components/Navbar";
import ErrorPage from "./Components/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "/content",
    element: <Content />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
