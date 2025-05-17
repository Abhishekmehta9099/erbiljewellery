import PropTypes from "prop-types";

const StatCard = ({ icon, title, description }) => {
  return (
    <div className="stat" data-aos="flip-left">
      {icon && <img src={icon} alt={title + " Image"} />}
      <h3 className="text-primary">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

StatCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default StatCard;
