import React, { useState } from "react";
import "../css/game.css";

import { checkValidMove } from "../logic/GameBoard_logic";

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

  const Sample = (value) => {
    switch (value) {
      case 1:
        return <div className="koma-kuro"></div>;
      case 2:
        return <div className="koma-shiro"></div>;

      default:
        break;
    }
  };

  return (
    <>
      <div className="board-wrap">
        <div className="board">
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
                      {Sample(board[rowIndex][columnIndex])}
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
