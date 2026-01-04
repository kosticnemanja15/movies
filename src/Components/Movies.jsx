import { useState } from "react";
import axios from 'axios';

const Movies = () => {

    const[movieTitle,setMovieTitle]=useState();

      const searchMovie = () =>{
        axios.get(`${process.env.REACT_APP_OMBDAPI_URL}?t=${movieTitle}&apikey=${process.env.REACT_APP_OMDBAPI_KEY}`) 
            .then (result => console.log(result))
            .catch(error => console.log(error));
    }  

    return(
        <>
          <div className="form-holder">
            <form>
              <input type="text" onInput={e => setMovieTitle(e.currentTarget.value)}/>
              <button type="button" onClick={searchMovie}>Search</button>
            </form>
          </div>

        </>
    )



}


export default Movies;