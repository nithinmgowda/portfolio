import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'white' | 'black';
  children: React.ReactNode;
}

export function Button({ variant = 'white', children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`
        px-6 py-3 rounded-lg font-medium transition-all duration-300
        ${variant === 'white' 
          ? 'bg-white/10 text-white hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
          : 'bg-black/10 text-black hover:bg-black/20 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]'}
        backdrop-blur-sm
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}