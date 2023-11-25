import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { realTimeGetRoom } from "../lib/FirebaseAccess";

const JoinRoom = ({ setMe, setRoomId }) => {
  const [rooms, setRooms] = useState([""]);

  const navigate = useNavigate();

  useEffect(() => {
    realTimeGetRoom(setRooms);
  }, []);

  const onClickJoin = (room) => {
    setMe(2);
    setRoomId(room);
    navigate("/PlayGame");
  };

  return (
    <>
      <div className="text-center">
        <h3 className="font-bold text-center text-2xl">ルームに参加する</h3>
        <div className="overflow-x-auto my-5">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>ルームID</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{room}</td>
                    <td>
                      <button
                        className="btn btn-outline btn-success"
                        onClick={() => onClickJoin(room)}
                      >
                        参加
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
