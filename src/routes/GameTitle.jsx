import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MusoImg from "../public/muso.png";
import { getLot } from "../logic/Random_logic";
import CreateRoomModal from "../components/CreateRoomModal";

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
  const [show, setShow] = useState(false); // モーダル表示のための状態変数

  const onClickRandom = () => {
    const res = getLot();
    console.log(res);
    if (res !== "80%") {
      navigate("/RandomPage20");
    } else {
      console.log("はずれーー");
    }
  };

  const onClickCreateRoom = () => {
    setShow(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={MusoImg} alt="NEO Reversi ～無双～ 2" />
      <br />
      <p className="text-center">プレイ人数</p>
      <br />
      <div className="flex space-x-4">
        <button className="btn btn-outline btn-success">2人</button>
        <button className="btn btn-outline btn-success">3人</button>
        <button className="btn btn-outline btn-success">4人</button>
        <button className="btn btn-outline btn-success" onClick={onClickRandom}>
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
            onClick={onClickCreateRoom} // 部屋を立てるボタンをクリックしたときにモーダルを表示
          >
            部屋を立てる（仮）
          </button>
          {/* CreateRoomModal コンポーネントを条件付きで表示 */}
          {show && <CreateRoomModal onClose={() => setShow(false)} />}

          <button className="btn btn-outline btn-secondary">
            部屋に入る（仮）
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
  );
};

export default Home;
