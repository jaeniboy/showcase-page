import React from 'react';

const Button = ({ backgroundColor, fontColor, children, onClick }) => {
  return (
    <button
      className={`
        px-4 py-2
        ${backgroundColor}
        ${fontColor}
        rounded
        border-1
        border-color-primary
        hover:bg-primary hover:text-bright
        focus:outline-none focus:ring-2 focus:ring-opacity-50
        cursor-pointer
      `}
    >
      {children}
    </button>
  );
};

export default Button;
