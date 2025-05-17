import PropTypes from "prop-types";

const StrengthCard = ({ image, title, description }) => {
  return (
    <div className="strength-card" data-aos="fade-right">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

StrengthCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default StrengthCard;
