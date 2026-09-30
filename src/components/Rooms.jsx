import { useState } from "react";

const rooms = [
  {
    id: 1,
    name: "Deluxe Retreat",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=90",
    price: "$8,500",
    description:
      "A peaceful room with elegant interiors, a king-size bed and garden views.",
    features: ["KING BED", "GARDEN VIEW", "2 GUESTS"],
    details:
      "A beautifully designed retreat featuring elegant interiors, a comfortable king-size bed, garden views and everything you need for a peaceful stay.",
  },
  {
    id: 2,
    name: "Signature Suite",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=90",
    price: "$12,500",
    description:
      "A spacious sanctuary featuring a private balcony, lounge area and scenic views.",
    features: ["KING BED", "PRIVATE BALCONY", "3 GUESTS"],
    details:
      "Our Signature Suite combines spacious living with refined comfort, featuring a private balcony, separate lounge area and beautiful scenic views.",
  },
  {
    id: 3,
    name: "Private Villa",
    image:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=90",
    price: "$18,500",
    description:
      "Your own secluded escape with generous living space and a private outdoor area.",
    features: ["KING BED", "PRIVATE GARDEN", "4 GUESTS"],
    details:
      "Experience complete privacy in our Private Villa with generous living spaces, a private garden and an intimate setting surrounded by nature.",
  },
];

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <>
      <section className="rooms-section" id="rooms">
        <div className="rooms-container">

          {/* Heading */}
          <div className="rooms-heading">

            <h2>
              Rooms & <em>Suites</em>
            </h2>

            <p>
              Designed with natural textures, warm light and
              <br />
              everything you need to feel at home.
            </p>

          </div>

          {/* Cards */}
          <div className="rooms-grid">

            {rooms.map((room) => (
              <article className="room-card" key={room.id}>

                {/* Image */}
                <div className="room-card-image">

                  <img
                    src={room.image}
                    alt={room.name}
                  />

                  {/* Price */}
                  <div className="room-price">
                    FROM {room.price} / NIGHT
                  </div>

                </div>

                {/* Content */}
                <div className="room-card-content">

                  <h3>{room.name}</h3>

                  <p className="room-description">
                    {room.description}
                  </p>

                  {/* Features */}
                  <div className="room-features">

                    {room.features.map((feature, index) => (
                      <span key={feature}>
                        {feature}

                        {index !== room.features.length - 1 && (
                          <b>•</b>
                        )}
                      </span>
                    ))}

                  </div>

                  {/* Details */}
                  <button
                    type="button"
                    className="room-details-button"
                    onClick={() => setSelectedRoom(room)}
                  >
                    VIEW DETAILS
                    <span>→</span>
                  </button>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* Room Details Modal */}
      {selectedRoom && (
        <div
          className="room-details-overlay"
          onClick={() => setSelectedRoom(null)}
        >
          <div
            className="room-details-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="room-modal-close"
              onClick={() => setSelectedRoom(null)}
            >
              ×
            </button>

            <img
              src={selectedRoom.image}
              alt={selectedRoom.name}
            />

            <div className="room-modal-content">

              <span className="room-modal-label">
                AURELIA RESORT
              </span>

              <h2>{selectedRoom.name}</h2>

              <div className="modal-price">
                FROM {selectedRoom.price} / NIGHT
              </div>

              <p>
                {selectedRoom.details}
              </p>

              <div className="modal-features">
                {selectedRoom.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>

              <button
                className="modal-book-button"
                onClick={() => {
                  setSelectedRoom(null);

                  document
                    .getElementById("booking")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
              >
                BOOK THIS ROOM
              </button>

            </div>

          </div>
        </div>
      )}
    </>
  );
}