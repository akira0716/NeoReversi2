import React from "react";

const PanelGameInfo = ({ player, me, counter }) => {
  return (
    <>
      <div className="mx-5 my-5 text-4xl">
        <div>
          <h2 className="p-5">あなたは、プレイヤー{me}です。</h2>
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
      </div>
    </>
  );
};

export default PanelGameInfo;
