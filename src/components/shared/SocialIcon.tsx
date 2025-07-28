'use client';

import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface SocialIconProps {
  href: string;
  icon: React.ElementType;
  label: string;
  className?: string;
}

export default function SocialIcon({
  href,
  icon: Icon,
  label,
  className,
}: SocialIconProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={twMerge(
        'flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors',
        className
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={label}
    >
      <Icon className="w-5 h-5" />
      <span className="sr-only">{label}</span>
    </motion.a>
  );
}
