import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

import { loadGoogleFont } from '@/lib/utils';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || "kedar's site";
  const subtitle = searchParams.get('subtitle') || '';
  const domain = 'wtfkedar.vercel.app';

  // Dark theme colors
  const backgroundColor = 'hsl(220, 20%, 10%)'; // --background
  const textColor = 'hsl(60, 15%, 90%)'; // --foreground
  const accentColor = 'hsl(32, 85%, 50%)'; // --accent (from dark theme)

  return new ImageResponse(
    (
      <div
        style={{
          background: `linear-gradient(135deg, ${backgroundColor} 0%, hsl(220, 25%, 15%) 100%)`,
          width: '100%',
          height: '100%',
          display: 'flex',
          padding: '48px 32px',
          position: 'relative',
          border: `1px solid ${accentColor}30`,
          boxShadow: `0 0 40px ${accentColor}20 inset`,
        }}
      >
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          width: '60px',
          height: '60px',
          borderLeft: `2px solid ${accentColor}50`,
          borderTop: `2px solid ${accentColor}50`,
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRight: `2px solid ${accentColor}50`,
          borderBottom: `2px solid ${accentColor}50`,
        }} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            gap: '24px',
            zIndex: 10,
          }}
        >
          <h2
            style={{
              fontSize: '84px',
              fontWeight: 'bold',
              color: textColor,
              lineHeight: 1.2,
              textAlign: 'center',
              fontFamily: 'Geist Mono',
              textShadow: `0 2px 10px rgba(0,0,0,0.3)`,
              background: `linear-gradient(135deg, ${textColor} 0%, ${accentColor} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <span
              style={{
                fontSize: '36px',
                color: textColor,
                opacity: 0.9,
                textAlign: 'center',
                fontFamily: 'Geist Mono',
                padding: '8px 24px',
                border: `1px solid ${accentColor}40`,
                borderRadius: '4px',
                background: `${backgroundColor}80`,
              }}
            >
              {subtitle}
            </span>
          )}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '64px',
            right: '48px',
            fontSize: '24px',
            color: accentColor,
            opacity: 0.9,
            fontFamily: 'Geist Mono',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: accentColor }} />
          {domain}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Geist Mono',
          data: await loadGoogleFont('Geist+Mono', title),
          style: 'normal',
        },
        {
          name: 'Geist Mono',
          data: await loadGoogleFont('Geist+Mono', subtitle),
          style: 'normal',
        },
        {
          name: 'Geist Mono',
          data: await loadGoogleFont('Geist+Mono', domain),
          style: 'normal',
        },
      ],
    }
  );
}
