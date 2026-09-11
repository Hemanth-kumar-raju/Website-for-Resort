import { useEffect, useState } from 'react';

const links = [
  ['Home', '#home'], ['About', '#about'], ['Rooms', '#rooms'],
  ['Experiences', '#experiences'], ['Gallery', '#gallery'], ['Contact', '#contact']
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <a href="#home" className="logo" onClick={closeMenu}>AURELIA <span>RESORT</span></a>
      <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(v => !v)}>
        <span></span><span></span><span></span>
      </button>
      <nav className={`nav ${open ? 'open' : ''}`}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
        <a href="#booking" className="nav-book" onClick={closeMenu}>Book Now</a>
      </nav>
    </header>
  );
}
