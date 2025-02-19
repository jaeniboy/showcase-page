import React from 'react';

const Button = ({ backgroundColor, fontColor, children, onClick }) => {
  return (
    <button
      className={`
        px-4 py-2
        ${backgroundColor}
        ${fontColor}
        rounded-full
        transition duration-300 ease-in-out
        hover:opacity-80 hover:shadow-md
        focus:outline-none focus:ring-2 focus:ring-opacity-50
        cursor-pointer
      `}
    >
      {children}
    </button>
  );
};

export default Button;
