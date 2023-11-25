import React, { useState, useEffect } from "react";

import {
  checkValidMove,
  putKoma,
  isMatchOver,
  scoreCounter,
} from "../logic/GameBoard_logic";

import ResultModal from "./ResultModal";
import { updateBoard } from "../lib/FirebaseAccess";

const mode = "normal";

const GameBoard = (props) => {
  const { board, setBoard, player, gameInfo, setGameInfo, me, roomId } = props;

  const [matchOver, setMatchOver] = useState(false); // 宮ちゃん
  const [counter, setCounter] = useState({ black: 0, white: 0 }); //ゆーり

  const handleClick = (e) => {
    const row = Number(e.target.getAttribute("data-row"));
    const col = Number(e.target.getAttribute("data-column"));

    if (board[row].state[col] !== 0) {
      return;
    }

    if (e.target.children.length === 0) {
      alert("ココには置けないよ～");
      return;
    }

    // 相手の石を挟む処理
    setBoard(checkValidMove(board, row, col, player, true));

    // boardの更新
    updateBoard(roomId, board);

    // プレイヤーを切り替える
    setGameInfo({ ...gameInfo, ["turn"]: player === 1 ? 2 : 1 });
  };

  useEffect(() => {
    if (isMatchOver(board, player)) {
      setMatchOver(true);
    }
  }, [board, player]);

  useEffect(() => {
    setCounter(scoreCounter(board));
  }, [board]);

  return (
    <>
      <div className="flex justify-center my-5">
        <div className="border border-solid border-white">
          {[...Array(8)].map((_, rowIndex) => {
            return (
              <div key={`row${rowIndex}`} className="flex h-24">
                {[...Array(8)].map((_, columnIndex) => {
                  return (
                    <div
                      key={`${rowIndex}${columnIndex}`}
                      className="w-24 border border-solid relative flex justify-center items-center bg-emerald-500 hover:bg-emerald-800"
                      data-row={rowIndex}
                      data-column={columnIndex}
                      onClick={handleClick}
                    >
                      {board.length > 0 &&
                        putKoma(board[rowIndex].state[columnIndex])}
                      {checkValidMove(board, rowIndex, columnIndex, player)}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
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

      {/* ゲーム終了時のモーダルを表示させる */}
      {matchOver && <ResultModal />}
    </>
  );
};

export default GameBoard;
