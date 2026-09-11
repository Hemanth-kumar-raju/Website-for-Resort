import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Experiences from './components/Experiences';
import Quote from './components/Quote';
import Gallery from './components/Gallery';
import Offer from './components/Offer';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';

export default function App() {
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = lightboxImage ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxImage]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Experiences />
        <Quote />
        <Gallery onOpen={setLightboxImage} />
        <Offer />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </>
  );
}
