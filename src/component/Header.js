import React from "react";
import PropTypes from "prop-types";
const Header = porps => {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-3">
        <a className="brand-logo center">{porps.titulo}</a>
      </div>
    </nav>
  );
};
Header.propTypes = {
  titulo: PropTypes.string.isRequired
};
export default Header;
