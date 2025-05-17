import { NavLink } from "react-router-dom";

import HeroImage from "/images/jewellery/hero.png";
import AboutImage from "/images/jewellery/crown.jpg";
import Necklace from "/images/jewellery/bangle/1.jpg";
import Bangle from "/images/jewellery/belt/2.jpg";
import Belt from "/images/jewellery/necklace/1.jpg";
import HaldSet from "/images/jewellery/half set/1.jpg";

// Import Icons
import Bulb from "/images/icons/Bulb.png";
import TV from "/images/icons/TV.png";
import Stats from "/images/icons/Stats.png";
import Trophy from "/images/icons/Trophy.png";
import India from "/images/icons/India.png";
import CustomerSupport from "/images/icons/Customer Support.png";
import Twenty from "/images/icons/Twenty.png";
import FastDelivery from "/images/icons/Fast Delivery.png";

// Import Components
import BrandSlider from "../components/BrandSlider";
import StatCard from "../components/StatCard";
import DifferentiatorCard from "../components/DifferentiatorCard";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const stats = [
    {
      icon: Bulb,
      title: "Value For Money",
      description: "Our team of experts will make sure that you find Erbil Jewellery to be a trustworthy business partner capable of maintainig a high level of quality.",
    },
    {
      icon: TV,
      title: "Quick Timeframe",
      description:
        "Our team maintains close contact with our clients throughout the entire transaction process.",
    },
    {
      icon: Stats,
      title: "Customer First",
      description:
        "Customers are important to us, and we consider them our partner and valuable resources. We respect our client's final decisions, regardless of our focus on the newest developments.",
    },
    {
      icon: Trophy,
      title: "Expert Team",
      description: "Our team of designers and artisans is highly skilled and talented. They have always been fascinated with new ideas and innovative designs as well as current fashion trends in jewellery for men and women.",
    },
  ];

  const differentiators = [
    {
      icon: India,
      title: "All Over India Network",
      description: "Wide Network Supply Across India for Quick Support.",
    },
    {
      icon: CustomerSupport,
      title: "Strong Customer Service",
      description: "Quick Service Support 10 AM - 7 PM",
    },
    {
      icon: Twenty,
      title: "20+ Years of Experience",
      description: "State of The Art Manufacturing Plant.",
    },
    {
      icon: FastDelivery,
      title: "Guaranteed Timely Delivery ",
      description: "Wide Network Supply Across India for Quick Support.",
    },
  ];

  const products = [
    {
      image: Necklace,
      title: "Bangles",
      description:
        "Timeless elegance meets traditional charm. Our gold bangles are expertly crafted to add a touch of luxury and grace to every occasion.",
      link: "/catalogue",
    },
    {
      image: Bangle,
      title: "Belt",
      description:
        "Elevate your style with our exquisite gold women’s belt — a perfect fusion of sophistication, tradition, and timeless glamour.",
      link: "/catalogue",
    },
    {
      image: Belt,
      title: "Necklace",
      description:
        "Grace your neckline with our stunning gold necklace — a timeless piece crafted to reflect elegance, beauty, and tradition.",
      link: "/catalogue",
    },
    {
      image: HaldSet,
      title: "Halfset",
      description:
        "Elegant and versatile, our gold half set features a beautifully crafted necklace and matching earrings — perfect for adding charm to any occasion.",
      link: "/catalogue",
    },
  ];

  return (
    <>
      <div className="container">
        <section id="hero" data-aos="fade-down">
          <div className="hero-text">
            <div className="subtitle" data-aos="slide-right">
              <p>ERBIL JEWELLERY LLC</p>
              <h1>
                <span style={{ fontSize: "2rem" }}>The ultimate in  </span>
                <span className="text-primary">luxury and style</span>
              </h1>
            </div>
            <p className="slogan" data-aos="slide-right">
              Your Shine, Our Priority.
            </p>
            <NavLink to="/about" className="btn-primary">
              Learn More
            </NavLink>
          </div>
          <img
            src={HeroImage}
            alt="Hero Section Image"
            className="hero-image"
            data-aos="slide-left"
          />
        </section>

        <section className="our-products" data-aos="fade-up">
          <div className="subtitle" data-aos="fade-up">
            <p>Our Products</p>
            <h1>
              Check Out Our <br />
              <span className="text-primary">Amazing Products</span>
            </h1>
          </div>
          <div className="products" data-aos="fade-up">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
                link={product.link}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              />
            ))}
          </div>
          <NavLink to="/catalogue" className="btn-primary">
            View All
          </NavLink>
        </section>

        <section className="why-choose-us" data-aos="fade-up">
          <div className="subtitle" data-aos="fade-up">
            <p>Core Principles</p>
            <h1 className="text-primary">Why Choose Us?</h1>
            <p>
              Let Erbil Jewellery LLC be your partner in
              <br />
              celebrating elegance with timeless pieces that leave a lasting impression.
            </p>
          </div>

          <div className="stats" data-aos="fade-up">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                // icon={stat.icon}
                title={stat.title}
                description={stat.description}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              />
            ))}
          </div>
        </section>
      </div>

      {/* <section className="what-makes-us-different" data-aos="fade-up">
        <div className="container">
          <h1 className="text-primary" data-aos="fade-up">
            What Makes Us Different?
          </h1>
          <div className="differentiators">
            {differentiators.map((differentiator, index) => (
              <DifferentiatorCard
                key={index}
                icon={differentiator.icon}
                title={differentiator.title}
                description={differentiator.description}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* <BrandSlider data-aos="fade-up" /> */}

      <div className="container">
        <section className="about-us-section">
          <img src={AboutImage} alt="About Us Image" data-aos="fade-right" />
          <div className="about-us-text" data-aos="fade-left">
            <div className="subtitle" data-aos="fade-up">
              <p>About Us</p>
              <h1 className="text-primary">Who Are We?</h1>
            </div>
            <p data-aos="fade-up" data-aos-delay="200">
              With over three decades of experience, Erbil Jewellery
              has evolved as one of the globally trusted and
              respected players in the jewellery industry.

            </p>
            <NavLink to="/about" className="btn-secondary">
              About Us
            </NavLink>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
