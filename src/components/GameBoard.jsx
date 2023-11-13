import React from "react";
import "../css/game.css";

const GameBoard = () => {
  const onClickEvent = (e) => {
    // 1度置かれた場所は、置けなくする。
    if (e.target.childElementCount > 0) {
      return;
    }
    const newElement = document.createElement("div");
    newElement.setAttribute("class", "koma");
    e.target.appendChild(newElement);
  };

  return (
    <>
      <div className="board">
        {[...Array(8)].map((_, rowIndex) => {
          return (
            <div key={`row${rowIndex}`} className="row">
              {[...Array(8)].map((_, columnIndex) => {
                if (
                  (rowIndex === 3 && columnIndex === 3) ||
                  (rowIndex === 4 && columnIndex === 4)
                ) {
                  return (
                    <div
                      key={`${rowIndex}${columnIndex}`}
                      className="box"
                      onClick={onClickEvent}
                    >
                      <div className="koma-shiro"></div>
                    </div>
                  );
                } else if (
                  (rowIndex === 3 && columnIndex === 4) ||
                  (rowIndex === 4 && columnIndex === 3)
                ) {
                  return (
                    <div
                      key={`${rowIndex}${columnIndex}`}
                      className="box"
                      onClick={onClickEvent}
                    >
                      <div className="koma-kuro"></div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={`${rowIndex}${columnIndex}`}
                      className="box"
                      onClick={onClickEvent}
                    ></div>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GameBoard;
