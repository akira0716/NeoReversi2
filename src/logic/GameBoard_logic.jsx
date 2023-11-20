import React from "react";
import image from "../public/MusoMode.jpg";

export const putKoma = (value) => {
  switch (value) {
    case 1:
      return <div className="koma-kuro"></div>;
    case 2:
      return <div className="koma-shiro"></div>;
    default:
      break;
  }
};

export const checkValidMove = (board, row, col, player, event = false) => {
  const directions = [
    { row: -1, col: 0 }, // 上
    { row: 1, col: 0 }, // 下
    { row: 0, col: -1 }, // 左
    { row: 0, col: 1 }, // 右
    { row: -1, col: -1 }, // 左上
    { row: -1, col: 1 }, // 右上
    { row: 1, col: -1 }, // 左下
    { row: 1, col: 1 }, // 右下
  ];

  for (const direction of directions) {
    const { row: dirRow, col: dirCol } = direction;
    let currentRow = row + dirRow;
    let currentCol = col + dirCol;
    let flipCells = [];

    // 相手の石が続く限り探索
    while (
      currentRow >= 0 &&
      currentRow < board.length &&
      currentCol >= 0 &&
      currentCol < board[0].state.length &&
      board[currentRow].state[currentCol] === (player === 1 ? 2 : 1)
    ) {
      flipCells.push({ row: currentRow, col: currentCol });
      currentRow += dirRow;
      currentCol += dirCol;
    }

    // 相手の石が続いていた場合、その方向に石を挟む
    if (
      flipCells.length > 0 &&
      currentRow >= 0 &&
      currentRow < board.length &&
      currentCol >= 0 &&
      currentCol < board[0].state.length &&
      board[currentRow].state[currentCol] === player
    ) {
      if (event === true) {
        console.log(flipCells);
        for (const flipCell of flipCells) {
          board[flipCell.row].state[flipCell.col] = player;
        }
      } else {
        if (board[row].state[col] > 0) {
          return null;
        } else {
          return <div className="placed"></div>;
        }
      }
    }
  }

  if (event === true) {
    board[row].state[col] = player;

    return board;
  }
};

// ゲーム終了時判定
export const isMatchOver = (board, player) => {
  if (board.length === 0) {
    return false;
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].state.length; col++) {
      if (
        board[row].state[col] === 0 &&
        checkValidMove(board, row, col, player)
      ) {
        return false; // 置ける場所があればゲーム続行
      }
    }
  }
  return true; // 置ける場所がない場合、ゲーム終了
};

// コマの数をカウントする関数
export const scoreCounter = (board) => {
  let black = 0;
  let white = 0;

  board.forEach((row) => {
    row.state.forEach((col) => {
      if (col === 1) black++;
      else if (col === 2) white++;
    });
  });
  return { black: black, white: white };
};

export const boardStyle = {
  normal: {
    backgroundColor: "rgb(3, 157, 31)",
  },
  muso: {
    backgroundImage: `url(${image})`,
    objectFit: "cover",
    backgroundSize: "cover",
  },
};
