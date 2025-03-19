import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white shadow-md flex items-center px-4 z-10">
      <Link to="/"><img src="logo_2.svg" alt="Logo" className="h-8 w-auto" /></Link>
    </header>
  );
};

export default Header;