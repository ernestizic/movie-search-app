import React from 'react';
import { MovieBoxes, StyledMovies } from './Movies.styled';

const Movies = (movies) => {
    console.log(movies)
	return (
		<StyledMovies>
            <p>Movie</p>
			<MovieBoxes>
                {movies && movies.movies.map((movie)=> (
                    <div className='box' key={movie.imdbID}>
                        <p>{movie.Title}</p>
                    </div>
                ))}
            </MovieBoxes>
		</StyledMovies>
	);
};

export default Movies;
