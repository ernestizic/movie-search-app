import styled from 'styled-components';
import banner from '../../assets/banner.png';

export const StyledHero = styled.div`
	border: 1px solid black;
	color: #fff;
	background: url(${banner}) no-repeat center center;
	background-size: cover;
	header {
		padding: 100px 77px;
		@media (max-width: 912px) {
			text-align: center;
			padding: 50px;
		}
		@media (max-width: 576px) {
			text-align: center;
			padding: 50px;
		}
	}

	h1 {
		font-size: 70px;
		line-height: 94px;
		letter-spacing: -0.05em;
		@media (max-width: 576px) {
			font-size: 25px;
			line-height: 30px;
		}
	}
`;
