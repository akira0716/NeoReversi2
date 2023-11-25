import React from "react";

const CreateRoom = () => {
  return (
    <>
      <div className="text-center">
        <h3 className="font-bold text-center text-2xl">ルームを作成する</h3>
        <div className="my-5">
          <input
            type="text"
            placeholder="ルームID"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div className="modal-action">
          <div>
            <button className="btn btn-outline btn-primary">
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
