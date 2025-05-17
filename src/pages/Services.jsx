// Import Images
import DigitalSignageSolutions from "/images/services/Digital Signage Solutions.png";
import ContentCreation from "/images/services/Content Creation.png";

// Import Components
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const services = [
    {
      fromPage: true,
      image: DigitalSignageSolutions,
      title: "Digital Signage Solutions",
      description:
        "Designing and implementing LED display systems for various environments, such as retail stores, corporate offices, and public spaces.",
    },
    {
      fromPage: true,
      image: ContentCreation,
      title: "Content Creation",
      description:
        "Developing engaging visual and video content tailored for LED displays, including advertisements, promotional videos, and informational graphics.",
    },
    {
      fromPage: true,
      image: ContentCreation,
      title: "Media Planning and Buying",
      description:
        "Strategizing and purchasing ad space on digital platforms to maximize reach and effectiveness.",
    },
    {
      fromPage: true,
      image: ContentCreation,
      title: "Technology Integration",
      description:
        "Integrating LED displays with other digital systems and technologies, such as content management systems (CMS) and interactive features.",
    },
    {
      fromPage: true,
      image: ContentCreation,
      title: "Installation and Maintenance",
      description:
        "Providing installation services for LED screens and ongoing maintenance to ensure optimal performance and longevity.",
    },
    {
      fromPage: true,
      image: ContentCreation,
      title: "Analytics and Reporting",
      description:
        "Offering insights and analytics on the performance of digital advertising campaigns to optimize strategies and measure ROI.",
    },
    {
      fromPage: true,
      image: ContentCreation,
      title: "Consulting Services",
      description:
        "Advising clients on the best practices and technologies in digital advertising to meet their specific needs and goals.",
    },
  ];

  return (
    <>
      <section id="showcase" className="services-hero" data-aos="fade-down">
        <div className="container">
          <div className="subtitle" data-aos="slide-right">
            <p>Our Services</p>
            <h1 className="text-primary">
              Delivering Exceptional Advertising Solutions for Your Brand
            </h1>
          </div>
          <p data-aos="slide-right" data-aos-delay="200">
            At Digital Sign World, we offer a wide range of advertising services
            that are designed to help your brand stand out. From digital signage
            to social media marketing, we have the expertise to deliver
            exceptional results. Our team of experts will work closely with you
            to understand your goals and develop a customized strategy that
            drives real impact.
          </p>
        </div>
      </section>

      <div className="container">
        <section className="our-services" data-aos="fade-up">
          <div className="subtitle" data-aos="fade-up">
            <p>Our Services</p>
            <h1 className="text-primary">
              Transformative Advertising <br /> Solutions For Your Brand
            </h1>
          </div>
          <p data-aos="fade-up" data-aos-delay="100">
            At Digital Sign World, we offer a comprehensive range of services
            designed to elevate your brand and drive impactful results. Our
            expertise lies in blending creativity with technology to deliver
            advertising solutions that captivate, engage, and convert.
          </p>

          <div className="services" data-aos="fade-up" data-aos-delay="200">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                fromPage={service.fromPage}
                image={service.image}
                title={service.title}
                description={service.description}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
