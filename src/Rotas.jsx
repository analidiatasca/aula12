<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Explorar from "./pages/Explorar"
import Video from "./pages/Video"
import Painel from "./pages/Painel"


export default function Rotas() {
    return <BrowserRouter>
    <Routes> 
        <Route index path="/" element={ <Inicio/> } />
        <Route path="/explorar" element={ <Explorar/> } />
        <Route path="/video/:codigo" element={ <Video/> } />
        <Route path="/painel" element={ <Painel/> } />
    </Routes>

    </BrowserRouter>
}


=======
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Explorar from "./pages/Explorar"
import Video from "./pages/Video"
import Painel from "./pages/Painel"


export default function Rotas() {
    return <BrowserRouter>
    <Routes> 
        <Route index path="/" element={ <Inicio/> } />
        <Route path="/explorar" element={ <Explorar/> } />
        <Route path="/video/:codigo" element={ <Video/> } />
        <Route path="/painel" element={ <Painel/> } />
    </Routes>

    </BrowserRouter>
}


>>>>>>> 8e753d43b874ed5e1b8a3773b49268590151be74
