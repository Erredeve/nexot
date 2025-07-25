'use client';

import { useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import type { VideoPath } from '@/constants/assets';

interface OptimizedVideoProps {
  src: VideoPath;
  className?: string;
  overlayClassName?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

export default function OptimizedVideo({
  src,
  className,
  overlayClassName,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Reprodução automática foi bloqueada
        console.log('Autoplay was blocked');
      });
    }
  }, []);

  return (
    <div className={twMerge('relative overflow-hidden', className)}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
