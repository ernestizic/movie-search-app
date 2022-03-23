import React from 'react';
import { MovieBoxes, StyledMovies } from './Movies.styled';

const Movies = ({movies}) => {
	return (
		<StyledMovies>
            <p>Series</p>
			<MovieBoxes>
                {movies && movies.map((movie)=> (
                    
                    movie.Type === "series" &&<div className='series' key={movie.imdbID}>
                        <p>{movie.Title}</p>
                    </div>
                ))}
            </MovieBoxes>

            <p style={{marginTop: '30px'}}>Movies</p>
			<MovieBoxes>
                {movies && movies.map((movie)=> (
                    
                    movie.Type === "movie" &&<div className='movie' key={movie.imdbID}>
                        <p>{movie.Title}</p>
                    </div>
                ))}
            </MovieBoxes>
		</StyledMovies>
	);
};

export default Movies;
