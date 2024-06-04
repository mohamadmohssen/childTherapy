import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Components/Home";
import ErrorPage from "./Components/ErrorPage";
import Contactus from "./Components/Contactus";
import Test from "./Components/Test";
import Questions from "./Components/Questions";
import Aboutus from "./Components/Aboutus";
const router = createBrowserRouter([
  {},

  {},
  { path: "/contactus", element: <Contactus /> },
  { path: "/test", element: <Test /> },
  { path: "/test/Questions", element: <Questions /> },
]);
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="*" element={<ErrorPage />}></Route>
          <Route exact path="" element={<Home />}></Route>
          <Route exact path="/test" element={<Test />}></Route>
          <Route exact path="/test/Questions" element={<Questions />}></Route>
          <Route exact path="/contactus" element={<Contactus />}></Route>
          <Route exact path="/aboutus" element={<Aboutus />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
