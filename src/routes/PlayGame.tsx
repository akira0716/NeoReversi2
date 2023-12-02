import React, { useEffect, useState } from "react";
import GameBoard from "../components/GameBoard";
import {
  realTimeGet,
  realTimeGet2,
  updateGameInfo,
} from "../lib/FirebaseAccess";
import { scoreCounter } from "../logic/GameBoard_logic";
import PanelGameInfo from "../components/PanelGameInfo";

interface PlayGameProps {
  me: number;
  roomId: string;
  setResult: React.Dispatch<React.SetStateAction<string>>;
}

interface gameInfo {
  turn: number;
  roomState: boolean;
}

const PlayGame: React.FC<PlayGameProps> = ({ me, roomId, setResult }) => {
  const [board, setBoard] = useState([]);
  const [gameInfo, setGameInfo] = useState<gameInfo>({
    turn: 1,
    roomState: true,
  });
  const [counter, setCounter] = useState({ black: 0, white: 0 });
  const [matchOver, setMatchOver] = useState(false);

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
  }, []);

  return (
    <>
      <div className="flex justify-center">
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
        <PanelGameInfo player={gameInfo.turn} me={me} counter={counter} />
      </div>
    </>
  );
};

export default PlayGame;
