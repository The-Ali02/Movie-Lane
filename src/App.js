import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
//7524857c
const API_URL = 'http://www.omdbapi.com?apikey=95393437';
//Sample to know what all properties movie has fetched from API
/*const movie={   
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    "Title": "Avengers: Endgame",
    "Type": "movie",
    "Year": "2019",
    "imdbID": "tt4154796"
}*/
    
const App = () => {

    const [movies, setMovies] = useState([]);

    const [searchTerm , setSearchTerm] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        //after creating useState hook remove console.log and
        // use the corresponding setMovies function
        setMovies(data.Search);
    }     
    useEffect(() => {
        searchMovies('Avengers');
    },[]);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className='search'>
              <input 
                placeholder='Search for Movies'
                value={searchTerm}
                onChange={(sch) => setSearchTerm(sch.target.value)}
                onKeyPress={(e) => e.key==='Enter'? setSearchTerm(e.target.value):null}
              />
              <img src = {SearchIcon}
                alt="search"

                //<!-- To dynamically change the search below code works -->
                //searchMovies is def. asyn fetching from API and creates json response
                onClick={() => searchMovies(searchTerm)}
              />
              </div>

            {//dynamic block of code to check if movie array is empty
              movies?.length > 0 ? (<div className='container'>

                {movies.map((movie) => (   //dynamically get all movies in array
                    <MovieCard movie={movie}/>
                ))}                    
                </div>
                ) : (<div className='empty'>
                        <h2>No Movies Found</h2>
                </div>
                )
            }
              
        </div>
    );
}

export default App;