import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MusoImg from "../public/muso.png";
import { getLot } from "../logic/Random_logic";
// import CreateRoomModal from "../components/CreateRoomModal";
import ModalBase from "../components/ModalBase";

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

const Home = () => {
  const navigate = useNavigate();
  const [modalKind, setModalKind] = useState(0);

  // [ 5人 ]ボタン押下時処理
  const onClickRandom = () => {
    const res = getLot();
    console.log(res);
    if (res !== "80%") {
      navigate("/RandomPage20");
    } else {
      navigate("/RandomPage80");
    }
  };

  // [ルームを作成する], [ルームに参加する]ボタン押下時処理
  const onClickModalOpen = (e) => {
    // ボタンの"data-kind"属性の値を設定し、モーダルの種類を変更
    setModalKind(Number(e.target.getAttribute("data-kind")));
    document.getElementById("my_modal_4").showModal();
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <img src={MusoImg} alt="NEO Reversi ～無双～ 2" />
        <br />
        <p className="text-center">プレイ人数</p>
        <br />
        <div className="flex space-x-4">
          <button className="btn btn-outline btn-success">2人</button>
          <button className="btn btn-outline btn-success">3人</button>
          <button className="btn btn-outline btn-success">4人</button>
          <button
            className="btn btn-outline btn-success"
            onClick={onClickRandom}
          >
            5人
          </button>
        </div>

        <br />
        <p>モード</p>
        <br />
        <div className="flex space-x-4">
          <button className="btn btn-outline btn-info">いつもの</button>
          <button className="btn btn-outline btn-error">無双</button>
        </div>

        <br />
        <div>
          <div className="flex mb-4 gap-4">
            <button
              className="btn btn-outline btn-secondary"
              onClick={onClickModalOpen}
              data-kind="0"
            >
              ルームを作成する
            </button>
            <button
              className="btn btn-outline btn-secondary"
              onClick={onClickModalOpen}
              data-kind="1"
            >
              ルームに参加する
            </button>
          </div>
        </div>

        <div className="flex mt-6">
          <p>
            <Link to="/Result">
              <button className="btn btn-outline btn-warning">結果画面</button>
            </Link>
          </p>
        </div>
      </div>
      <ModalBase kind={modalKind} />
    </>
  );
};

export default Home;
