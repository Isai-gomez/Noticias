import React, { Component } from "react";
import Header from "./Header";
import Noticias from "./Noticias";
import Formulario from "./Formulario";

class App extends Component {
  constructor() {
    super();
    this.state = {
      noticias: []
    };
  }
  componentDidMount() {
    this.consutaNoticia();
  }
  consutaNoticia = (categoria = "general") => {
    console.log(categoria);
    let url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=127b7ec038b4407b954a1f5606cf9f70`;
    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(noticias => {
        this.setState({
          noticias: noticias.articles
        });
      });
  };
  render() {
    return (
      <div className="contenedor-app">
        <Header titulo={"Noticias"}></Header>
        <div className="container white contenedor-noticias">
          <Formulario categoria={this.consutaNoticia}></Formulario>
          <Noticias noticias={this.state.noticias}></Noticias>
        </div>
      </div>
    );
  }
}
export default App;
