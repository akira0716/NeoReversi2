import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  realTimeGetRoom,
  realTimeGetRoomState,
  updateGameInfo,
} from "../lib/FirebaseAccess";

const JoinRoom = ({ setMe, setRoomId }) => {
  const [rooms, setRooms] = useState([""]);
  const [gameInfo, setGameInfo] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    realTimeGetRoom(setRooms);
    realTimeGetRoomState(setGameInfo);
  }, []);

  // プレイヤー2として参加
  const onClickJoin = (room) => {
    updateGameInfo(room, { roomState: false });
    setMe(2);
    setRoomId(room);
    navigate("/PlayGame");
  };

  // 観戦者として参加
  const onClickWatching = (room) => {
    setMe(3);
    setRoomId(room);
    navigate("/PlayGame");
  };

  // 参加可能なルームかチェック
  const JoinableCheck = (index, gameInfo) => {
    let result = false;

    if (gameInfo.length > 0) {
      if (gameInfo[index].roomState) {
        result = false;
      } else {
        result = true;
      }
    }

    return result;
  };

  return (
    <>
      <div className="text-center">
        <h3 className="font-bold text-center text-2xl">ルームに参加する</h3>
        <div className="my-5">
          {rooms.length > 0 ? (
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>ルームID</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room, index) => {
                  return (
                    <tr key={index}>
                      <th className="text-2xl">{index + 1}</th>
                      <td className="w-full text-2xl">{room}</td>
                      <td>
                        <button
                          className="btn btn-outline btn-success"
                          onClick={() => onClickJoin(room)}
                          disabled={JoinableCheck(index, gameInfo)}
                        >
                          参加
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-outline btn-success"
                          onClick={() => onClickWatching(room)}
                        >
                          観戦
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <h2 className="text-3xl">ルームが存在しません。</h2>
          )}
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-neutral">Close</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default JoinRoom;
