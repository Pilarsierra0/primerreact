const SeccionesItem = ({isActive = false, name}) => {
    return(
        <a 
        className= {'nav-link ${isActive ? "active fw-semibold" : null}'} aria-current ='page' href="#">Home</a>
      >  
        {name}
    )
}
export default SeccionesItem; 