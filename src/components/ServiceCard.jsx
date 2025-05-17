import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { ArrowUpRight } from "@phosphor-icons/react";

const ServiceCard = ({ link, image, title, description, onClick }) => {
  return (
    <div className="service-card" data-aos="slide-up">
      <div className="service-image">
        <img src={image} alt={title + " Image"} />
      </div>
      <div className="service-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="actions">
          <button className="btn" onClick={() => onClick(title)}>
            Inquire Now
          </button>
          <NavLink to={link} className="btn-link">
            Learn More <ArrowUpRight size={20} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ServiceCard;
