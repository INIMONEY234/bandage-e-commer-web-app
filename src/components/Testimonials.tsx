import { FiStar } from "react-icons/fi";
import { RiStarSLine } from "react-icons/ri";

import "../assets/styles/testimonials.css";

import ReginaMiles from "../assets/images/ReginaMiles.png";

import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";
import testimonial4 from "../assets/images/testimonial4.png";
import testimonial5 from "../assets/images/testimonial5.png";
import testimonial6 from "../assets/images/testimonial6.png";
import testimonial7 from "../assets/images/testimonial7.png";
import testimonial8 from "../assets/images/testimonial8.png";
import testimonial9 from "../assets/images/testimonial9.png";

const galleryPhotos = [
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
  testimonial5,
  testimonial6,
  testimonial7,
  testimonial8,
  testimonial9,
];

export function Testimonials() {
  return (
    <section className="testimonials-section container">
      <div className="testimonial-content">
        <h2>What they say about us</h2>

        <div className="avatar">
          <img src={ReginaMiles} alt="Regina Miles" />
        </div>

        <div
          className="stars"
          aria-label="4 out of 5 stars"
          style={{
            display: "flex",
            gap: "5px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FiStar />
          <FiStar />
          <FiStar />
          <FiStar />
          <RiStarSLine />
        </div>

        <p className="testimonial-text">
          Slate helps you see how many more days you need to work to <br /> reach
          your financial goal.
        </p>

        <h5 className="author">Regina Miles</h5>

        <span className="role">Designer</span>
      </div>

      <div className="gallery-grid">
        {galleryPhotos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Gallery image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}