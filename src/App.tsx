import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Main from "./pages/Main";
import Profile from "./pages/Profile";

function App() {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname.pathname]);
  return (
    <>
      <NavBar />
      <Routes key={pathname.pathname}>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
