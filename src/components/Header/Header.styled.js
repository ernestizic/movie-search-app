import styled from 'styled-components';

export const StyledHeader = styled.div`
	color: #fff;
	background: #292929;
	padding: 40px 77px;
	@media (max-width: 576px) {
		padding: 20px;
	}

	header {
		width: 13%;
		@media (max-width: 576px) {
			width: 100%;
		}
		h2 {
            padding: 10px 16px;
			border: 1px solid #fff;
			@media (max-width: 576px) {
				text-align: center;
			}
		}
	}
`;
