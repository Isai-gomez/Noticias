import React, { Component } from "react";
import PropTypes from "prop-types";
class Formulario extends Component {
  constructor() {
    super();
    this.categoriaRef = React.createRef();
  }
  cambiarCategoria = e => {
    e.preventDefault();

    this.props.categoria(this.categoriaRef.current.value);
  };
  render() {
    return (
      <div className="buscador row">
        <div className="col s12 m8 offset-m2">
          <form onSubmit={this.cambiarCategoria}>
            <h2>Noticias por categorias</h2>
            <div className="input-field col s12 m8">
              <select ref={this.categoriaRef}>
                <option value="general" defaultValue>
                  General
                </option>
                <option value="entertainment">Entretenimiento</option>
                <option value="health">Salud</option>
                <option value="science">Ciencia</option>
                <option value="sports">Deporte</option>
                <option value="technology">Tecnología</option>
              </select>
            </div>
            <div className="input-field col s12 m4 enviar">
              <input
                type="submit"
                className="btn amber darken-2"
                value="Buscar"
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
Formulario.propTypes = {
  categoria: PropTypes.func.isRequired
};

export default Formulario;
