import React, { useState } from "react";
import { Link } from "react-router-dom";
import GameResult from "../components/GameResult";
import "../css/result.css";
import ModalBase from "../components/ModalBase";

const Result = () => {
  return (
    <div className="flex justify-center items-center bg-black h-screen">
      <div>
        <GameResult />

        <div className="btn-wrap  rounded-e-full flex justify-center items-center mx-auto mt-24 bg-yellow-100 shadow-2xl shadow-yellow-600 w-128 h-32 bg-opacity-90">
          <Link
            to="/PlayGame"
            className="btn btn-outline  btn-warning text-2xl "
          >
            もっかい
          </Link>
          <Link
            onClick={() => document.getElementById("my_modal_4").showModal()}
            className="btn btn-outline btn-warning  text-2xl ml-11"
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
