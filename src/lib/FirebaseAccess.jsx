import db from "../firebase";
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import "firebase/firestore";

// Board - リアルタイム取得
export const realTimeGet = (roomId, setData) => {
  const boardRef = collection(db, "rooms", roomId, "board");
  onSnapshot(boardRef, (post) => {
    setData(post.docs.map((doc) => ({ ...doc.data() })));
  });
};

// GameInfo - リアルタイム取得
export const realTimeGet2 = (roomId, setData) => {
  onSnapshot(doc(db, "rooms", roomId), (post) => {
    setData(post.data());
  });
};

// roomId - リアルタイム取得
export const realTimeGetRoom = (setData) => {
  const roomsRef = collection(db, "rooms");
  onSnapshot(roomsRef, (post) => {
    setData(post.docs.map((doc) => doc.id));
  });
};

// GameInfo - 参加可能状態取得
export const realTimeGetRoomState = (setData) => {
  const roomStateRef = collection(db, "rooms");
  onSnapshot(roomStateRef, (post) => {
    setData(post.docs.map((doc) => ({ ...doc.data() })));
  });
};

// Board - 更新
export const updateBoard = (roomId, board) => {
  try {
    board.map((data, index) => {
      const boardRef = doc(db, "rooms", roomId, "board", String(index + 1));
      updateDoc(boardRef, data);
    });
  } catch (err) {
    console.log(err);
  }
};

// GameInfo - 更新
export const updateGameInfo = (roomId, gameInfo) => {
  try {
    const gameInfoRef = doc(collection(db, "rooms"), roomId);
    updateDoc(gameInfoRef, gameInfo);
  } catch (err) {
    console.log(err);
  }
};

// ルームの作成
export const createRoom = (roomId = "1", board, gameInfo) => {
  // Board - 作成
  try {
    board.map((data, index) => {
      const boardRef = doc(db, "rooms", roomId, "board", String(index + 1));
      setDoc(boardRef, data);
    });
  } catch (err) {
    console.log(err);
  }

  // GameInfo - 作成
  try {
    const turnRef = doc(collection(db, "rooms"), roomId);
    setDoc(turnRef, gameInfo);
  } catch (err) {
    console.log(err);
  }
};

// ルームの削除
export const deleteRoom = (roomId = "") => {
  // Board - 削除
  try {
    for (let i = 0; i < 8; i++) {
      const boardRef = doc(db, "rooms", roomId, "board", String(i + 1));
      deleteDoc(boardRef);
    }
  } catch (err) {
    console.log(err);
  }

  // GameInfo - 削除
  try {
    const turnRef = doc(collection(db, "rooms"), roomId);
    deleteDoc(turnRef);
  } catch (err) {
    console.log(err);
  }
};
