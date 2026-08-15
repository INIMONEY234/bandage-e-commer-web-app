import "../assets/styles/Herogrid.css";

import furniture1 from "../assets/images/furniture1.png";
import furniture2 from "../assets/images/furniture2.png";
import furniture3 from "../assets/images/furniture3.png";
import furniture4 from "../assets/images/furniture4.png";

interface CategoryCard {
  id: number;
  itemCount: string;
  title: string;
  image: string;
  className: string;
}

const categories: CategoryCard[] = [
  {
    id: 1,
    itemCount: "5 Items",
    title: "FURNITURE",
    image:
      furniture1,
    className: "category-card-large",
  },
  {
    id: 2,
    itemCount: "5 Items",
    title: "FURNITURE",
    image:
      furniture2,
    className: "category-card-wide",
  },
  {
    id: 3,
    itemCount: "5 Items",
    title: "FURNITURE",
    image:
      furniture3,
    className: "category-card-small",
  },
  {
    id: 4,
    itemCount: "5 Items",
    title: "FURNITURE",
    image:
      furniture4,
    className: "category-card-small",
  },
];

export function HeroGrid() {
  return (
    <section className="hero-section">
      <div className="hero-grid container">
        {categories.map((category) => (
          <article
            key={category.id}
            className={`category-card ${category.className}`}
            style={{
              backgroundImage: `url("${category.image}")`,
            }}
          >
            <div className="category-overlay">
              <span className="category-count">
                {category.itemCount}
              </span>

              <h2 className="category-title">
                {category.title}
              </h2>

              <a
                href="#shop"
                className="category-link"
                aria-label={`Shop ${category.title}`}
              >
                Read More 
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}