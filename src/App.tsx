import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import MyBook from "./pages/MyBook";

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
        <Route path="/detail/:title" element={<Detail />} />
        <Route path="/mybook" element={<MyBook />} />
      </Routes>
    </>
  );
}

export default App;
