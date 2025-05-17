import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";

import Telephone from "/images/icons/Telephone.png";
import OpenMail from "/images/icons/Open email.png";
import Placeholder from "/images/icons/Placeholder.png";

import ContactCard from "../components/ContactCard";

const Contact = () => {
  const contactInfo = [
    {
      icon: Telephone,
      title: "Phone",
      contactInfo: "04-2263850",
      contactType: "phone",
    },
    {
      icon: OpenMail,
      title: "Email",
      contactInfo: " erbil.jew@gmail.com ",
      contactType: "email",
    },
    {
      icon: Placeholder,
      title: "Address",
      contactInfo: "Office no 107, 1st Floor Hind Plaza, Building No 7 Gold Souq Extension, Deira Po Box 380361,Dubai (U.A.E).",
      contactType: "address",
    },
  ];

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // setLoading(true);

    // try {
    //   await axios.post(
    //     `${import.meta.env.VITE_API_URL}/submit-form`,
    //     formData,
    //     {
    //       withCredentials: true,
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );

    //   setFormData({
    //     name: "",
    //     email: "",
    //     message: "",
    //   });

    //   toast.success("Form submitted successfully");
    // } catch (error) {
    //   console.error(
    //     "Error submitting form:",
    //     error.response ? error.response.data : error.message
    //   );
    //   toast.error(
    //     error.response
    //       ? error.response.data.message
    //       : "An error occurred while submitting the form"
    //   );
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <>
      <section id="showcase" className="contact-us" data-aos="fade-down">
        <div className="container">
          <div className="subtitle" data-aos="slide-right">
            <p>Contact Us</p>
            <h1 className="text-primary">
              We are here to help you with any questions you may have.
            </h1>
          </div>
          <p data-aos="slide-right" data-aos-delay="200">
            If you have any questions or need help, please feel free to contact
            us. Our team will get back to you as soon as possible.
          </p>
        </div>
      </section>

      <div className="container">
        <section className="contact-container" data-aos="fade-up">
          <div className="subtitle" data-aos="fade-up">
            <p>Reach Us</p>
            <h1 className="text-primary">Get in Touch!</h1>
          </div>
          <p data-aos="fade-up" data-aos-delay="100">
            We&apos;d love to hear from you! 
            <br />get in touch with us.
          </p>
          <div
            className="contact-info-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="contact-info">
              {contactInfo.map((contact, index) => (
                <ContactCard
                  key={index}
                  icon={contact.icon}
                  title={contact.title}
                  contactInfo={contact.contactInfo}
                  contactType={contact.contactType}
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                />
              ))}
            </div>
            <div
              className="contact-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-primary">Contact Us</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  data-aos="fade-up"
                  data-aos-delay="400"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  data-aos="fade-up"
                  data-aos-delay="500"
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  data-aos="fade-up"
                  data-aos-delay="600"
                ></textarea>
                <button
                  className="btn"
                  type="submit"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  {loading ? (
                    <HashLoader color="var(--text)" size={20} />
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
