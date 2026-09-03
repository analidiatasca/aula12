<<<<<<< HEAD
import Principal from "../components/Principal"
import Formulario from "../components/Formulario"
import fundo from "../assets/fundo.jpg"
 
export default function Painel() {
  return <Principal fundo={ fundo } tamanho="480px">
    <Formulario/>
  </Principal>
}
=======
import Principal from "../components/Principal"
import fundo from "../assets/fundo.jpg"



export default function Painel() {
    return <Principal fundo={fundo} tamanho="480px">
    {/* ... */}
    </Principal>
}
    
>>>>>>> 8e753d43b874ed5e1b8a3773b49268590151be74
