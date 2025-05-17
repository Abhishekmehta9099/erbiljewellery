import PropTypes from "prop-types";

const DifferentiatorCard = ({ icon, title, description }) => {
  return (
    <div className="differentiator-card" data-aos="fade-up">
      <img src={icon} alt="Differentiator Icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

DifferentiatorCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DifferentiatorCard;
