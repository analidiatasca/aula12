import axios from "axios";

export default function ObterConteudos() {
    return axios({
        method: "GET",
        url: "https://localhost:4000/conteudos",
    }) 
}