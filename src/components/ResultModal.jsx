import React from "react";
import { Link } from "react-router-dom";

const ResultModal = () => {
  return (
    <>
      <div className="text-center bg-clip-border p-8 bg-indigo-950 border-4 border-violet-300 border-double">
        <h2 className="text-8xl font-bold mb-4 text-white">Finish</h2>
        <div className="modal-action">
          <div className="me-8 my-2">
            <Link
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l  dark:focus:ring-purple-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 "
              to="/Result"
            >
              結果画面へ
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultModal;
