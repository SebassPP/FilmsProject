import React,{ useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import LoadingSpinner from "./components/Loading";
import Navbar from "./components/Navbar";

 
import { addToFirebase } from "./Helpers/firebaseHelpers";


function BlogPost (  ){

        const [movies, setMovies] = useState([]);
        const [loading, setLoading] = useState(true)

        //Trae la id de la pelicula
        const location = useLocation();
        const id = location.state

        const addToFB = async (imbdid, name, poster, type) => {
            addToFirebase(
              { objectToSave: { id, name, poster } },
              type
            );
          };
        
 
        const fetchNew =  async() => {

            const url = `http://www.omdbapi.com/?i=${id}&plot=full&apikey=4c3f3840`
            const response = await fetch(url)
            const responseJ = await response.json()    
            if(Object.keys(responseJ).length==0){
                
            }else{
                setMovies(responseJ)
                setLoading(false)
            }

            
        }
        

        useEffect (() => {
        
            fetchNew()
    
          }, [])
          console.log(movies)
    
    return (
        
        <div>
        <Navbar></Navbar>

             <div className='loader' >
                        
                        {
                            loading ? 
                            <LoadingSpinner/>
                            :
                            <div className="container" >
                                <div>
                                    <h1>{movies.Title}</h1>
                                </div>

                                <div className='post'>
                                    <div className='imagePo'>
                                        <img src={movies.Poster}></img>
                                    </div>
                                    
                                    <div className='content'>
                                        <h3>Year: <i>{ movies.Year }</i>  </h3> 
                                        <h3>Duration: <i>{ movies.Runtime}</i>  </h3> 
                                        
                                        

                                        <h3>Synopsis:</h3>
                                        <i>{movies.Plot}</i> 
                                    
                                      <h3>Actors: </h3> {movies.Actors}

                                      <h3>Director: </h3> {movies.Director}



                                      
                                      <h3>Genre: <i>{ movies.Genre}</i>  </h3> 


                                    

                                        
                                    </div>
                                </div>
                                
                                
              
                                <button className='button-81'  onClick={() => addToFB(movies.imbdid ,movies.Title, movies.Poster, "Favorites" )}>Add to Favorites</button>
                               
                                <button className='button-81'  onClick={() => addToFB(movies.imbdid ,movies.Title, movies.Poster,"Watch-Later" )}>Add to watch later</button>

                                
                            </div>
                        }

                        
                        
            </div>
        </div>
        
    )
}
export default BlogPost;