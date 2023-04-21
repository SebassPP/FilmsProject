import "./favorite.css";
import React, {useState, useEffect} from "react";
import { collection,addDoc } from "firebase/firestore";
import {db} from "../../firebase";

const addFavorite = async (id, original_title,type) => {
    try {
        const docRef = await addDoc(collection(db, "favorites"), {
            id: id,
            original_title: original_title,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const FavoriteView = () => {

    return (
        <div>
            <h1>FavoriteView</h1>
            <button onClick={() => addFavorite(1, "test", "movie")}>Add Favorite</button>
        </div>
    )
}

export default FavoriteView;