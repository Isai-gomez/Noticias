import React from "react";
const Noticia = props => {
  const { urlToImage, url, title, description, source } = props.noticia;
  console.log(urlToImage);
  return (
    <div>
      <p>Desde noticia</p>
    </div>
  );
};

export default Noticia;
