import React from 'react';
const movie = { "Title": "Spider-Man 3", "Year": "2007", "imdbID": "tt0413300", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg" };//"Title":"The Bat Man of Shanghai","Year":"2012","imdbID":"tt2273962","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BNDNhYmFjZGQtNjE3ZC00N2VmLWI0MWItODkxMmE2MWNiM2M5XkEyXkFqcGdeQXVyNzU1OTYxNzU@._V1_SX300.jpg"};

const MovieCard = () => {
    return (
        
        <div className="col-md-4">
            <div className="card" >
                
                <div class="card-body">
                    <h5 class="card-title">{movie.Title}</h5>
                    <p class="card-text">{movie.Year}</p>
                    
                </div>
                <img src={movie.Poster} alt={movie.Title} class="card-img-top" />
            </div>
        </div>
        


    );




}
export default MovieCard;