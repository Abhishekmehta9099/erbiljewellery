import PropTypes from "prop-types";

const ContactCard = ({ icon, title, contactInfo, contactType }) => {
  return (
    <div className="contact-info-card">
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      {contactType === "email" ? (
        <a href={`mailto:${contactInfo}`}>{contactInfo}</a>
      ) : contactType === "phone" ? (
        <a href={`tel:${contactInfo}`}>{contactInfo}</a>
      ) : (
        <a>{contactInfo}</a>
      )}
    </div>
  );
};

ContactCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  contactInfo: PropTypes.string.isRequired,
  contactType: PropTypes.string.isRequired,
};

export default ContactCard;
