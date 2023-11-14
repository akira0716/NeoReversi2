import React from "react";

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
      currentCol < board[0].length &&
      board[currentRow][currentCol] === (player === 1 ? 2 : 1)
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
      currentCol < board[0].length &&
      board[currentRow][currentCol] === player
    ) {
      if (event === true) {
        for (const flipCell of flipCells) {
          board[flipCell.row][flipCell.col] = player;
        }
      } else {
        if (board[row][col] > 0) {
          return null;
        } else {
          return <div className="placed"></div>;
        }
      }
    }
  }
};
