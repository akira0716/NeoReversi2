import React from "react";
import { Link } from "react-router-dom";
import "../css/result.css";

const Modal = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className="modal-text">本当に、</p>
        <p className="modal-text text-center">いいんだね？</p>
        <div className="btn-wrap-modal">
          <Link className="btn2 btn3" to="/PlayGame">
            やっぱりやる
          </Link>
          <Link className="btn2 btn3" to="/">
            本当にやめる
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
