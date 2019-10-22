import React from "react";
const Noticia = props => {
  const { urlToImage, url, title, description, source } = props.noticia;

  return (
    <div className="row">
      <div className="card panel">
        <div className="card-image">
          <img className="responsive-img circle" src={urlToImage} alt={title} />
          <span className="card-title">{source.name}</span>
        </div>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a
            href={url}
            target="_blank"
            className="waves-effects waves-light btn"
          >
            Leer
          </a>
        </div>
      </div>
    </div>
  );
};

export default Noticia;
