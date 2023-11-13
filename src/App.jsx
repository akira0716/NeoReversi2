import React from "react";
import { Routes, Route } from "react-router-dom";
import "./css/style.css";

// サンプルページ(削除してOK)
import Home from "./routes/Home";
import Page01 from "./routes/Page01";
import Page02 from "./routes/Page02";
// ↑↑

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page01" element={<Page01 />} />
        <Route path="/page02" element={<Page02 />} />
      </Routes>
    </>
  );
};

export default App;
