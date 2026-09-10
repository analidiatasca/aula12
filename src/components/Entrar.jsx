import styled from "styled-components"

const Modelo = styled.div`
    background: #fff;
    border-radius: 10px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
    color: #222;
    padding: 32px;
    display: flex;
 `

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const FormularioTitulo = styled.div`
    font-size: 32px;
    font-weight: bold;
    text-align: center;
`

export default function Entrar() {
    return (
        <Modelo>
        <Formulario action="/explorar" method="GET">
        <FormularioTitulo> Entrar </FormularioTitulo>
        <input type="text" placeholder="Digite seu e-mail" required />
        <input type="password" placeholder="******" required />
        <input type="submit" value="Entrar" />
        </Formulario>
        </Modelo>
            
)}