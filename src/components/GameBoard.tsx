import React, { useEffect } from "react";
import ModalBase from "./ModalBase";
import { checkValidMove, putKoma, isMatchOver } from "../logic/GameBoard_logic";
import { updateBoard } from "../lib/FirebaseAccess";

interface GameBoardProps {
  board: any;
  setBoard: React.Dispatch<React.SetStateAction<any>>;
  player: number;
  gameInfo: any;
  setGameInfo: React.Dispatch<React.SetStateAction<any>>;
  me: number;
  roomId: string;
  setMatchOver: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameBoard: React.FC<GameBoardProps> = ({
  board,
  setBoard,
  player,
  gameInfo,
  setGameInfo,
  me,
  roomId,
  setMatchOver,
}: GameBoardProps) => {
  // ルーム削除時のエラー対策
  if (board === null) {
    return null;
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (me === 3) {
      return;
    }

    if (me !== player) {
      alert("君の番じゃないね？");
      return;
    }

    const row = Number(e.currentTarget.getAttribute("data-row"));
    const col = Number(e.currentTarget.getAttribute("data-column"));

    // 駒が置いてある場所は置けない。
    if (board[row].state[col] !== 0) {
      return;
    }

    // 置ける判定のマークがない場所には置けない。
    if (e.currentTarget.children.length === 0) {
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
    let whiteFlg = false;
    let blackFlg = false;

    // 黒が置けない場合
    if (isMatchOver(board, 1)) {
      blackFlg = true;
    }

    // 白が置けない場合
    if (isMatchOver(board, 2)) {
      whiteFlg = true;
    }

    // どちらも置けない場合
    if (blackFlg && whiteFlg) {
      (document.getElementById("my_modal_4") as HTMLDialogElement).showModal(); // ゲーム終了モーダル表示
      setMatchOver(true); // ゲーム終了通知
    } else if ((blackFlg && player === 1) || (whiteFlg && player === 2)) {
      // 「パス」メッセージを出したい。※ターンが切り替わったことがわからない。
      // ターンの切り替え
      setGameInfo({ ...gameInfo, ["turn"]: player === 1 ? 2 : 1 });
    }
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
      <ModalBase
        kind={3}
        setMe={function (): void {
          throw new Error("Function not implemented.");
        }}
        setRoomId={function (): void {
          throw new Error("Function not implemented.");
        }}
        roomId={""}
      />
    </>
  );
};

export default GameBoard;
