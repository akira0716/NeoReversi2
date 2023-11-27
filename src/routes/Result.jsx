import React, { useState } from "react";
import { Link } from "react-router-dom";
import GameResult from "../components/GameResult";
import "../css/result.css";
import ModalBase from "../components/ModalBase";

const Result = ({ roomId }) => {
  return (
    <div className="flex justify-center items-center bg-black h-screen">
      <div>
        <GameResult />

        <div className="btn-wrap  rounded-full flex justify-center items-center mx-auto mt-24 gap-10 bg-yellow-50 shadow-2xl shadow-yellow-600 w-128 h-32">
          <Link
            to="/PlayGame"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 "
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              もっかい
            </span>
          </Link>
          <Link
            onClick={() => document.getElementById("my_modal_4").showModal()}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              やめたい
            </span>
          </Link>
        </div>

        <ModalBase kind={2} roomId={roomId} />
      </div>
    </div>
  );
};

export default Result;
