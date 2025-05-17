import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { CaretDown } from "@phosphor-icons/react";
import Logo from "/images/jewellery/logo-removebg-preview.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.split("/")[1];
  const subPath = location.pathname.split("/")[2];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsProductsDropdownOpen(false);
    setIsNavActive(false);
    setIsScrolled(false);
    AOS.refresh();
  }, [location]);

  const handleHamburgerClick = () => {
    setIsNavActive(!isNavActive);
    setIsScrolled(!isNavActive);
  };

  const handleProductsClick = () => {
    navigate("/products");
  };

  const handleMouseEnter = () => {
    setIsProductsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsProductsDropdownOpen(false);
  };

  console.log(path);

  const ulClassNames = `nav-links ${isNavActive ? "active" : ""} ${
    path && path !== "" && !subPath ? "" : ""
  }`;

  return (
    <nav id="navbar" className={isScrolled ? "scrolled" : ""}>
      <div className="container">
        <NavLink to="/" className="logo">
          <img src={Logo} alt="Logo" />
        </NavLink>
        <div
          id="hamburger"
          className={`hamburger ${isNavActive ? "active" : ""}`}
          onClick={handleHamburgerClick}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <ul className={ulClassNames}>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/catalogue">Catalogue</NavLink>
          </li>
          {/* <li
            className="dropdown"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a style={{ cursor: "pointer" }} onClick={handleProductsClick}>
              Products <CaretDown />
            </a>
            <ul
              className={`dropdown-menu ${
                isProductsDropdownOpen ? "show" : ""
              }`}
            >
              <li>
                <NavLink to="/products/outdoor-video-wall">
                  Outdoor Video Wall
                </NavLink>
              </li>
              <li>
                <NavLink to="/products/indoor-video-wall">
                  Indoor Video Wall
                </NavLink>
              </li>
              <li>
                <NavLink to="/products/digital-standee">
                  Digital Standee
                </NavLink>
              </li>
              <li>
                <NavLink to="/products/rental-led-wall">
                  Rental LED Wall
                </NavLink>
              </li>
              <li>
                <NavLink to="/products/flat-interactive-touch-panel">
                  Flat Interactive Touch Panel (Education Purposes)
                </NavLink>
              </li>
              <li>
                <NavLink to="/products/touch-kiosk">Touch Kiosk</NavLink>
              </li>
              <li>
                <NavLink to="/products/digital-podium">Digital Podium</NavLink>
              </li>
            </ul>
          </li> */}
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
