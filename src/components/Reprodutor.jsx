import styled from "styled-components"


const Modelo = styled.div`
    background-color: #f15555;
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
    color: #7a1717;
`
const Titulo = styled.div`
    font-size: 32px;
    font-weight: bold;
    color: #7a1717;
`   
const Descricao = styled.div`
    font-size: 18px;
    line-height: 1.5;
    text-align: justify;
    color: #7a1717;
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
                    <div> ano de lançamento: {props.conteudo.ano}  </div>
                    <div> duração: {props.conteudo.duracao} </div>
                    <div> faixa etária: {props.conteudo.faixa} </div>
                     <div> Genero: {props.conteudo.genero} </div>
                </Organizador>
                <Descricao> Descrição: { props.conteudo.descricao } </Descricao>
            </ModeloDados>
        </Modelo>
    );
}
