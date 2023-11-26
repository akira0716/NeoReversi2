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
        <div className="bg-clip-border p-8 bg-indigo-950 border-4 border-violet-300 border-double">
          <p className="text-3xl text-center font-bold text-stone-100">
            本当に、
          </p>
          <p className="text-3xl text-center font-bold text-stone-100 mt-2">
            いいんだね？
          </p>
          <div className="mt-10 flex justify-around">
            <Link
              className="text-white bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl  dark:focus:ring-red-400 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
              to="/PlayGame"
            >
              やっぱりやる
            </Link>
            <Link
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l  dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 "
              to="/"
            >
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
