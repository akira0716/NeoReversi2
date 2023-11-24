import React from "react";
import { useNavigate } from "react-router-dom";

const RandomPage80 = () => {
  const navigate = useNavigate();

  const onClickReturnHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="container text-center mx-auto my-32 flex flex-col gap-16 relative text-7xl">
        <h1>5人ではプレイできません。</h1>
        <div>
          <button
            className="btn w-64 rounded-full text-lg"
            onClick={onClickReturnHome}
          >
            タイトルに戻る
          </button>
        </div>
      </div>
    </>
  );
};

export default RandomPage80;
