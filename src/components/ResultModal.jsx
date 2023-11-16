import React from "react";

const ResultModal = () => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg">
        {/* モーダルのコンテンツ */}
        <h2 className="text-2xl font-bold mb-4">試合終了</h2>
        {/* 他のコンテンツやボタンなど */}
      </div>
    </div>
  );
};

export default ResultModal;
