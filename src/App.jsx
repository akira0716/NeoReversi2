import React from "react";
import { Routes, Route } from "react-router-dom";
import "./css/style.css";

// サンプルページ(削除してOK)
import GameTitle from "./routes/GameTitle";
import PlayGame from "./routes/PlayGame";
import Result from "./routes/Result";
import RandomPage20 from "./routes/RandomPage20";
// ↑↑

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<GameTitle />} />
        <Route path="/PlayGame" element={<PlayGame />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/RandomPage20" element={<RandomPage20 />} />
      </Routes>
    </>
  );
};

export default App;
