import React from "react";
import { Link } from "react-router-dom";

interface PanelGameInfoProps {
  player: number;
  me: number;
  counter: number;
}

const PanelGameInfo: React.FC<PanelGameInfoProps> = ({
  player,
  me,
  counter,
}) => {
  return (
    <>
      <div className="mx-5 my-5 text-4xl">
        <div>
          {me === 1 || me === 2 ? (
            <h2 className="p-5">あなたは、プレイヤー{me}です。</h2>
          ) : (
            <h2 className="p-5">あなたは、観戦者です。</h2>
          )}
        </div>
        <div className="flex p-5 justify-around">
          {player === 1 ? <p className="w-12">➡</p> : <p className="w-12"></p>}
          <p>
            player1：
            <span className="absolute w-9 h-9 bg-black rounded-3xl"></span> 　×
            {counter.black}
          </p>
        </div>
        <div className="flex p-5 justify-around">
          {player === 2 ? <p className="w-12">➡</p> : <p className="w-12"></p>}
          <p>
            player2：
            <span className="absolute w-9 h-9 bg-white rounded-3xl"></span> 　×
            {counter.white}
          </p>
        </div>
        <div className="me-8 my-2">
          <Link
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l  dark:focus:ring-purple-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 "
            to="/"
          >
            退出する（タイトルへ）
          </Link>
        </div>
      </div>
    </>
  );
};

export default PanelGameInfo;
