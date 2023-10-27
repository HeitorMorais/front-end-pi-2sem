import Categoria from "./Categoria"

export function Listagem_Categorias() {
    
     return (
        <>
        <div className="listagem-de-categoria">
            <div className="listagem-text">
            <h1>Categorias</h1>
            <a href="#">Adicionar</a>
            </div>
            <div className="container-categorias">
            <Categoria></Categoria>
            <Categoria></Categoria>
            <Categoria></Categoria>
            <Categoria></Categoria>
            <Categoria></Categoria>
            <Categoria></Categoria>
            <Categoria></Categoria>
            <Categoria></Categoria>
            <Categoria></Categoria>
            <Categoria></Categoria>
            <Categoria></Categoria>
            <Categoria></Categoria>
            <Categoria></Categoria>
        </div>
            
        </div>
        
        </>

     )
}