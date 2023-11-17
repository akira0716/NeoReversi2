import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import "../css/result.css";
import WinImg from "../public/Win.png";

const Result = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="result-img-wrap">
        <img src={WinImg} alt="結果画面" height="100%" />
      </div>
      {/* sampleの反転するcssは消していいか確認 */}
      {/* <div className="sample"></div> */}
      <p className="result p1">Player1</p>
      <p className="result p2">Player2</p>

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
  );
};

export default Result;
