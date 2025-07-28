'use client';

import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ElementType;
}

const variants = {
  primary: 'bg-orange-500 hover:bg-orange-600 text-white',
  secondary: 'bg-white text-blue-900 hover:bg-blue-50',
  outline: 'bg-transparent border-2 border-white text-white hover:bg-white/10',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3',
  lg: 'px-8 py-4 text-lg',
};

export default function AnimatedButton({
  children,
  className,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  icon: Icon,
}: AnimatedButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={twMerge(
        'flex items-center justify-center font-semibold rounded-lg shadow-lg transition-colors',
        variants[variant],
        sizes[size],
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {Icon && <Icon className={twMerge('w-5 h-5', children ? 'mr-2' : '')} />}
      {children}
    </motion.button>
  );
}
