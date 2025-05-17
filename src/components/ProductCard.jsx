import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const ProductCard = ({ title, description, image, link }) => {
  return (
    <div className="product-card" data-aos="zoom-in">
      <div className="overlay">
        <h2 className="title">{title}</h2>
        <div className="hover-content">
          <p className="description">{description}</p>
          <NavLink to={link} className="btn-primary btn-white-border">
            View Product
          </NavLink>
        </div>
      </div>
      <img src={image} alt={title + " Image"} />
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProductCard;
