import React from "react";
import { useNavigate } from "react-router-dom";

const ResultModal = () => {
  // useNavigateで関数を取得する
  const navigate = useNavigate();

  // モーダル外がクリックされた時にモーダルを閉じてResult.jsxへ遷移する．
  const handleModalClick = () => {
    navigate("/Result");
  };

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleModalClick}
    >
      <div className="bg-white p-8 rounded-lg">
        {/* モーダルのコンテンツ */}
        <h2 className="text-2xl font-bold mb-4">Finish</h2>
        {/* 他のコンテンツやボタンなど */}
      </div>
    </div>
  );
};

export default ResultModal;
