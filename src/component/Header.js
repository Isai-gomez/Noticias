import React from "react";
const Header = porps => {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-3">
        <a className="brand-logo center">{porps.titulo}</a>
      </div>
    </nav>
  );
};

export default Header;
