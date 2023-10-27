import { Barra_Lateral } from "../components/Barra_Lateral.jsx"
import { Listagem_Categorias } from "../components/Listagem_Categorias.jsx"
import "../assets/css/dashboard.css"

export function Dashboard() {
    return (
    <>
    <div className="container-dashboard">
        <div className="container-barra">
            <Barra_Lateral />
        </div>
    <Listagem_Categorias />
    </div>
    
    </>
    )
    
    
}