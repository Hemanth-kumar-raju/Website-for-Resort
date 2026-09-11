import { useEffect, useState } from 'react';

const slides = [
  'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2000&q=90',
  'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2000&q=90',
  'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=2000&q=90',
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=90',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=90'
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-slider">
        {slides.map((image, index) => (
          <div key={image} className={`hero-slide ${index === current ? 'active' : ''}`} style={{ backgroundImage: `url('${image}')` }} />
        ))}
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="eyebrow">WELCOME TO AURELIA</p>
        <h1>Where Luxury<br /><em>Meets Nature</em></h1>
        <p className="hero-text">An intimate escape designed for unforgettable stays, peaceful mornings and extraordinary moments.</p>
        <div className="hero-actions">
          <a href="#booking" className="btn btn-gold">Reserve Your Stay</a>
          <a href="#about" className="btn btn-outline">Explore Resort</a>
        </div>
      </div>
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button key={index} className={`hero-dot ${index === current ? 'active' : ''}`} aria-label={`Go to slide ${index + 1}`} onClick={() => setCurrent(index)} />
        ))}
      </div>
      <a href="#about" className="scroll-down">SCROLL <span>↓</span></a>
    </section>
  );
}
