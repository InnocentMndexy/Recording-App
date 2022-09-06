import { db } from "./firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const hotelCollectionRef = collection(db, "Users");

class UserServices {
  addUser = (info) => {
    return addDoc(hotelCollectionRef, info);
  };

  updateUser = (id, updatedBook) => {
    const hotelDoc = doc(db, "Users", id);
    return updateDoc(hotelDoc, updatedBook);
  };

  deleteUser = (id) => {
    const hotelDoc = doc(db, "Users", id);
    return deleteDoc(hotelDoc);
  };

}



export default new UserServices();