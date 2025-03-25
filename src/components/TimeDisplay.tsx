'use client';

import { useState, useEffect } from 'react';

import timeDict from '../../public/data/time_dict.json';

export function TimeDisplay() {
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    setMounted(true);
    setCurrentTime(new Date());

    function scheduleNextMinute() {
      const now = new Date();
      const msToNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
      setTimeout(() => {
        setCurrentTime(new Date());
        scheduleNextMinute();
      }, msToNextMinute);
    }

    scheduleNextMinute();
  }, []);

  if (!mounted || !currentTime) return null;

  const day = currentTime.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase();
  const date = currentTime
    .toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    .replace(',', '')
    .toLowerCase();
  const hour = String(currentTime.getHours()).padStart(2, '0');
  const minute = String(currentTime.getMinutes()).padStart(2, '0');
  const poemKey = `${hour}:${minute}`;
  const timePoem = timeDict[poemKey]?.toLowerCase() || 'have a good day!';

  return (
    <div className="pb-8 w-full font-departure-mono">
      <div className="text-xs flex items-center gap-2">
        <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse"></span>
        <span>{day} {date}</span>
      </div>
      <div className="text-xs mt-2 p-3 border border-border rounded-md bg-card/50 backdrop-blur-sm transition-all hover:border-primary">
        {timePoem.split('\n').map((line, i) => (
          <p key={i} className="animate-in fade-in slide-in-from-bottom-1 duration-300" style={{ animationDelay: `${i * 100}ms` }}>{line}</p>
        ))}
      </div>
    </div>
  );
}
