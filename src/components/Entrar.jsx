import styled from "styled-components";
import ValidarEntrada from "../functions/ValidarEntrada";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  min-height: 330px;
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
`;

const Formulario = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 18px;

  text-align: center;
`;

const FormularioTitulo = styled.h2`
  margin: 0 0 10px;

  font-size: 32px;
  font-weight: bold;

  color: #7a1717;
`;

const Campo = styled.input`
  width: 100%;
  box-sizing: border-box;

  padding: 13px 14px;

  border: none;
  border-radius: 6px;

  background: #b94f64;
  color: white;

  font-size: 15px;

  outline: none;

  transition: 0.2s;

  &::placeholder {
    color: #f5dada;
  }

  &:focus {
    background: #a94459;

    box-shadow: 0 0 0 2px rgba(122, 23, 23, 0.4);
  }
`;

const Botao = styled.input`
  width: 100%;

  padding: 13px;

  border: none;
  border-radius: 6px;

  background: #793030;
  color: white;

  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #4f4f4f;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export default function Entrar() {
  const navegar = useNavigate();

  function Validar(evento) {
    evento.preventDefault();

    const email = evento.target.email.value;
    const senha = evento.target.senha.value;

    ValidarEntrada(email, senha)
      .then((resposta) => {
        if (resposta.status === 202) {
          navegar("/explorar");
        }
      })
      .catch((erro) => {
        alert(erro?.mensage ?? "Erro ao entrar");
      });
  }

  return (
    <Container>
      <Modelo>
        <Formulario
          action="/explorar"
          method="GET"
          onSubmit={Validar}
        >
          <FormularioTitulo>
            Entrar
          </FormularioTitulo>

          <Campo
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            required
          />

          <Campo
            type="password"
            name="senha"
            placeholder="Digite sua senha"
            required
          />

          <Botao
            type="submit"
            value="Entrar"
          />
        </Formulario>
      </Modelo>
    </Container>
  );
}
