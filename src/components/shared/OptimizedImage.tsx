'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import type { ImagePath } from '@/constants/assets';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: ImagePath;
  overlayClassName?: string;
}

export default function OptimizedImage({
  src,
  alt,
  className,
  overlayClassName,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={twMerge('relative overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        className={twMerge(
          'duration-700 ease-in-out',
          isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0'
        )}
        onLoadingComplete={() => setIsLoading(false)}
        {...props}
      />
      {overlayClassName && (
        <div
          className={twMerge(
            'absolute inset-0 bg-gradient-to-t from-black/50 to-transparent',
            overlayClassName
          )}
        />
      )}
    </div>
  );
}
