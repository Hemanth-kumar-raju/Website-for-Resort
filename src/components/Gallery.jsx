const images = [
  ['tall', 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=90', 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=85', 'Resort'],
  ['', 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=90', 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=85', 'Pool'],
  ['', 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1400&q=90', 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=85', 'Tropical resort'],
  ['wide', 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=90', 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85', 'Luxury interior'],
  ['', 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=90', 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=85', 'Resort building']
];

export default function Gallery({ onOpen }) { return <section className="gallery section" id="gallery"><div className="container">
  <div className="section-heading gallery-heading"><div><p className="eyebrow dark">VISUAL JOURNEY</p><h2>A Glimpse of <em>Aurelia</em></h2></div><p className="heading-note dark-note">Tap an image to view it larger.</p></div>
  <div className="gallery-grid">{images.map(([size, full, thumb, alt]) => <button key={full} className={`gallery-item ${size}`} onClick={() => onOpen({ full, alt })} aria-label={`View ${alt}`}><img src={thumb} alt={alt} /></button>)}</div>
</div></section>; }
