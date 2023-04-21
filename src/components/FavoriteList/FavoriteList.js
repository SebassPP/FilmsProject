import React, {useEffect, useState} from "react"
import "./FavoriteList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"
import { addToFirebase,getFromFirebase, updateFromFirebase, deleteFromFirebase} from "../firebaseHelpers "

const FavoriteList = () => {
    
    const getFavorite = async () => {
        getFromFirebase(
          "Favorites"
        );
       
      };

    return (
        <div className="favorite__list">
            <h2 className="list__title">{("FAVORITES").toUpperCase()}</h2>
            <div className="list__cards">
            </div>
        </div>
    )
}

export default FavoriteList