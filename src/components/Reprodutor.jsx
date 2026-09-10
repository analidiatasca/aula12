import styled from "styled-components"

const Modelo = styled.div`
    background-color: #222;
    border-radius: 10px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
    overflow: hidden;
`
const ModeloTrailer = styled.iframe`
    width: 100%;
    height: 500px;
    border: none;
`
const ModeloDados = styled.div`
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 32px; 
`
const Titulo = styled.div`
    font-size: 32px;
    font-weight: bold;
`   
const Descricao = styled.div`
    font-size: 18px;
    line-height: 1.5;
    text-align: justify;
`
const Organizador = styled.div`
    display: flex;
    justify-content: space-between;
`

export default function Reprodutor(props) {
    return (
        <Modelo>
            <ModeloTrailer src={ props.conteudo.trilha } />
            <ModeloDados>
                <Titulo> { props.conteudo.titulo } </Titulo>
                <Organizador>
                    <div> {props.conteudo.ano} </div>
                    <div> {props.conteudo.duracao} </div>
                    <div> {props.conteudo.faixa} </div>
                </Organizador>
                <Descricao> { props.conteudo.descricao } </Descricao>
            </ModeloDados>
        </Modelo>
    );
}
