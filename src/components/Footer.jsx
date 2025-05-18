import { NavLink } from "react-router-dom";
import { Envelope, Phone, MapPin } from "@phosphor-icons/react";

import Logo from "/images/jewellery/logo-removebg-preview.png";

const Footer = () => {
  return (
    <footer data-aos="fade-in">
      <div className="container">
        <div className="footer-col" style={{ width: "90%" }}>
          <NavLink to="/" className="logo">
            <img src={Logo} alt="Logo" height={100} width={150} />
          </NavLink>
          <p style={{ textAlign: "justify" }}>
            We aim to meet the diverse needs of our local and regional customers in 
            gold jewellery and diamonds to help fuel their growth and to establish lasting relationships. 
            Our mission is to remain true to our core principles of uncompromising integrity, outstanding service, and exceptional value.
          </p>
        </div>
        <div className="footer-col">
          <h3>Links</h3>
          <ul>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            {/* <li>
              <NavLink to="/products">Products</NavLink>
            </li> */}
            <li>
              <NavLink>Contact Us</NavLink>
            </li>
          </ul>
        </div>
        {/* <div className="footer-col">
          <h3>Products</h3>
          <ul>
            <li>
              <NavLink to="/products/outdoor-video-wall" end>
                Outdoor Video Wall
              </NavLink>
            </li>
            <li>
              <NavLink to="/products/indoor-video-wall">
                Indoor Video Wall
              </NavLink>
            </li>
            <li>
              <NavLink to="/products/digital-standee">Digital Standee</NavLink>
            </li>
            <li>
              <NavLink to="/products/rental-led-wall">Rental LED Wall</NavLink>
            </li>
            <li>
              <NavLink to="/products/flat-interactive-touch-panel">
                Flat Interactive Touch Panel
              </NavLink>
            </li>
            <li>
              <NavLink to="/products/touch-kiosk">Touch Kiosk</NavLink>
            </li>
            <li>
              <NavLink to="/products/digital-podium">Digital Podium</NavLink>
            </li>
          </ul>
        </div> */}
        <div className="footer-col reach-us">
          <h3>Reach Us</h3>
          <ul>
            <li>
              <MapPin size="82" /> Office no 107, 1st Floor Hind Plaza, Building No 7 Gold Souq Extension, Deira Po Box 380361,Dubai (U.A.E).
            </li>
            <li>
              <Phone size="22" /> <a href="tel:04-2263850">04-2263850</a>
            </li>
            <li>
              <Envelope size="22" />{" "}
              <a href="mailto:erbil.jew@gmail.com ">erbil.jew@gmail.com </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
