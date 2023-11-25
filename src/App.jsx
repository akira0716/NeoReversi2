import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./css/style.css";

import GameTitle from "./routes/GameTitle";
import PlayGame from "./routes/PlayGame";
import Result from "./routes/Result";
import RandomPage20 from "./routes/RandomPage20";
import RandomPage80 from "./routes/RandomPage80";

const App = () => {
  const [roomId, setRoomId] = useState("");
  const [me, setMe] = useState(0);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<GameTitle setMe={setMe} setRoomId={setRoomId} />}
        />
        <Route
          path="/PlayGame"
          element={<PlayGame me={me} roomId={roomId} />}
        />
        <Route path="/Result" element={<Result />} />
        <Route path="/RandomPage20" element={<RandomPage20 />} />
        <Route path="/RandomPage80" element={<RandomPage80 />} />
      </Routes>
    </>
  );
};

export default App;
