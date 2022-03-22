import React, { useState } from 'react';
import { SearchContainer } from './Searchbar.styled';

const Searchbar = ({searchMovie}) => {
	const [keyword, setKeyword] = useState('');

	const handleSubmit =(e)=> {
		e.preventDefault()
		searchMovie(keyword)
	}
	return (
		<SearchContainer>
			<p>Search</p>
			<form onSubmit={handleSubmit}>
				<input
					type='search'
					value={keyword}
					onChange={(e) => setKeyword(e.target.value)}
				/>
			</form>
		</SearchContainer>
	);
};

export default Searchbar;
