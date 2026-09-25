import styled from "styled-components"
import logo from "../assets/logo.png"

const Modelo = styled.div`
    background-image: URL(${props => props.fundo});
    background-size: cover;
    background-position: center;
    height: 180vh;
`

const Barra = styled.div`
    background: linear-gradient(pink, transparente);
    padding: 32px;
`

const BarraImagem = styled.img`
    display: block;
    margin: 0 auto;
    height: 90px;
`

const Mensagem = styled.div`
    margin: 0 auto;
    padding: 64px 0;
    text-align: center;
    width: ${props => props.tamanho };
`

export default function Principal(props) {
    return < Modelo fundo ={ props.fundo }>
        <Barra>
            <BarraImagem src= {logo} alt="logo" />
        </Barra>
        <Mensagem tamanho={ props.tamanho }>
            {props.children}
        </Mensagem>
    </Modelo>
}