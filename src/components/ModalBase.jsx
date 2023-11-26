import React from "react";
import { Link } from "react-router-dom";
import CreateRoom from "./CreateRoom";
import JoinRoom from "./JoinRoom";

const ModalBase = ({ kind, setMe, setRoomId }) => {
  let content = null;

  if (kind === 0) {
    content = <CreateRoom setMe={setMe} setRoomId={setRoomId} />;
  } else if (kind === 1) {
    content = <JoinRoom setMe={setMe} setRoomId={setRoomId} />;
  } else if (kind === 2) {
    // Result画面のモーダル(Todo)
    content = (
      <>
        <div className="bg-clip-border p-8 bg-violet-600 border-4 border-violet-300 border-dashed">
          <p className="text-3xl text-center font-bold text-stone-100">
            本当に、
          </p>
          <p className="text-3xl text-center font-bold text-stone-100">
            いいんだね？
          </p>
          <div className="btn-wrap-modal">
            <Link className="btn2 btn3" to="/PlayGame">
              やっぱりやる
            </Link>
            <Link className="btn2 btn3" to="/">
              本当にやめる
            </Link>
          </div>
        </div>
      </>
    );
  } else {
    // 特になし。
  }

  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-1/2 max-w-xl">{content}</div>
      </dialog>
    </div>
  );
};

export default ModalBase;
