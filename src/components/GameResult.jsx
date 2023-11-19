// GameResult.jsx
import React, { useState } from "react";
import "../css/result.css";

const GameResult = () => {
  const [result, setResult] = useState("win");
  const player = result === "win" ? "Player1" : "Player2";

  return (
    <div>
      {result === "win" ? (
        <>
          {/* WINの場合の表示 */}
          <div className="neon-wrapper">
            <span class="txt win">WIN</span>
            <span class="gradient"></span>
            <span class="dodge"></span>
          </div>

          <div className="result_wrap-win">
            <p className="result-text arrow1">＞＞＞＞</p>
            <p className="result-text">{player}</p>
          </div>
          <div className="result_wrap-lose">
            <p className="result-text">Player{result === "win" ? "2" : "1"}</p>
            <p className="result-text arrow2">＜＜＜＜</p>
          </div>
          <div className="neon-wrapper">
            <span class="txt lose">LOSE</span>
            <span class="gradient"></span>
            <span class="dodge"></span>
          </div>
        </>
      ) : (
        <>
          {/* LOSEの場合の表示 */}
          <p className="result-wl win ">WIN</p>
          <div className="result_wrap-win">
            <p className="result-text arrow1">＞＞＞＞</p>
            <p className="result-text">{player}</p>
          </div>
          <div className="result_wrap-lose">
            <p className="result-text">Player{result === "win" ? "1" : "2"}</p>
            <p className="result-text arrow2">＜＜＜＜</p>
          </div>
          <p className="result-wl lose">LOSE</p>
        </>
      )}
    </div>
  );
};

export default GameResult;
