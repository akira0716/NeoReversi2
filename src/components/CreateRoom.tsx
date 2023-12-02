import React, { useEffect, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { createRoom, realTimeGetRoom } from "../lib/FirebaseAccess";

// ボードの型を定義
interface BoardItem {
  state: number[];
}

// ゲーム情報の型を定義
interface GameInfo {
  turn: number;
  roomState: boolean;
}

// 初期ボードのデータ
const Board: BoardItem[] = [
  { state: [0, 0, 0, 0, 0, 0, 0, 0] },
  { state: [0, 0, 0, 0, 0, 0, 0, 0] },
  { state: [0, 0, 0, 0, 0, 0, 0, 0] },
  { state: [0, 0, 0, 1, 2, 0, 0, 0] },
  { state: [0, 0, 0, 2, 1, 0, 0, 0] },
  { state: [0, 0, 0, 0, 0, 0, 0, 0] },
  { state: [0, 0, 0, 0, 0, 0, 0, 0] },
  { state: [0, 0, 0, 0, 0, 0, 0, 0] },
];

// ゲーム情報の初期値
const GameInfoInit: GameInfo = {
  turn: 1,
  roomState: true,
};

// CreateRoomコンポーネントのPropsの型定義
interface CreateRoomProps {
  setMe: React.Dispatch<React.SetStateAction<number>>;
  setRoomId: React.Dispatch<React.SetStateAction<string>>;
}

const CreateRoom: React.FC<CreateRoomProps> = ({ setMe, setRoomId }) => {
  const [roomIdData, setRoomIdData] = useState("");
  const [keepRoomIdData, setKeepRoomIdData] = useState<string[]>([]);
  const navigate = useNavigate();

  // ルームID一覧を取得する副作用
  useEffect(() => {
    realTimeGetRoom(setKeepRoomIdData);
  }, []);

  // ルームID入力時の処理
  const handleInputIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomIdData(e.target.value);
  };

  // ゲーム開始ボタン押下時の処理
  const onClickCreateRoom = () => {
    if (roomIdData === "") {
      alert("IDを入力してください．");
      return;
    } else if (keepRoomIdData.includes(roomIdData)) {
      alert("既に同じIDで部屋が作られています．");
      return;
    } else {
      setMe(1);
      setRoomId(roomIdData);
      createRoom(roomIdData, Board, GameInfoInit);
      navigate("/PlayGame");
    }
  };

  return (
    <div className="text-center">
      <h3 className="font-bold text-center text-2xl">ルームを作成する</h3>
      <div className="my-5">
        <input
          type="text"
          placeholder="ルームID"
          className="input input-bordered input-primary w-full max-w-xs"
          onChange={handleInputIdChange}
          value={roomIdData}
        />
      </div>
      <div className="modal-action">
        <div>
          <button
            className="btn btn-outline btn-primary"
            onClick={onClickCreateRoom}
          >
            ゲームを開始する
          </button>
        </div>
        <form method="dialog">
          <button className="btn btn-neutral">Close</button>
        </form>
      </div>
    </div>
  );
};

export default CreateRoom;
