import styled from 'styled-components';

export const StyledMovies = styled.div`
	margin: 10px 77px 100px 77px;
	@media (max-width: 576px) {
		margin: 20px;
	}
	p{
		margin-bottom: 10px;
	}
`;
export const MovieBoxes = styled.div`
	overflow: scroll;
	display: flex;

	.series, .movie {
        text-align: center;
		border-radius: 12px;
		background: #000;
		color: #fff;
		margin-right: 5px;
		min-height: 230px;
		min-width: 250px;
		max-width: 250px;
		padding: 100px 5px 0 5px;
	}
`;
