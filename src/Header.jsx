import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/Unidirectional" style={{ paddingRight: 20 }}>
        Unidirectional Example
      </Link>
      <Link to="/UnidirectionalHooks" style={{ paddingRight: 20 }}>
        Unidirectional Hooks Example
      </Link>
      <Link to="/API" style={{ paddingRight: 20 }}>
        API Context Example
      </Link>
      <Link to="/Redux" style={{ paddingRight: 20 }}>
        Redux Example
      </Link>
      <Link to="/UseReducer" >
        UseReducer Example
      </Link>
    </div>
  );
};

export default Header;
