import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import horrorImage from "../public/horror01.png";
import sadako from "../public/sadako.jpg";

const RandomPage20 = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const onClickDokkiri = () => {
    setShow(true);

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <>
      <div className="container text-center mx-auto my-32 flex flex-col gap-16 relative">
        <h1 className="text-5xl leading-loose mx-auto ">
          <img src={horrorImage} alt="" />
        </h1>
        <div className="flex flex-col gap-y-4">
          <div>
            <button className="btn w-64 rounded-full text-lg">
              ガチャを引く
            </button>
          </div>
          <div>
            <button
              className="btn w-64 rounded-full text-lg"
              onClick={onClickDokkiri}
            >
              5人目を見る
            </button>
          </div>
        </div>
        {show && (
          <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-9/12 max-h-96">
            <img
              src={sadako}
              alt=""
              className="w-full object-cover object-top"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default RandomPage20;
