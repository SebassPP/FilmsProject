import "./favorite.css"
import { useParams } from "react-router-dom"
import React, {useState, useEffect}from "react"
import { addToFirebase,getFromFirebase, updateFromFirebase, deleteFromFirebase} from "../firebaseHelpers "


const FavoriteView = () => {

    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }

    const addToFB = async (id,id_pelicula, original_title, poster_path, release_date,vote_average, type) => {
        addToFirebase(
            { objectToSave: { id, id_pelicula, original_title, poster_path,release_date,vote_average } },type
        );
    };

    const getFavorite = async () => {
        getFromFirebase(
    
          "Favorites"
        );
       
      };

    // 
    console.log(currentMovieDetail)
    console.log(getFavorite)
    return (
            <div>
                {
                    <button className="movie__favButton movie__Button"onClick={() => addToFB(id,id,currentMovieDetail.original_title,currentMovieDetail.poster_path,
                        currentMovieDetail.release_date,currentMovieDetail.vote_average ,"Favorites" )}>Add to favorites</button>
                }
                {
                    <button className="movie__favButton_delete movie__Button">Add to favorites</button>
                }
                {
                    <button className="movie__watchButton movie__Button"onClick={() => addToFB(id,id,currentMovieDetail.original_title,currentMovieDetail.poster_path,
                        currentMovieDetail.release_date, currentMovieDetail.vote_average ,"WatchLater" )}>Watch later</button>
                }
                {
                     <button className="movie__watchButton_delete movie__Button">Watch later</button>
                }                  
            </div>

    )


};

export default FavoriteView;