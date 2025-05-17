import { useEffect } from "react";
import PropTypes from "prop-types";

import AOS from "aos";
import "aos/dist/aos.css";

const AOSInitializer = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Slightly faster duration for smoother feel
      easing: "ease-out-cubic", // Smooth easing function
      once: false, // Animations occur every time you scroll
      mirror: true, // Animations can occur on scroll up too
      anchorPlacement: "top-bottom", // Anchor to top of element and bottom of window
      offset: 120, // Offset (in px) from the original trigger point
      delay: 0, // No delay by default
      throttleDelay: 99, // The delay on throttle used while scrolling the page (advanced)
    });
  }, []);

  return <>{children}</>;
};

AOSInitializer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AOSInitializer;
