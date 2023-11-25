import React, { useState, useEffect } from "react";
import { getRooms, realTimeGetRoom } from "../lib/FirebaseAccess";

const JoinRoom = ({ roomId, setRoomId }) => {
  const [rooms, setRooms] = useState([""]);

  useEffect(() => {
    realTimeGetRoom(setRooms);
  }, []);

  const onClickJoin = (room) => {
    setRoomId(room);
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
