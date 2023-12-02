import React from "react";

interface Cell {
  row: number;
  col: number;
}

interface Board {
  state: number[];
}

export const putKoma = (value: number): React.ReactNode => {
  switch (value) {
    case 1:
      return (
        <div className="w-20 h-20 absolute top-2.5 left-2.5 z-10 rounded-full bg-black"></div>
      );
    case 2:
      return (
        <div className="w-20 h-20 absolute top-2.5 left-2.5 z-10 rounded-full bg-white"></div>
      );
    default:
      return null;
  }
};

export const checkValidMove = (
  board: any,
  row: number,
  col: number,
  player: number,
  event = false
): React.ReactNode | null => {
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
    let flipCells: Cell[] = [];

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
          return (
            <div className="w-2.5 h-2.5 rounded-full bg-black/[.5] pointer-events-none"></div>
          );
        }
      }
    }
  }

  if (event === true) {
    board[row].state[col] = player;

    return board;
  }

  return null;
};

// ゲーム終了時判定
export const isMatchOver = (board: Board[], player: number): boolean => {
  if (board.length === 0) {
    return false;
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].state.length; col++) {
      if (
        board[row].state[col] === 0 &&
        checkValidMove(board, row, col, player) !== null
      ) {
        return false; // 置ける場所があればゲーム続行
      }
    }
  }
  return true; // 置ける場所がない場合、ゲーム終了
};

// コマの数をカウントする関数
export const scoreCounter = (
  board: Board[]
): { black: number; white: number } => {
  let black = 0;
  let white = 0;

  board.forEach((row) => {
    row.state.forEach((col) => {
      if (col === 1) black++;
      else if (col === 2) white++;
    });
  });
  return { black, white };
};
