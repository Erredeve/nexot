'use client';

import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  animate?: boolean;
  bgClassName?: string;
}

export default function Section({
  id,
  className,
  children,
  animate = true,
  bgClassName = 'bg-white',
}: SectionProps) {
  return (
    <section id={id} className={twMerge('relative py-20 overflow-hidden', bgClassName)}>
      {animate ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={twMerge('container mx-auto px-4', className)}
        >
          {children}
        </motion.div>
      ) : (
        <div className={twMerge('container mx-auto px-4', className)}>
          {children}
        </div>
      )}
    </section>
  );
}
