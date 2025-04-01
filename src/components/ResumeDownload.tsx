'use client';

import { useState } from 'react';

export function ResumeDownload() {
  const [isHovering, setIsHovering] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    setIsDownloading(true);
    setError(null);
    
    try {
      const response = await fetch('/resume.pdf');
      if (!response.ok) throw new Error('Failed to download resume');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError('Failed to download resume. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="my-8 p-6 border border-muted rounded-lg text-center animate-fade-in">
      <p className="mb-4">You can download my full resume using the link below:</p>
      <button
        onClick={handleDownload}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        disabled={isDownloading}
        aria-label="Download Resume"
        aria-busy={isDownloading}
        className={`relative inline-block px-6 py-3 bg-primary/10 text-primary rounded-md transition-all duration-300 overflow-hidden ${isDownloading ? 'cursor-wait' : 'hover:bg-primary/20'}`}
      >
        <span className={`transition-transform duration-300 ${isHovering && !isDownloading ? 'transform -translate-y-10 opacity-0' : 'transform translate-y-0 opacity-100'}`}>
          Download Resume (PDF)
        </span>
        {isDownloading ? (
          <span className="absolute inset-0 flex items-center justify-center animate-pulse-slow">
            Downloading...
          </span>
        ) : (
          <span className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${isHovering ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Get Resume
          </span>
        )}
      </button>
      {error && (
        <p className="mt-4 text-red-500" role="alert">{error}</p>
      )}
    </div>
  );
}