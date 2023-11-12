import React from 'react';

const Button = ({ type, className, children }) => {
  // Use 'type' and 'className' props dynamically
  return (
    <button
      type={type}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
