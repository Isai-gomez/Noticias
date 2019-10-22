import React from "react";
import PropTypes from "prop-types";
const Noticia = props => {
  const { urlToImage, url, title, description, source } = props.noticia;

  return (
    <div className="col s12 m12 l6">
      <div className="card panel ">
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

Noticia.propTypes = {
  noticia: PropTypes.shape({
    urlToImage: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    source: PropTypes.object.isRequired
  })
};

export default Noticia;
