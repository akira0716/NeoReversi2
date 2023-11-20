import db from "../firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore";
import "firebase/firestore";

export const getFirebase = (tableName, setData) => {
  const data = collection(db, tableName);
  getDocs(data).then((snapShot) => {
    setData(snapShot.docs.map((doc) => ({ ...doc.data() })));
  });
};

export const realTimeGet = (tableName, setData) => {
  onSnapshot(collection(db, tableName), (post) => {
    setData(post.docs.map((doc) => ({ ...doc.data() })));
  });
};

export const realTimeGet2 = (tableName, setData, id = 1) => {
  onSnapshot(collection(db, tableName), (post) => {
    let datas = post.docs.map((doc, index) => {
      if (id === index + 1) {
        return doc.data();
      }
    });
    setData(datas[0]);
  });
};

export const setFireBase = (tableName, document, data) => {
  const docRef = doc(collection(db, tableName), document);

  try {
    updateDoc(docRef, data);
  } catch (err) {
    console.log(err);
  }
};
