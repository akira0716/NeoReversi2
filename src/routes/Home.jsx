import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>トップページ</h1>
      <br />
      <p>
        <Link to="/page01">
          <button className="btn btn-primary">ページ1へ</button>
        </Link>
      </p>
      <br />
      <p>
        <Link to="/page02">
          <button className="btn btn-primary">ページ2へ</button>
        </Link>
      </p>
    </div>
  );
};

export default Home;
