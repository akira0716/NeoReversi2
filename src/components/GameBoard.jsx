import React, { useState } from "react";
import "../css/game.css";

import { checkValidMove, putKoma } from "../logic/GameBoard_logic";

import image from "../public/MusoMode.jpg";

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
    </>
  );
};

export default GameBoard;
