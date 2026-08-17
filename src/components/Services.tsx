import { FiTrendingUp } from "react-icons/fi";

import openBook from "../assets/images/openBook.svg";

import carbon_book from "../assets/images/carbon_book.png";

import "../assets/styles/Services.css";

export function Services() {
  const services = [
    {
      icon: <img src={openBook} alt="Open Book" />,
      title: "Easy Wins",
      description: "Get your best looking smile now!",
    },
    {
      icon: <img src={carbon_book} alt="Carbon Book" />,
      title: "Concrete",
      description:
        "Defalcate is most focused in helping you discover your most beautiful smile",
    },
    {
      icon: <FiTrendingUp />,
      title: "Hack Growth",
      description: "Overcame any hurdle or any other problem.",
    },
  ];

  return (
    <section className="services-section container">
      <div className="section-header">
        <h4 className="subtitle">Featured Products</h4>

        <h2 className="main-title">THE BEST SERVICES</h2>

        <p className="description">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div
            className="service-card"
            key={service.title}
            style={{
              width: "auto",
              height: "254px",
              paddingTop: "35px",
              paddingRight: "40px",
              paddingBottom: "35px",
              paddingLeft: "40px",
              gap: "20px",
            }}
          >
            <div
              className="service-icon"
              style={{
                width: "72px",
                height: "72px",
                margin: "0 auto 2rem",
              }}
            >
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p
              style={{
                width: "225px",
                height: "40px",
                textAlign: "center",
                margin: "auto",
              }}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}