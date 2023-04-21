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

    const addToFB = async (id,id_pelicula, original_title, type) => {
        addToFirebase(
            { objectToSave: { id, id_pelicula, original_title } },type
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
                <button className='button-81'  onClick={() => addToFB(id,id,currentMovieDetail.original_title,"Favorites" )}>Add to Favorites</button>
                <button className='button-82'  onClick={() => addToFB(id,id,currentMovieDetail.original_title,"WatchLater" )}>Add to Watch Later</button>
            </div>

    )






};

export default FavoriteView;