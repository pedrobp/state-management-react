import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Link to="/TopBottom" style={{ paddingRight: 20 }}>
        Top-Bottom Example
      </Link>
      <Link to="/TopBottomHooks" style={{ paddingRight: 20 }}>
        Top-Bottom Hooks Example
      </Link>
      <Link to="/API" style={{ paddingRight: 20 }}>
        Context API Example
      </Link>
      <Link to="/Redux" style={{ paddingRight: 20 }}>
        Redux Example
      </Link>
      <Link to="/UseReducer" >
        UseReducer Example
      </Link>
    </>
  );
};

export default Header;
