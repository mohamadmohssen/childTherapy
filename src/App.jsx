import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Components/Home";
import ErrorPage from "./Components/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
