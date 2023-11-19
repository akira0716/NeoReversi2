import React from "react";
import { Link, useNavigate } from "react-router-dom";
import MusoImg from "../public/muso.png";
import { getLot } from "../logic/Random_logic";

const Home = () => {
  const navigate = useNavigate();

  const onClickRandom = () => {
    const res = getLot();
    console.log(res);
    if (res !== "80%") {
      navigate("/RandomPage20");
    } else {
      console.log("はずれーー");
    }
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
        <br />
        <button className="btn btn-outline btn-info">いつもの</button>
        <button className="btn btn-outline btn-error">無双</button>
      </div>

      <br />
      <div className="flex">
        <p>
          <Link to="/PlayGame">
            <button className="btn btn-outline btn-primary">
              Are you ready？？
            </button>
          </Link>
        </p>
      </div>
      <br />
      <div className="flex">
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
