
import styled from "styled-components"
import { useState } from "react"
import ConteudoInicial from "../datas/ConteudoInicial"
import SalvarConteudo from "../functions/SalvarConteudo"

const Container = styled.div`
  min-height: 220px;
  border-radius: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #832121;
`;

const Modelo = styled.div`
background: #f15555;
  border-radius: 16px;

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);

  width: min(90%, 380px);
  padding: 35px 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #7a1717;
`

const ModeloInterno = styled.form`
    display: felx;
    flex-direction: column;
    gap: 16px;
`

export default function Formulario() {
    const [ conteudo, definirConteudo ] = useState(ConteudoInicial)
 
    function Mudar(evento) {
    const campo = evento.target.name
    const valor = evento.target.value
    definirConteudo({ ...conteudo, [campo]: valor })
    }

    function Enviar(evento) {
      evento.preventDefault()

      console.log("conteudo enviado", conteudo)

      SalvarConteudo(conteudo)
        .then(function(resposta) {
          if (resposta.status === 201)
            alert("Conteúdo enviado com sucesso!")
          else
            console.log(resposta)
        })
        .catch(function(erro) {
          console.log("Erro:", erro.response?.data)
        })
      definirConteudo(ConteudoInicial)
    }

    return <Container>
    <Modelo>
        <ModeloInterno onSubmit={ Enviar }>
            <input value={ conteudo.capa } onChange={ Mudar }
            type="url" name="capa" placeholder="Capa" required style={{ background: '#531717', color: 'white' }}/>
            <input value={ conteudo.trilha } onChange={ Mudar }
            type="url" name="trilha" placeholder="Trilha" required style={{ background: '#531717', color: 'white' }}/>
            <input value={ conteudo.titulo } onChange={ Mudar }
            type="text" name="titulo" placeholder="Título" required style={{ background: '#531717', color: 'white' }}/>
            <input value={ conteudo.descricao } onChange={ Mudar }
            type="text" name="descricao" placeholder="Descrição..." required style={{ background: '#531717', color: 'white' }}/>
            <input value={ conteudo.genero } onChange={ Mudar }
            type="text" name="genero" placeholder="Gênero" required style={{ background: '#531717', color: 'white' }}/>
            <input value={ conteudo.ano } onChange={ Mudar }
            type="number" name="ano" placeholder="Ano (ex.: 2020)" required style={{ background: '#531717', color: 'white' }}/>
            <input value={ conteudo.duracao } onChange={ Mudar }
            type="number" name="duracao"
            placeholder="Duração (ex.: 90min)" required style={{ background: '#531717', color: 'white' }}/>
            <input value={ conteudo.faixa } onChange={ Mudar }
            type="number" name="faixa"
            placeholder="Faixa etária (ex.: +18)" required style={{ background: '#531717', color: 'white' }}/>
            <input type="submit" value="Enviar" style={{ background: '#531717', color: 'white' }} />
        </ModeloInterno>
    </Modelo>
    </Container>
}
