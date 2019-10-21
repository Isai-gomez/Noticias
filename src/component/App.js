import React, { Component } from "react";
import Header from "./Header";
import { ReplaySubject } from "rxjs";

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
  consutaNoticia = () => {
    let url =
      "https://newsapi.org/v2/top-headlines?country=mx&category=general&apiKey=127b7ec038b4407b954a1f5606cf9f70";
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
      <div className="App">
        <Header titulo={"Noticias"}></Header>
      </div>
    );
  }
}
export default App;
