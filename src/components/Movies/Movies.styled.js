import styled from 'styled-components';

export const StyledMovies = styled.div`
	margin: 10px 77px 100px 77px;
	@media (max-width: 576px) {
		margin: 20px;
	}
`;
export const MovieBoxes = styled.div`
	overflow: scroll;
	display: flex;

	.box {
        text-align: center;
		border-radius: 12px;
		background: #000;
		color: #fff;
		margin: 0px 5px;
		min-height: 230px;
		min-width: 250px;
		padding-top: 100px;
        padding-left: 5px;
        padding-right: 5px;
	}
`;
