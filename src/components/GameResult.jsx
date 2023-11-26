import React, { useState } from "react";
import "../css/result.css";

const NeonText = ({ type, children }) => (
  <div className="text-center">
    <div className="neon-wrapper">
      <span className={`txt ${type} text-6xl font-bold bg-black`}>
        {children}
      </span>
      <span className="gradient"></span>
      <span className="dodge"></span>
    </div>
  </div>
);

const GameResult = () => {
  const [result, setResult] = useState("win");
  const player = result === "win" ? "Player1" : "Player2";
  const playerNumber = result === "win" ? "2" : "1";

  return (
    <div>
      {result === "win" ? (
        <>
          <NeonText type="win">WIN</NeonText>

          <div className="h-64">
            <div className="flex justify-center mt-11">
              <div className="result-text font-extrabold text-yellow-500 text-6xl relative">
                <div className="absolute inset-0 text-transparent">
                  ➡{player}
                </div>
                <p className="absolute inset-0 text-yellow-100 animate-flicker">
                  ➡{player}
                </p>
              </div>
            </div>

            <div className="mt-32 w-screen text-center">
              <div className="result-text font-extrabold text-yellow-500 text-6xl relative me-60">
                <p className="absolute inset-0 text-transparent pe-">
                  Player{playerNumber}⇦
                </p>
                <p className="absolute inset-0 text-yellow-100 animate-flicker">
                  Player{playerNumber}⇦
                </p>
              </div>
            </div>
          </div>

          <NeonText type="lose">LOSE</NeonText>
        </>
      ) : (
        <>
          <NeonText type="win">WIN</NeonText>

          <div className="h-64">
            <div className="flex justify-center mt-7">
              <div className="result-text font-extrabold text-yellow-500 text-6xl relative">
                <div className="absolute inset-0 text-transparent">
                  ➡{player}
                </div>
                <p className="absolute inset-0 text-yellow-100 animate-flicker">
                  ➡{player}
                </p>
              </div>
            </div>

            <div className="mt-32 w-screen text-center">
              <div className="result-text font-extrabold text-yellow-500 text-6xl relative me-60">
                <p className="absolute inset-0 text-transparent pe-">
                  Player{playerNumber}⇦
                </p>
                <p className="absolute inset-0 text-yellow-100 animate-flicker">
                  Player{playerNumber}⇦
                </p>
              </div>
            </div>
          </div>

          <NeonText type="lose">LOSE</NeonText>
        </>
      )}
    </div>
  );
};

export default GameResult;
