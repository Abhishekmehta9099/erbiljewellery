import { useEffect } from "react";
import PropTypes from "prop-types";
import { X } from "@phosphor-icons/react";

const Modal = ({ title, children, onClose }) => {
  useEffect(() => {
    // Disable scroll when modal is open
    document.body.classList.add("no-scroll");

    // Clean up and enable scroll when modal closes
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div className="modal">
      <div
        className="modal-content"
        data-aos="zoom-in"
        data-aos-duration="300"
        data-aos-delay="100"
        data-aos-anchor=".modal-overlay-container"
      >
        <div className="modal-header">
          <h3>{title}</h3>
          <X size={24} onClick={onClose} style={{ cursor: "pointer" }} />
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
