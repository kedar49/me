'use client';

import { useState } from 'react';

export function RevealMail({ placeholder, isLink }: { placeholder: string; isLink: boolean }) {
  const reversedValue = ['moc', ']TOD[', 'liamg', ']TA[', 'radekftw'];
  const [revealed, setRevealed] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
  };

  if (!revealed) {
    return (
      <span
        role="button"
        tabIndex={0}
        onClick={handleReveal}
        onKeyDown={(e) => e.key === 'Enter' && handleReveal()}
        className={`transition-all hover:text-primary cursor-pointer relative ${isLink ? 'custom-link' : ''}`}
      >
        {placeholder} <span className="text-xs">(click to reveal)</span>
      </span>
    );
  }

  const originalValue = Array.from(reversedValue.join('')).reverse().join('');
  return (
    <span className="animate-in fade-in duration-300 text-primary">
      {originalValue}
    </span>
  );
}
