import React, { useEffect, useState } from "react";
import GameBoard from "../components/GameBoard";

import {
  realTimeGet,
  realTimeGet2,
  updateBoard,
  updateGameInfo,
} from "../lib/FirebaseAccess";

const Board = [
  { state: [0, 0, 0, 0, 0, 0, 0, 0] },
  { state: [0, 0, 0, 0, 0, 0, 0, 0] },
  { state: [0, 0, 0, 0, 0, 0, 0, 0] },
  { state: [0, 0, 0, 1, 2, 0, 0, 0] },
  { state: [0, 0, 0, 2, 1, 0, 0, 0] },
  { state: [0, 0, 0, 0, 0, 0, 0, 0] },
  { state: [0, 0, 0, 0, 0, 0, 0, 0] },
  { state: [0, 0, 0, 0, 0, 0, 0, 0] },
]; // GameTitleまたは、libフォルダに置いてimport

const GameInfoInit = {
  turn: 1,
};

const PlayGame = () => {
  const [board, setBoard] = useState([]);
  const [gameInfo, setGameInfo] = useState({}); //playerの代わりにゲーム情報を管理

  useEffect(() => {
    updateGameInfo("roomA", gameInfo);
  }, [gameInfo]);

  useEffect(() => {
    updateBoard("roomA", Board); // ゲーム終了時に、部屋を削除するため初期化はいらないかも。
    realTimeGet("roomA", setBoard);
    realTimeGet2("roomA", setGameInfo);
  }, []);

  return (
    <>
      <div>
        <GameBoard
          board={[...board]}
          setBoard={setBoard}
          player={gameInfo.turn}
          gameInfo={gameInfo}
          setGameInfo={setGameInfo}
        />
        {/* Todo : roomIdをpropsに追加（稲次） */}
      </div>
    </>
  );
};

export default PlayGame;
