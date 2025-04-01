'use client';

import { RevealMail } from './revealMail';
import ImprovedLink from './improvedLink';
import { PixelArtGame } from './PixelArtGame';

export default function Footer() {
  const footerItems = [
    {
      label: 'twitter',
      href: 'https://twitter.com/wtfkedar',
    },
    {
      label: 'github',
      href: 'https://github.com/kedar49',
    },
    {
      label: 'source code',
      href: 'https://github.com/kedar49/me',
    },
  ];

  return (
    <footer className="mb-16 font-departure-mono">
      <div className="mt-12 pt-6 border-t border-border"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-sm font-semibold mb-3">Connect</h3>
          <ul className="flex flex-col space-y-2">
            {footerItems.map(({ label, href }) => (
              <li key={label} className="group">
                <ImprovedLink href={href}>
                  <span className="inline-block w-6 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  {label}
                </ImprovedLink>
              </li>
            ))}
            <li className="group">
              <span className="inline-block w-6 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              <RevealMail placeholder="mail" isLink={true} />
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-3">Pixel Art</h3>
          <div className="mb-6">
            <PixelArtGame />
          </div>
        </div>
      </div>
      <div className="flex flex-row border-t border-border pt-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kedar Sathe
          <br />
          <span className="text-xs">built with love, sweat and llms.</span>
        </p>
      </div>
    </footer>
  );
}
