import React from "react";
import { Link } from "react-router-dom";

import "../css/result.css";

const Result = () => {
  return (
    <div>
      <h1>結果画面</h1>

      <div
        className="sample
"
      ></div>
      <div className="btn-wrap">
        <Link to="/PlayGame" className="btn2 onemore">
          もっかい遊べるドン
        </Link>
        <Link to="/" className="btn2 end">
          やめたいんご～
        </Link>
      </div>
    </div>
  );
};

export default Result;
