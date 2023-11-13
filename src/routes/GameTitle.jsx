import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>トップページ</h1>
      <br />
      <p>
        <Link to="/PlayGame">
          <button className="btn btn-primary">Game Start</button>
        </Link>
      </p>
      <br />
      <p>
        <Link to="/Result">
          <button className="btn btn-primary">結果画面</button>
        </Link>
      </p>
    </div>
  );
};

export default Home;
