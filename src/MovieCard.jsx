import React from 'react';
//Making a custom component MovieCard which displays each movie on the webpage
const MovieCard = ({movie}) => {
    return(
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={ movie.Poster!=='N/A' ? movie.Poster :'https://via.placeholder.com/400' } alt={movie.title}/>
            </div>    
            <div>
                <span>{movie.Type}</span>
                <h1>{movie.Title}</h1>
            </div>
        </div>
    );
}

export default MovieCard;