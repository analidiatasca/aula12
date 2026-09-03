import styled from 'styled-components';
import logo from '../assets/logo.png';

const Modelo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to right, #481818, #611f1f, #b74b4b);
  gap: 32px;
  padding: 32px;  
  height: 32px;
`

const ModeloImagem = styled.img`
    height: 48px;   
`
const ModeloLink = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
`

export default function Navegacao() {
  return (
    <Modelo>
      <ModeloImagem src={logo} alt="Logo" />

      <ModeloLink href="#">Início</ModeloLink>
      <ModeloLink href="#">Filmes</ModeloLink>
      <ModeloLink href="#">Séries</ModeloLink>
      <ModeloLink href="#">Em alta</ModeloLink> 
    </Modelo>
  );
}


