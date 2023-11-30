import React from "react";
import "../css/result.css";

interface NeonTextProps {
  type: String;
  children: React.ReactNode;
}

interface GameResultProps {
  me: number;
  result: String;
}

const NeonText: React.FC<NeonTextProps> = ({ type, children }) => (
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

const GameResult: React.FC<GameResultProps> = ({ me, result }) => {
  return (
    <div>
      {me === 1 ? (
        <>
          <NeonText type="win">WIN</NeonText>

          <div className="h-64">
            <div className="flex justify-center mt-11">
              <div className="result-text font-extrabold text-yellow-500 text-6xl relative">
                <div className="absolute inset-0 text-transparent">
                  ➡{result === "win" ? "Player1" : "Player2"}
                </div>
                <p className="absolute inset-0 text-yellow-100 animate-flicker">
                  ➡{result === "win" ? "Player1" : "Player2"}
                </p>
              </div>
            </div>

            <div className="mt-32 w-screen text-center">
              <div className="result-text font-extrabold text-yellow-500 text-6xl relative me-60">
                <p className="absolute inset-0 text-transparent pe-">
                  {result === "win" ? "Player2" : "Player1"}⇦
                </p>
                <p className="absolute inset-0 text-yellow-100 animate-flicker">
                  {result === "win" ? "Player2" : "Player1"}⇦
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
                  ➡{result === "win" ? "Player2" : "Player1"}
                </div>
                <p className="absolute inset-0 text-yellow-100 animate-flicker">
                  ➡{result === "win" ? "Player2" : "Player1"}
                </p>
              </div>
            </div>

            <div className="mt-32 w-screen text-center">
              <div className="result-text font-extrabold text-yellow-500 text-6xl relative me-60">
                <p className="absolute inset-0 text-transparent pe-">
                  {result === "win" ? "Player1" : "Player2"}⇦
                </p>
                <p className="absolute inset-0 text-yellow-100 animate-flicker">
                  {result === "win" ? "Player1" : "Player2"}⇦
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
