import React, {useEffect, useState} from "react"
import "./FavoriteList.css"
import Cards from "../cardFB/cardFB"
import {getFromFirebase} from "../firebaseHelpers "

const FavoriteList = () => {

    const [FavList, setFavorites] = useState([])
    
    
    const getFavorite = async () => {
        getFromFirebase(
          "Favorites"
        ).then((data) => setFavorites(data));
        }
        
      ;

      useEffect(() => {
        getFavorite();
    }, [])

    console.log(FavList)

    return (
        <div className="favorite__list">
            <h2 className="list__title">{("FAVORITES").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    FavList.map(movie => (
                        <Cards movie={movie} />))
                }
            </div>
        </div>
    )
}

export default FavoriteList