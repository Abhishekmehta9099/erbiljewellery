import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";
import { Check } from "@phosphor-icons/react";

import DigitalStandeeImage from "/images/products/full-width/Outdoor Video Wall.png";

import Modal from "../../components/Modal";

const DigitalStandee = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    product: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/product-inquiry`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;

      if (response.status === 200) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the form");
    } finally {
      setLoading(false);
      setIsModalOpen(false);
      setFormData({
        name: "",
        email: "",
        message: "",
        product: "",
      });
    }
  };

  return (
    <main className="products-page modal-overlay-container">
      {isModalOpen && (
        <Modal
          title={`Inquire about ${formData.product}`}
          onClose={() => setIsModalOpen(false)}
          data-aos="zoom-in"
        >
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {loading ? (
                <HashLoader color="var(--text)" size={20} />
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </Modal>
      )}

      <section
        className="products-page-header"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="container">
          <h1 data-aos="fade-up" data-aos-delay="200">
            Digital Standee
          </h1>
          <p data-aos="fade-up" data-aos-delay="300">
            Modern digital signage solutions for high-impact visual
            communication, perfect for both public and private spaces.
          </p>
        </div>
      </section>

      <div className="container">
        <section
          className="products-page-content"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src={DigitalStandeeImage}
            alt="Digital Standee Image"
            data-aos="zoom-in"
            data-aos-duration="800"
          />
          <h2 data-aos="fade-up" data-aos-delay="200">
            Make an Impact with Digital Signage
          </h2>
          <p data-aos="fade-up" data-aos-delay="300">
            Our Digital Standee offers an effective way to deliver information
            and promotions with eye-catching displays and dynamic content
            capabilities.
          </p>

          <div
            className="key-features"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h4 data-aos="fade-up">Key Features</h4>
            <ul>
              <li
                className="key-feature"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Check size={20} fill="var(--primary)" />
                High-definition screen for clear visuals
              </li>
              <li
                className="key-feature"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Check size={20} fill="var(--primary)" />
                Easy content management with built-in software
              </li>
              <li
                className="key-feature"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Check size={20} fill="var(--primary)" />
                Sleek and modern design
              </li>
              <li
                className="key-feature"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Check size={20} fill="var(--primary)" />
                Interactive touch capabilities
              </li>
              <li
                className="key-feature"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <Check size={20} fill="var(--primary)" />
                Customizable options available
              </li>
            </ul>
          </div>

          <button
            className="btn"
            data-aos="fade-up"
            data-aos-delay="600"
            onClick={() => {
              setFormData({ ...formData, product: "Digital Standee" });
              setIsModalOpen(true);
            }}
          >
            Enquire Now
          </button>
        </section>
      </div>

      <section
        className="products-page-footer"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container">
          <h1 data-aos="fade-up">Ready to Upgrade Your Signage?</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Perfect for retail spaces, exhibition halls, and corporate
            environments. <br />
            Contact us to explore our Digital Standee options.
          </p>
          <NavLink to="/contact" className="btn-primary">
            Get in Touch
          </NavLink>
        </div>
      </section>
    </main>
  );
};

export default DigitalStandee;
