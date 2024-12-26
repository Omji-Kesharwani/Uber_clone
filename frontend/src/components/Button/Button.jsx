import React from 'react';
import './Button.scss';

const Button = ({ type = 'button', className = '', children, onClick, isLoading = false }) => {
  return (
    <button
      type={type}
      className={`btn ${className} ${isLoading ? 'sending' : ''}`}
      onClick={onClick}
      disabled={isLoading}
    >
      {children}
    </button>
  );
};

export default Button;
