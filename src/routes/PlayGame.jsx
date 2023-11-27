import React, { useEffect, useState } from "react";
import GameBoard from "../components/GameBoard";
import {
  realTimeGet,
  realTimeGet2,
  updateBoard,
  updateGameInfo,
} from "../lib/FirebaseAccess";
import { scoreCounter } from "../logic/GameBoard_logic";

const PlayGame = ({ me, roomId, setResult }) => {
  const [board, setBoard] = useState([]);
  const [gameInfo, setGameInfo] = useState({}); //playerの代わりにゲーム情報を管理
  const [counter, setCounter] = useState({ black: 0, white: 0 });
  const [matchOver, setMatchOver] = useState(false); // 宮ちゃん

  useEffect(() => {
    updateGameInfo(roomId, gameInfo);
  }, [gameInfo]);

  useEffect(() => {
    setCounter(scoreCounter(board));
  }, [board]);

  useEffect(() => {
    let winner = 0;
    if (matchOver) {
      if (counter.black > counter.white) {
        winner = 1;
      } else if (counter.black < counter.white) {
        winner = 2;
      }

      if (winner === me) {
        setResult("win");
      } else {
        setResult("lose");
      }
    }
  }, [matchOver]);

  useEffect(() => {
    realTimeGet(roomId, setBoard);
    realTimeGet2(roomId, setGameInfo);

    console.log(`私は、プレイヤー${me}です。`);
    console.log(`ルームID[${roomId}]でプレイします。`);
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
          me={me}
          roomId={roomId}
          setMatchOver={setMatchOver}
        />
        {/* コンポーネント化 */}
        <div className="mx-12 my-16 text-4xl flex justify-around">
          <p>
            player1：
            <span className="absolute w-9 h-9 bg-black rounded-3xl"></span> 　×
            {counter.black}
          </p>
          <p>
            player2：
            <span className="absolute w-9 h-9 bg-white rounded-3xl"></span> 　×
            {counter.white}
          </p>
        </div>
      </div>
    </>
  );
};

export default PlayGame;
