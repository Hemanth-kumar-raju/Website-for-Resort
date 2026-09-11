const experiences = [
  ['01', '♨', 'Wellness', 'Restore body and mind with relaxing spa treatments and tranquil wellness rituals.'],
  ['02', '◌', 'Fine Dining', 'Seasonal menus, local flavours and intimate dining crafted by our culinary team.'],
  ['03', '◇', 'Poolside Days', 'Unwind beside the water with refreshing drinks, sunshine and uninterrupted views.'],
  ['04', '✦', 'Celebrations', 'Weddings, birthdays and private events made extraordinary with beautiful settings.']
];

export default function Experiences() { return <section className="features section" id="experiences"><div className="container">
  <div className="center-heading"><p className="eyebrow dark">THE ART OF STAYING</p><h2>Curated <em>Experiences</em></h2><p>Everything you need for a beautiful escape, all in one place.</p></div>
  <div className="feature-grid">{experiences.map(([num, icon, title, text]) => <article className="feature" key={num}><div className="feature-number">{num}</div><div className="feature-icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>)}</div>
</div></section>; }
