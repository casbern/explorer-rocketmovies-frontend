import { styled } from "styled-components"

export const Container = styled.div`
	> main {
		padding: 4rem;

		h2 {
			color: ${(props) => props.theme.COLORS.GRAY_200};
			font-size: 2.6rem;
			font-weight: 500;
			margin: 2.4rem 0;
		}
	}

	@media (min-width: 768px) {
		> main {
			padding: 4rem 12.3rem;

			h2 {
				font-size: 3.6rem;
			}
		}
	}
`

export const Title = styled.div`
	display: flex;
	gap: 1.9rem;
	align-items: center;
`

export const Info = styled.div`
	display: flex;
	gap: 0.8rem;

	.user-info,
	.data-info {
		display: flex;
		align-items: center;
		gap: 0.8rem;

		color: ${(props) => props.theme.COLORS.GRAY_200};
		font-family: "Roboto", sans-serif;
		font-size: 1.6rem;
		font-weight: 400;

		text-align: justify;
	}

	.user-info img {
		width: 1.6rem;
		height: 1.6rem;
		border-radius: 3.5rem;
		border: 1px solid ${(props) => props.theme.COLORS.GRAY_900};
	}

	.data-info svg {
		color: ${(props) => props.theme.COLORS.PINK};
	}
`
