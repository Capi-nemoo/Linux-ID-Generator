'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/linux-id', label: 'Linux-ID' },
  { href: '/art', label: 'Art' },
  { href: '/media', label: 'Media' },
  { href: '/blog', label: 'Blog' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
  { href: '/manifestos', label: 'Manifestos' },
  { href: '/about', label: 'About' },
];

export default function TopBar() {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isBlinking, setIsBlinking] = useState(true);
  
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  
  // Find current page index
  useEffect(() => {
    const currentIndex = navItems.findIndex(item => item.href === pathname);
    if (currentIndex !== -1) {
      setSelectedIndex(currentIndex);
    }
  }, [pathname]);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'm') {
        e.preventDefault();
        toggleNav();
        return;
      }
      
      if (!isNavOpen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          setSelectedIndex(prev => prev > 0 ? prev - 1 : navItems.length - 1);
          break;
        case 'ArrowRight':
          e.preventDefault();
          setSelectedIndex(prev => prev < navItems.length - 1 ? prev + 1 : 0);
          break;
        case 'Enter':
          e.preventDefault();
          window.location.href = navItems[selectedIndex].href;
          break;
        case 'Escape':
          e.preventDefault();
          setIsNavOpen(false);
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isNavOpen, selectedIndex]);
  
  // Blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);
  
  // Get current page name from pathname
  const getCurrentPageName = () => {
    if (pathname === '/') return 'home';
    const segments = pathname.split('/').filter(Boolean);
    return segments[0] || 'main';
  };

  return (
    <>
      <div className="terminal-header">
        <div className="prompt-line">
          <span className="segment segment-path">
            <span className="segment-content"> ~/dev/website/{getCurrentPageName()}</span>
          </span>
          <span className="segment segment-git">
            <span className="segment-content"> ⎇ main </span>
          </span>
          <span className="segment segment-status">
            <span className="segment-content"> ✓ </span>
          </span>
        </div>
      </div>
      <nav className="terminal-nav">
        <div className="nav-header" onClick={toggleNav}>
          <span className="nav-toggle">{isNavOpen ? '▼' : '▶'}</span>
          <span className="nav-title">[ MENU ]</span>
          <span className="nav-status">{isNavOpen ? 'OPEN' : 'CLOSED'}</span>
        </div>
        {isNavOpen && (
          <div className="nav-content">
            <div className="tui-border-top">┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐</div>
            <div className="nav-row">
              <span className="tui-prefix">│</span>
              <ul className="nav-links-horizontal">
                {navItems.map(({ href, label }, index) => (
                  <li key={href} className={`nav-item ${index === selectedIndex ? 'selected' : ''}`}>
                    <Link
                      href={href}
                      className={`nav-segment ${pathname === href ? 'active' : ''} ${index === selectedIndex ? 'selected' : ''}`}
                      prefetch={false}
                    >
                      <span className={`tui-selector ${index === selectedIndex && isBlinking ? 'blink' : ''}`}>
                        {index === selectedIndex ? '►' : ' '}
                      </span>
                      <span className="tui-number">{(index + 1).toString().padStart(2, '0')}</span>
                      <span className="tui-separator">.</span>
                      <span className="segment-text">{label}</span>
                    </Link>
                    {index < navItems.length - 1 && <span className="nav-divider">│</span>}
                  </li>
                ))}
              </ul>
              <span className="tui-suffix">│</span>
            </div>
            <div className="tui-border-bottom">└─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘</div>
            <div className="tui-help">│ Use ←→ keys to navigate, [Enter] to select, [M] to toggle, [Esc] to close │</div>
          </div>
        )}
      </nav>
    </>
  );
}
