import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import {db} from "../firebase";
 
const addToFirebase = async ({ objectToSave }, collectionName) => {
  try { 
    const docRef = await addDoc(collection(db, collectionName), objectToSave);
    console.log(
      "Document written to table " + collectionName + " with ID: ",
      docRef.id
    );
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
 
const getFromFirebase = async (collectionName) => {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      //console.log("Documents read from collection " + collectionName + ": ", data);
      console.log(data)
      return data;
      
    } catch (e) {
      console.error("Error getting documents: ", e);
    }
  };
 
  // Update
  const updateFromFirebase = async (id, objectToUpdate, collectionName) => {
    try {
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, objectToUpdate);
      console.log("Document updated in collection " + collectionName + " with ID: ", id);
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };
 
  // Delete
  const deleteFromFirebase = async (id, collectionName) => {
    try {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);
      console.log("Document deleted from collection " + collectionName + " with ID: ", id);
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  };
 
 
 
 
export { addToFirebase, getFromFirebase, updateFromFirebase, deleteFromFirebase };