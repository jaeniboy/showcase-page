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
        border-teal-500
        text-teal-500
        hover:border-teal-600 hover:text-teal-600
        focus:outline-none focus:ring-2 focus:ring-opacity-50
        cursor-pointer
      `}
    >
      {children}
    </button>
  );
};

export default Button;
