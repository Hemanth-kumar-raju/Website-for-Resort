import { useEffect, useState } from "react";

const images = [
  {
    size: "tall",
    full: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=90",
    thumb:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=85",
    alt: "Resort",
  },
  {
    size: "",
    full: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=90",
    thumb:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=85",
    alt: "Pool",
  },
  {
    size: "",
    full: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1400&q=90",
    thumb:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=85",
    alt: "Tropical resort",
  },
  {
    size: "wide",
    full: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=90",
    thumb:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85",
    alt: "Luxury interior",
  },
  {
    size: "",
    full: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=90",
    thumb:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=85",
    alt: "Resort building",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Close with ESC key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <>
      <section className="gallery section" id="gallery">
        <div className="container">

          {/* Heading */}
          <div className="section-heading gallery-heading">
            <div>
              <p className="eyebrow dark">
                VISUAL JOURNEY
              </p>

              <h2>
                A Glimpse of <em>Aurelia</em>
              </h2>
            </div>

            <p className="heading-note dark-note">
              Tap an image to view it larger.
            </p>
          </div>

          {/* Gallery */}
          <div className="gallery-grid">
            {images.map((image) => (
              <button
                key={image.full}
                type="button"
                className={`gallery-item ${image.size}`}
                onClick={() => setSelectedImage(image)}
                aria-label={`View ${image.alt}`}
              >
                <img
                  src={image.thumb}
                  alt={image.alt}
                  loading="lazy"
                />
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          className="gallery-modal"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="gallery-modal-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <img
            src={selectedImage.full}
            alt={selectedImage.alt}
            className="gallery-modal-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}