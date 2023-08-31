import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/404";
import Home from "./pages/home";
import Login from "./pages/login";
import Singup from "./pages/register";

function App() {
  
  const authUser = JSON.parse(localStorage.getItem('auth'));

  return (
    <React.Fragment>
        <Router>
          <Routes>
            {authUser === true ? (
              <Route path="/" element={<Home />} />
            ) : (
              <Route path="/" element={<Login />} />
            )}
            <Route path="login" element={<Login />} />
            <Route path="singup" element={<Singup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
    </React.Fragment>
  );
}

export default App;
