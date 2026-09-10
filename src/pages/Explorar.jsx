import Navegacao from "../components/Navegacao"
import Destaque from "../components/Destaque"
import fundo from "../assets/fundo.jpg"
import Sessao from "../components/Sessao"
import ObterConteudos from "../functions/ObterConteudos"
import ObterGeneros from "../functions/ObterGeneros"
import { useEffect, useState } from "react"

export default function Explorar() {
    const [conteudos, setConteudos] = useState([])
    const [generos, setGeneros] = useState([])
    
    useEffect(function() {
        ObterConteudos()
        .then(function(resposta) {
           if (resposta.status === 200) 
            setConteudos(resposta.data)
            else 
                console.log(resposta)
        })
        .catch(function(erro) {
          console.log(erro)
        })
        ObterGeneros()
        .then(function(resposta) {
            if (resposta.status === 200)
                setGeneros(resposta.data)
            else if (resposta.status === 404)
                console.log("Não há gêneros cadastrados")
            else if (resposta.status === 500)
                console.log("Erro no servidor")
            else
                console.log(resposta)
        })
        .catch(function(erro) {
            console.log(erro)
        })
    }, [])

    return (
    <Destaque fundo= {fundo}>
        <Navegacao/>
        { generos.length > 0 && 
        generos.map(function(genero, indice) {
          return <Sessao>
          key={ indice }
          genero={ genero }
          conteudo={ conteudos }
          </Sessao>
        })
        }
    </Destaque>
    )
}




























