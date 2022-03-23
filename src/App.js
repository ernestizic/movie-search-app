import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Movies from './components/Movies/Movies';
import Searchbar from './components/Search/Searchbar';

function App() {
	const [movies, setMovies] = useState([]);

	const apikey = process.env.REACT_APP_API_KEY

	useEffect(() => {
		const fetchMovies = async () => {
			const res = await axios.get(
				`http://www.omdbapi.com/?s=flash&apikey=${apikey}`
			);
			setMovies(res.data.Search);
			console.log(res.data);
		};
		fetchMovies();
	}, [apikey]);

	const searchMovie = async (keyword) => {
		const res = await axios.get(
			`http://www.omdbapi.com/?s=${keyword}&apikey=${apikey}`
		);
		setMovies(res.data.Search);
	};

	return (
		<div className='App'>
			<Header />
			<Hero />
			<Searchbar searchMovie={searchMovie} />
			<Movies movies={movies} />
		</div>
	);
}

export default App;
