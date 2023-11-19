import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import GameResult from "../components/GameResult";
import "../css/result.css";

const Result = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="result-body">
      <div className="result-container ">
        <GameResult />

        <div className="btn-wrap">
          <Link to="/PlayGame" className="btn2 onemore">
            もっかい
          </Link>
          <Link onClick={openModal} className="btn2 end">
            やめたい
          </Link>
        </div>

        {isModalOpen && <Modal closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default Result;
