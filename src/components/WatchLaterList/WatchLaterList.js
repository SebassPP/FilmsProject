import React, {useEffect, useState} from "react"
import "./WatchLaterList.css"
import Cards from "../cardFB/cardFB"
import {getFromFirebase} from "../firebaseHelpers "

const WatchLaterList = () => {

    const [WList, setWatchLater] = useState([])
    const getFavorite = async () => {
        getFromFirebase(
          "WatchLater"
        ).then((data) => setWatchLater(data));
        };

      useEffect(() => {
        getFavorite();
    }, [])

    return (
        <div className="watchLater__list">
            <h2 className="list__title">{("Watch Later").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    WList.map(movie => (
                        <Cards movie={movie} />))
                }
            </div>
        </div>
    )
}

export default WatchLaterList