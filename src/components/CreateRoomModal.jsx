import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/result.css";

const CreateRoomModal = ({ onClose }) => {
  //#region ゲーム作成用処理(GameTitleに置く予定)
  const [roomId, setRoomId] = useState("");

  // ルームの作成
  const createTable = () => {
    console.log(roomId);
    createRoom(roomId, Board, GameInfoInit);
  };

  const onChangeRoomId = (e) => {
    const roomId = e.target.value;
    setRoomId(roomId);
  };
  //#endregion

  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        open modal
      </button>
      {/*  The modal */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">試合をする部屋を立てましょう!</h3>
          <input type="text" onChange={onChangeRoomId} />
          <p className="py-4">
            <br />
            <button onClick={createTable}>テーブル追加</button>
            <br />
            <button onClick={boardInfo}>board情報の取得</button>
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn" onClick={onClose}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CreateRoomModal;
