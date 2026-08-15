import { FiClock } from "react-icons/fi";

import { SlArrowRight } from "react-icons/sl";

import { FaChartArea } from "react-icons/fa";

import "../assets/styles/posts.css";


import post1 from "../assets/images/post1.png";
import post2 from "../assets/images/post2.png";
import post3 from "../assets/images/post3.png";

export function Posts() {
  const posts = [
    {
      id: 1,
      image: post1,
    },
    {
      id: 2,
      image: post2,
    },
    {
      id: 3,
      image: post3,
    },
  ];

  return (
    <section className="posts-section container">
      <div className="section-header">
        <h6 className="section-label" style={{ color: "#23A6F0" }}>
          Practice Advice
        </h6>

        <h2 className="main-title" style={{ fontWeight: "700", fontSize: "40px", lineHeight: "50px", letterSpacing: "0.2px", textAlign: "center", }}>Featured Posts</h2>
      </div>

      <div className="posts-grid">
        {posts.map((post) => (
          <article key={post.id} className="post-card">
            <div className="post-img-wrapper">
              <span className="tag-new">NEW</span>

              <img
                src={post.image}
                alt="Post preview"
              />
            </div>

            <div className="post-content">
              <div className="post-tags">
                <span className="active">Google</span>
                <span>Trending</span>
                <span>New</span>
              </div>

              <h4>
                Loudest à la Madison #1 (L'integral)
              </h4>

              <p>
                We focus on ergonomics and meeting you where
                you work. It's only a keystroke away.
              </p>

              <div className="post-meta">
                <span>
                  <FiClock style={{ color: "#23A6F0" }} />
                  22 April 2021
                </span>

                <span>
                  <FaChartArea style={{ color: "#23856D" }}/>
                  10 comments
                </span>
              </div>

              <a href="#learn" className="learn-more">
                Learn More
                <SlArrowRight />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}