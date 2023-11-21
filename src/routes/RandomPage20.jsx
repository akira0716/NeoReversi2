import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import horrorImage from "../public/horror01.png";
import sadako from "../public/sadako.jpg";

// ↓↓ゲーム作成に必要な情報↓↓
import { createRoom, deleteRoom, getRoomData } from "../lib/FirebaseAccess";
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
// ↑↑ゲーム作成に必要な情報↑↑

const RandomPage20 = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const onClickDokkiri = () => {
    setShow(true);

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  //#region ゲーム作成用処理(GameTitleに置く予定)
  const [roomId, setRoomId] = useState("");

  // ルームの作成
  const createTable = () => {
    console.log(roomId);
    createRoom(roomId, Board, GameInfoInit);
  };

  // ルームの削除
  const deleteTable = () => {
    deleteRoom(roomId);
  };

  // Board情報の取得
  const boardInfo = () => {
    getRoomData(roomId, "board");
  };

  const onChangeRoomId = (e) => {
    const roomId = e.target.value;
    setRoomId(roomId);
  };
  //#endregion

  return (
    <>
      <div className="container text-center mx-auto my-32 flex flex-col gap-16 relative">
        <h1 className="text-5xl leading-loose mx-auto ">
          <img src={horrorImage} alt="" />
        </h1>
        <div className="flex flex-col gap-y-4">
          <div>
            <button className="btn w-64 rounded-full text-lg">
              ガチャを引く
            </button>
          </div>
          <div>
            <button
              className="btn w-64 rounded-full text-lg"
              onClick={onClickDokkiri}
            >
              5人目を見る
            </button>
          </div>
        </div>
        {show && (
          <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-9/12 max-h-96">
            <img
              src={sadako}
              alt=""
              className="w-full object-cover object-top"
            />
          </div>
        )}
      </div>
      <input typeof="text" onChange={onChangeRoomId} />
      <br />
      <button onClick={createTable}>テーブル追加</button>
      <br />
      <button onClick={deleteTable}>テーブル削除</button>
      <br />
      <button onClick={boardInfo}>board情報の取得</button>
    </>
  );
};

export default RandomPage20;
