import React, { useEffect, useState } from "react";
import { createRoom } from "../lib/FirebaseAccess";

const Board = [
  { state: [0, 0, 0, 0, 0, 0, 0, 0] },
  { state: [0, 0, 0, 0, 0, 0, 0, 0] },
  { state: [0, 0, 0, 0, 0, 0, 0, 0] },
  { state: [0, 0, 0, 1, 2, 0, 0, 0] },
  { state: [0, 0, 0, 2, 1, 0, 0, 0] },
  { state: [0, 0, 0, 0, 0, 0, 0, 0] },
  { state: [0, 0, 0, 0, 0, 0, 0, 0] },
  { state: [0, 0, 0, 0, 0, 0, 0, 0] },
];
const GameInfoInit = {
  turn: 1,
};

const CreateRoom = () => {
  const [roomIdData, setRoomIdData] = useState("");

  // ルームID入力時処理
  const hanleInputIdChange = (e) => {
    setRoomIdData(e.target.value);
  };

  // ゲーム開始ボタン押下時処理
  const onClickCreateRoom = () => {
    if (roomIdData === "") {
      return;
    }

    createRoom(roomIdData, Board, GameInfoInit);
  };

  return (
    <>
      <div className="text-center">
        <h3 className="font-bold text-center text-2xl">ルームを作成する</h3>
        <div className="my-5">
          <input
            type="text"
            placeholder="ルームID"
            className="input input-bordered input-primary w-full max-w-xs"
            onChange={hanleInputIdChange}
            value={roomIdData}
          />
        </div>
        <div className="modal-action">
          <div>
            <button
              className="btn btn-outline btn-primary"
              onClick={onClickCreateRoom}
            >
              ゲームを開始する
            </button>
          </div>
          <form method="dialog">
            <button className="btn btn-neutral">Close</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateRoom;
