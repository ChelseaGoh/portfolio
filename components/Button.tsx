import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: boolean;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  target?: string;
  rel?: string;
  // Allow framer-motion props if needed, but for now keep it simple or use 'any' to bypass strict motion types if causing issues
  // or just extend HTMLMotionProps<"button"> and add the extra anchor props manually
}

const Button: React.FC<ButtonProps & HTMLMotionProps<"button"> & HTMLMotionProps<"a">> = ({ 
  children, 
  variant = 'primary', 
  icon = false, 
  className = '',
  href,
  size = 'md',
  target,
  rel,
  ...props 
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  };

  const baseStyles = `inline-flex items-center justify-center ${sizeClasses[size]} rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2`;
  
  const variants = {
    primary: "bg-stone-900 text-white hover:bg-stone-800 focus:ring-stone-900",
    secondary: "bg-accent-teal text-white hover:bg-teal-900 focus:ring-accent-teal",
    outline: "border-2 border-stone-900 text-stone-900 hover:bg-stone-100 focus:ring-stone-500"
  };

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props as any}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props as any}
    >
      {content}
    </motion.button>
  );
};

export default Button;