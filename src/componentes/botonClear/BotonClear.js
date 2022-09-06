import './style.css';

const BotonClear = ({children, manejarClear}) => {
    return (
        <div 
            className="botonClear"
            onClick={manejarClear}>
            {children}
        </div>
    )
};

export default BotonClear;