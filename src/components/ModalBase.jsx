import React from "react";
import CreateRoom from "./CreateRoom";
import JoinRoom from "./JoinRoom";
import EndGameCheck from "./EndGameCheck";
import ResultModal from "./ResultModal";

const ModalBase = ({ kind, setMe, setRoomId, roomId }) => {
  let content = null;

  if (kind === 0) {
    content = <CreateRoom setMe={setMe} setRoomId={setRoomId} />;
  } else if (kind === 1) {
    content = <JoinRoom setMe={setMe} setRoomId={setRoomId} />;
  } else if (kind === 2) {
    content = <EndGameCheck roomId={roomId} />;
  } else if (kind === 3) {
    content = <ResultModal />;
  } else {
    // なにもなし。
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
