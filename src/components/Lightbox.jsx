import { useEffect } from 'react';

export default function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return;
    const onKeyDown = (event) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [image, onClose]);

  if (!image) return null;
  return <div className="lightbox" aria-hidden="false" onClick={onClose}><button className="lightbox-close" aria-label="Close image" onClick={onClose}>×</button><img src={image.full} alt={image.alt} onClick={e => e.stopPropagation()} /></div>;
}
