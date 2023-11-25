import React from "react";

const JoinRoom = () => {
  return (
    <>
      <div className="text-center">
        <h3 className="font-bold text-center text-2xl">ルームに参加する</h3>
        <div className="my-5">
          <input
            type="text"
            placeholder="ルームID"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>ルームID</th>
                <th>作成時間</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>roomA</td>
                <td>14 : 00</td>
                <td>
                  <button className="btn btn-outline btn-success">参加</button>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>roomB</td>
                <td>14 : 05</td>
                <td>
                  <button className="btn btn-outline btn-success">参加</button>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>roomC</td>
                <td>14 : 12</td>
                <td>
                  <button className="btn btn-outline btn-success">参加</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="modal-action">
          <div>
            <button className="btn btn-outline btn-primary">
              ゲームに参加する
            </button>
          </div>
          <form method="dialog">
            <button className="btn btn-neutral">Close</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default JoinRoom;
