import React from "react";
import '../css/Testimonio.css';

// Adaptamos el proyecto para hacer uso de cmponentes de clase en lugar de componentes funcionales
class Testimonio extends React.Component {
    render() {
        return (
            <div className="contenedor-principal">
                <img className="imagen-testimonio"
                src={require(`../imagenes/testimonio-${this.props.imagen}.jpg`)}
                alt={`Foto de ${this.props.nombre}`} />
                <div className="contenedor-texto-testimonio">
                    <p className="nombre-testimonio"><strong>{this.props.nombre}</strong> en {this.props.pais}</p>
                    <p className="cargo-testimonio">{this.props.cargo} en {this.props.empresa}</p>
                    <p className="texto-testimonio">"{this.props.testimonio}"</p>
                </div>
            </div>
        )

    }
}


export default Testimonio;
