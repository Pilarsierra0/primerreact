import Contador from "./Contador";


const ContenedorCarrito = () => {
    return(
        <div className="bg-warning rounded-circle p-3 position-relative">
            <ContenedorCarrito/>
            <Contador count={10}/>
        </div>
    )
}
export default ContenedorCarrito;