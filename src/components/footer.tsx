'use client';

import { Twitter, Github, Code, Mail } from 'lucide-react';

import ImprovedLink from './improvedLink';
import { PixelArtGame } from './PixelArtGame';
import { RevealMail } from './revealMail';

export default function Footer() {
  const footerItems = [
    {
      label: 'twitter',
      href: 'https://twitter.com/wtfkedar',
      icon: Twitter,
    },
    {
      label: 'github',
      href: 'https://github.com/kedar49',
      icon: Github,
    },
    {
      label: 'source code',
      href: 'https://github.com/kedar49/me',
      icon: Code,
    },
  ];

  return (
    <footer className="mb-16 font-departure-mono">
      <div className="mt-12 pt-6 border-t border-border"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-sm font-semibold mb-3">Connect</h3>
          <ul className="flex flex-col space-y-2">
            {footerItems.map(({ label, href, icon: Icon }) => (
              <li key={label} className="group">
                <ImprovedLink href={href}>
                  <div className="flex items-center space-x-2">
                    <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                    <span>{label}</span>
                  </div>
                </ImprovedLink>
              </li>
            ))}
            <li className="group">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                <RevealMail placeholder="mail" isLink={true} />
              </div>
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
