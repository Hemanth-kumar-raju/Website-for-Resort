export default function About() {
  return <section className="intro section" id="about"><div className="container intro-grid">
    <div className="intro-images">
      <img className="image-main" src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=85" alt="Luxury resort exterior" />
      <img className="image-small" src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=85" alt="Resort pool" />
      <div className="experience-badge"><strong>15+</strong><span>Years of<br />Hospitality</span></div>
    </div>
    <div className="intro-copy">
      <p className="eyebrow dark">THE AURELIA EXPERIENCE</p>
      <h2>A place to slow down,<br /><em>breathe & reconnect.</em></h2>
      <p>Set among lush landscapes and serene surroundings, Aurelia Resort brings together refined comfort and the beauty of nature.</p>
      <p>From thoughtfully designed suites to curated dining and private experiences, every detail is created to make your stay effortless and memorable.</p>
      <a href="#rooms" className="text-link">Discover Our Rooms <span>→</span></a>
    </div>
  </div></section>;
}
