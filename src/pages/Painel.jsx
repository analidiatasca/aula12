import Principal from "../components/Principal"
import Formulario from "../components/Formulario"
import fundo from "../assets/fundo.jpg"
 
export default function Painel() {
  return <Principal fundo={ fundo } tamanho="480px">
    <Formulario/>
  </Principal>
}
