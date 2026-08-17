import { useState } from "react";

import {
  FiSearch,
  FiX,
  FiShoppingCart,
  FiHeart,
  FiInstagram,
  FiChevronDown,
  FiPhone,
  FiMail,
} from "react-icons/fi";

import { FaRegUser } from "react-icons/fa6";
import { HiMenuAlt3 } from "react-icons/hi";

import {
  FaTwitter,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import { useAppSelector } from "../app/hooks";

import "../assets/styles/Global.css";
import "../assets/styles/Header.css";

export function Header() {


  const [menuOpen, setMenuOpen] = useState(false);


  const cartItems = useAppSelector(
    (state) => state.cart.items
  );


  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  /* =========================
     Close Mobile Menu
  ========================== */
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      {/* =========================
          Top Banner
      ========================== */}
      <div className="top-banner">
        <div className="top-banner-container">

          {/* Contact Information */}
          <div className="top-banner-left">
            <span className="contact-item">
              <FiPhone />
              (225) 555-0118
            </span>

            <span className="contact-item">
              <FiMail />
              michelle.rivera@example.com
            </span>
          </div>

          {/* Promotional Message */}
          <div className="top-banner-center">
            Follow Us and get a chance to win 80% off
          </div>

          {/* Social Media */}
          <div className="top-banner-right">
            <span>Follow Us :</span>

            <a
              href="#instagram"
              aria-label="Instagram"
            >
              <FiInstagram />
            </a>

            <a
              href="#youtube"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>

            <a
              href="#facebook"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>

            <a
              href="#twitter"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* =========================
          Main Navbar
      ========================== */}
      <nav className="navbar">
        <div className="nav-container">

          {/* =========================
              Brand Logo
          ========================== */}
          <Link
            to="/"
            className="brand-logo"
            onClick={closeMenu}
          >
            Bandage
          </Link>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}
          <div className="nav-menu">

            <Link
              to="/"
              onClick={closeMenu}
            >
              Home
            </Link>

            <Link
              to="/shop"
              className="dropdown"
              onClick={closeMenu}
            >
              <span>Shop</span>
              <FiChevronDown />
            </Link>

            <Link
              to="/"
              onClick={closeMenu}
            >
              About
            </Link>

            <Link
              to="/"
              onClick={closeMenu}
            >
              Blog
            </Link>

            <Link
              to="/"
              onClick={closeMenu}
            >
              Contact
            </Link>

            <Link
              to="/"
              onClick={closeMenu}
            >
              Pages
            </Link>

          </div>

          {/* =========================
              MOBILE NAVIGATION
          ========================== */}
          <ul
            className={`mobile-nav-links ${
              menuOpen ? "active" : ""
            }`}
          >
            <li>
              <Link
                to="/"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/shop"
                onClick={closeMenu}
              >
                Product
              </Link>
            </li>

            <li>
              <Link
                to="/shop"
                onClick={closeMenu}
              >
                Pricing
              </Link>
            </li>

            <li>
              <Link
                to="/"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* =========================
              Navigation Actions
          ========================== */}
          <div className="nav-actions">

            {/* Login */}
            <Link
              to="/"
              className="login-link"
              onClick={closeMenu}
            >
              <FaRegUser />
              <span>Login / Register</span>
            </Link>

            {/* Search */}
            <button
              type="button"
              className="icon-btn"
              aria-label="Search"
            >
              <FiSearch />
            </button>

            {/* =========================
                Shopping Cart
            ========================== */}
            <Link
              to="/cart"
              className="icon-btn action-with-count"
              aria-label={`Shopping Cart, ${cartCount} items`}
              onClick={closeMenu}
            >
              <FiShoppingCart />

              {cartCount > 0 && (
                <span className="count">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Wishlist */}
            <button
              type="button"
              className="icon-btn action-with-count wishlist-btn"
              aria-label="Wishlist"
            >
              <FiHeart />

              <span className="count">
                1
              </span>
            </button>

            {/* =========================
                Mobile Menu Toggle
            ========================== */}
            <button
              type="button"
              className="mobile-toggle"
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              onClick={() =>
                setMenuOpen((prev) => !prev)
              }
            >
              {menuOpen ? (
                <FiX />
              ) : (
                <HiMenuAlt3 />
              )}
            </button>

          </div>
        </div>
      </nav>
    </header>
  );
}