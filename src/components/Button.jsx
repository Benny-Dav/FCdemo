import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  onClick, 
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false
}) => {
  const baseStyles = "inline-block font-bold px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#FF6F00] text-white hover:bg-[#FF8F00] shadow-md hover:shadow-lg",
    secondary: "bg-white text-[#FF6F00] border-2 border-[#FF6F00] hover:bg-[#FF6F00] hover:text-white",
    outline: "bg-transparent text-[#FF6F00] border-2 border-[#FF6F00] hover:bg-[#FF6F00] hover:text-white"
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonStyles}
    >
      {children}
    </button>
  );
};

export default Button; 