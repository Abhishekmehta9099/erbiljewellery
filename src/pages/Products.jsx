import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";

// Import Images
import OutdoorVideoWall from "/images/products/Outdoor Video Wall.png";
import IndoorVideoWall from "/images/products/Indoor Video Wall.png";
import DigitalStandee from "/images/products/Digital Standee.png";
import RentalLEDDisplay from "/images/products/Rental LED Display.png";
import InteractiveTouchPanel from "/images/products/Interactive Touch Panel.png";
import TouchKiosk from "/images/products/Touch Kiosk.png";
import MSBodyForLEDDisplay from "/images/products/MS Body for LED Display.png";

// Import Components
import ServiceCard from "../components/ServiceCard";
import Modal from "../components/Modal";

const Products = () => {
  const products = [
    {
      image: OutdoorVideoWall,
      title: "Outdoor Video Wall",
      description:
        "High-resolution LED displays designed for outdoor use, ideal for advertising and information dissemination in public spaces.",
      link: "/products/outdoor-video-wall",
    },
    {
      image: IndoorVideoWall,
      title: "Indoor Video Wall",
      description:
        "Sleek and vibrant LED displays for indoor environments, perfect for retail stores, corporate offices, and event venues.",
      link: "/products/indoor-video-wall",
    },
    {
      image: DigitalStandee,
      title: "Digital Standee",
      description:
        "Portable and versatile LED displays that can be easily moved and set up in various locations, ideal for events and promotions.",
      link: "/products/digital-standee",
    },
    {
      image: RentalLEDDisplay,
      title: "Rental LED Wall",
      description:
        "Flexible and cost-effective LED wall solutions for short-term events and campaigns, available for rent.",
      link: "/products/rental-led-wall",
    },
    {
      image: InteractiveTouchPanel,
      title: "Interactive Touch Panel",
      description:
        "Touchscreen displays that allow users to interact with content and access information in an engaging way.",
      link: "/products/interactive-touch-panel",
    },
    {
      image: TouchKiosk,
      title: "Touch Kiosk",
      description:
        "Self-service kiosks with touchscreens that provide information, services, and transactions to users.",
      link: "/products/touch-kiosk",
    },
    {
      image: MSBodyForLEDDisplay,
      title: "Digital Podium",
      description:
        "Customizable metal structures that support and protect LED displays in various environments.",
      link: "/products/digital-podium",
    },
  ];

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
    <div className="modal-overlay-container">
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
      <section id="showcase" className="products-hero" data-aos="fade-down">
        <div className="container">
          <div className="subtitle" data-aos="slide-right">
            <p>Our Products</p>
            <h1 className="text-primary">
              Explore Our Extensive Range of Innovative Digital Solutions
              Designed to Elevate Your Brand
            </h1>
          </div>
          <p data-aos="slide-right" data-aos-delay="200">
            At Digital Sign World, we offer a wide range of products that are
            designed to help your brand stand out. From digital signage to
            social media marketing, we have the expertise to deliver exceptional
            results. Our team of experts will work closely with you to
            understand your goals and develop a customized strategy that drives
            real impact.
          </p>
        </div>
      </section>

      <div className="container">
        <section className="our-products" data-aos="fade-up">
          <div className="subtitle" data-aos="fade-up">
            <p>Our Products</p>
            <h1 className="text-primary">
              Check Out Our <br />
              Amazing Products
            </h1>
          </div>
          <div className="services" data-aos="fade-up" data-aos-delay="100">
            {products.map((product, index) => (
              <ServiceCard
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
                link={product.link}
                onClick={(title) => {
                  setFormData({ ...formData, product: title });
                  setIsModalOpen(true);
                }}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
