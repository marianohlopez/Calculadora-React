import './style.css'

const Boton = ({children, manejarClick}) => {

    const esOperador = (valor) => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return (
        <div 
            className={`botonContenedor ${esOperador(children) ? 'operador' : ''} `.trimEnd()}
            onClick={() => manejarClick(children)}>
            {children}
        </div>
    )
}

export default Boton;