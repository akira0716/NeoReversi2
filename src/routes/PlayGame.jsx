import React, { useEffect, useState } from "react";
import GameBoard from "../components/GameBoard";

import { realTimeGet, realTimeGet2, setFireBase } from "../lib/FirebaseAccess";

let Board = [
  { state: [0, 0, 0, 0, 0, 0, 0, 0] },
  { state: [0, 0, 0, 0, 0, 0, 0, 0] },
  { state: [0, 0, 0, 0, 0, 0, 0, 0] },
  { state: [0, 0, 0, 1, 2, 0, 0, 0] },
  { state: [0, 0, 0, 2, 1, 0, 0, 0] },
  { state: [0, 0, 0, 0, 0, 0, 0, 0] },
  { state: [0, 0, 0, 0, 0, 0, 0, 0] },
  { state: [0, 0, 0, 0, 0, 0, 0, 0] },
];

const PlayGame = () => {
  const [board, setBoard] = useState([]);
  const [player, setPlayer] = useState({ turn: 1 });

  useEffect(() => {
    setFireBase("master", "1", player);
  }, [player]);

  useEffect(() => {
    Board.map((data, index) => {
      setFireBase("board", String(index + 1), data);
    });
    realTimeGet("board", setBoard);
    realTimeGet2("master", setPlayer);
  }, []);

  return (
    <>
      <div>
        <GameBoard
          board={[...board]}
          setBoard={setBoard}
          player={player && player}
          setPlayer={setPlayer}
        />
      </div>
    </>
  );
};

export default PlayGame;
