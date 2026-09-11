const testimonials = [
  ['Ananya R.', 'A beautiful property with exceptional hospitality. The perfect place to disconnect from the city and simply relax.'],
  ['Rahul & Meera', 'The rooms were stunning, the food was wonderful and the staff made our anniversary incredibly special.'],
  ['Arjun K.', 'Every corner felt thoughtfully designed. We left refreshed and are already planning our next visit.']
];

export default function Testimonials() { return <section className="testimonials section"><div className="container"><div className="center-heading"><p className="eyebrow dark">GUEST STORIES</p><h2>Moments Worth <em>Remembering</em></h2></div><div className="testimonial-grid">{testimonials.map(([name, text]) => <article className="testimonial" key={name}><div className="stars">★★★★★</div><p>“{text}”</p><strong>— {name}</strong></article>)}</div></div></section>; }
