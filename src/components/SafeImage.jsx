import React, { useState } from 'react';

export default function SafeImage({ src, alt, className, fallbackIcon: FallbackIcon }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`${className} flex items-center justify-center bg-slate-800 border border-slate-700 text-indigo-400`}>
        <FallbackIcon className="w-6 h-6" />
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      onError={() => setError(true)} 
    />
  );
}
