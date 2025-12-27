import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  isLoading?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  isLoading, 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-display font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider";
  
  const variants = {
    primary: "bg-cyberLime text-midnight hover:bg-white hover:shadow-[0_0_20px_rgba(204,255,0,0.4)] border border-transparent",
    secondary: "bg-surface text-white border border-borderDark hover:border-cyberLime hover:text-cyberLime",
    outline: "bg-transparent text-white border border-white/20 hover:border-cyberLime hover:text-cyberLime",
    ghost: "bg-transparent text-gray-400 hover:text-white",
  };

  const sizes = {
    sm: "h-9 px-4 text-xs",
    md: "h-12 px-6 text-sm",
    lg: "h-14 px-8 text-base",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {children}
    </button>
  );
};

export default Button;