import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white shadow-md flex items-center px-4 z-10">
      <img src="logoipsum.svg" alt="Logo" className="h-10 w-auto" />
    </header>
  );
};

export default Header;