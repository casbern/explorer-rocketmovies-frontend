import { Container, Title, Info, Tags } from "./styles"

import { PiClock } from "react-icons/pi"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Rating } from "../../components/Rating"
import { Tag } from "../../components/Tag"

export default function Details() {
	return (
		<>
			<Container>
				<Header />
				<main>
					<ButtonText title="Voltar" />

					<Title>
						<h2>Interestellar</h2>
						<Rating grade={4} isBigSize={false} />
					</Title>

					<Info>
						<div className="user-info">
							<img src="https://github.com/cah90.png" alt="Imagem do usuário" />
							<p>Por Cássia Bernardo</p>
						</div>
						<div className="data-info">
							<PiClock />
							<p>23/05/22 às 08:00</p>
						</div>
					</Info>

					<Tags>
						<Tag title="Ficção Cientifica" />
						<Tag title="Drama" />
						<Tag title="Família" />
					</Tags>
				</main>
			</Container>
		</>
	)
}
