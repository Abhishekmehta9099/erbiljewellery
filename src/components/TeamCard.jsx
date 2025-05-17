import PropTypes from "prop-types";

const TeamCard = ({ image, title, position }) => {
  return (
    <div className="team" data-aos="zoom-in">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{position}</p>
    </div>
  );
};

TeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default TeamCard;
