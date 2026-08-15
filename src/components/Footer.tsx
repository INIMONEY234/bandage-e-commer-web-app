import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import "../assets/styles/footer.css";

export function Footer() {
  return (
    <footer className="footer-wrapper">

      {/* =========================
          FOOTER TOP
      ========================= */}
      <div className="footer-top-wrapper">
        <div className="footer-top">

          <h2 className="footer-brand-logo">
            Bandage
          </h2>

          <div className="social-links-footer">
            <a href="#facebook" aria-label="Facebook">
              <FaFacebook />
            </a>

            <a href="#instagram" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#twitter" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>

        </div>

        <hr className="divider" />
      </div>


      {/* =========================
          FOOTER MAIN
      ========================= */}
      <div className="footer-main-wrapper">
        <div className="footer-main">

          {/* Company Info */}
          <div className="footer-col">
            <h5>Company Info</h5>

            <a href="#about">About Us</a>
            <a href="#career">Career</a>
            <a href="#hiring">We are hiring</a>
            <a href="#blog">Blog</a>
          </div>


          {/* Legal */}
          <div className="footer-col">
            <h5>Legal</h5>

            <a href="#about">About Us</a>
            <a href="#career">Career</a>
            <a href="#hiring">We are hiring</a>
            <a href="#blog">Blog</a>
          </div>


          {/* Features */}
          <div className="footer-col">
            <h5>Features</h5>

            <a href="#marketing">Business Marketing</a>
            <a href="#analytics">User Analytics</a>
            <a href="#chat">Live Chat</a>
            <a href="#support">Unlimited Support</a>
          </div>


          {/* Resources */}
          <div className="footer-col">
            <h5>Resources</h5>

            <a href="#ios">IOS & Android</a>
            <a href="#demo">Watch a Demo</a>
            <a href="#customers">Customers</a>
            <a href="#api">API</a>
          </div>


          {/* Get In Touch */}
          <div className="footer-col newsletter">
            <h5>Get In Touch</h5>

            <div className="subscribe-form">
              <input
                type="email"
                placeholder="Your Email"
                aria-label="Your Email"
              />

              <button type="button">
                Subscribe
              </button>
            </div>

            <small>
              Lore imp sum dolor Amit
            </small>
          </div>

        </div>
      </div>


      {/* =========================
          FOOTER BOTTOM
      ========================= */}
      <div className="footer-bottom">
        <p>
          Made With Love By <br /> Finland All Right Reserved
        </p>
      </div>

    </footer>
  );
}