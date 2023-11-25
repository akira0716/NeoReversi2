import React, { useState } from "react";
import { Link } from "react-router-dom";
import GameResult from "../components/GameResult";
import "../css/result.css";
import ModalBase from "../components/ModalBase";

const Result = () => {
  return (
    <div className="result-body">
      <div className="result-container ">
        <GameResult />

        <div className="btn-wrap">
          <Link to="/PlayGame" className="btn2 onemore">
            もっかい
          </Link>
          <Link
            onClick={() => document.getElementById("my_modal_4").showModal()}
            className="btn2 end"
          >
            やめたい
          </Link>
        </div>

        <ModalBase kind={2} />
      </div>
    </div>
  );
};

export default Result;
