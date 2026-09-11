const rooms = [
  { name: 'Deluxe Retreat', price: '₹8,500', image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=900&q=85', alt: 'Deluxe room', text: 'A peaceful room with elegant interiors, a king-size bed and garden views.', items: ['King Bed', 'Garden View', '2 Guests'] },
  { name: 'Signature Suite', price: '₹12,500', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=85', alt: 'Luxury suite', text: 'A spacious sanctuary featuring a private balcony, lounge area and scenic views.', items: ['King Bed', 'Private Balcony', '3 Guests'], featured: true },
  { name: 'Private Villa', price: '₹18,500', image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=85', alt: 'Private villa', text: 'Your own secluded escape with generous living space and a private outdoor area.', items: ['King Bed', 'Private Garden', '4 Guests'] }
];

export default function Rooms() {
  return <section className="dark-section section" id="rooms"><div className="container">
    <div className="section-heading"><div><p className="eyebrow">STAY WITH US</p><h2>Rooms & <em>Suites</em></h2></div><p className="heading-note">Designed with natural textures, warm light and everything you need to feel at home.</p></div>
    <div className="room-grid">{rooms.map(room => <article className={`room-card ${room.featured ? 'featured-room' : ''}`} key={room.name}>
      <div className="room-image"><img src={room.image} alt={room.alt} /><span>FROM {room.price} / NIGHT</span></div>
      <div className="room-info"><h3>{room.name}</h3><p>{room.text}</p><ul>{room.items.map(item => <li key={item}>{item}</li>)}</ul><a href="#booking" className="text-link light">View Details →</a></div>
    </article>)}</div>
  </div></section>;
}
