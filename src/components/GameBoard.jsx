import React, { useState,useEffect} from "react";
import "../css/game.css";

import { checkValidMove, putKoma } from "../logic/GameBoard_logic";
import image from "../public/MusoMode.jpg";

import ResultModal from "./ResultModal";

let Board = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 2, 0, 0, 0],
  [0, 0, 0, 2, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

const mode = "normal";

const GameBoard = () => {
  const [board, setBoard] = useState(Board);
  const [player, setPlayer] = useState(1);
  const [matchOver,setMatchOver] = useState(false);


  // GPT
  const handleClick = (e) => {
    const row = Number(e.target.getAttribute("data-row"));
    const col = Number(e.target.getAttribute("data-column"));

    if (board[row][col] !== 0) {
      return;
    }

    if (e.target.children.length === 0) {
      alert("ココには置けないよ～");
      return;
    }

    // クリックしたセルに自分の石を置く
    const newBoard = [...board];
    newBoard[row][col] = player;
    setBoard(newBoard);

    // 相手の石を挟む処理
    checkValidMove(newBoard, row, col, player, true);

    // プレイヤーを切り替える
    setPlayer(player === 1 ? 2 : 1);
  };

  const boardStyle = {
    normal: {
      backgroundColor: "rgb(3, 157, 31)",
    },
    muso: {
      backgroundImage: `url(${image})`,
      objectFit: "cover",
      backgroundSize: "cover",
    },
  };

  // ゲーム終了条件を判定するコードを追記

  const isMatchOver = (board, player) => {
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        if (board[row][col] === 0 && checkValidMove(board, row, col, player)) {
          return false; // 置ける場所があればゲーム続行
        }
      }
    }
    return true; // 置ける場所がない場合、ゲーム終了
  };
  
  useEffect(() => {
    if (isMatchOver(board, player)) {
      setMatchOver(true);
    }
  }, [board, player]);

  
  return (
    <>
      <div className="board-wrap">
        <div
          className="board"
          style={mode === "normal" ? boardStyle.normal : boardStyle.muso}
        >
          {[...Array(8)].map((_, rowIndex) => {
            return (
              <div key={`row${rowIndex}`} className="row">
                {[...Array(8)].map((_, columnIndex) => {
                  return (
                    <div
                      key={`${rowIndex}${columnIndex}`}
                      className="box"
                      data-row={rowIndex}
                      data-column={columnIndex}
                      onClick={handleClick}
                    >
                      {putKoma(board[rowIndex][columnIndex])}
                      {checkValidMove(board, rowIndex, columnIndex, player)}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      {/* ゲーム終了時のモーダルを表示させる */}
      {matchOver && <ResultModal />}
    </>
  );
};

export default GameBoard;
