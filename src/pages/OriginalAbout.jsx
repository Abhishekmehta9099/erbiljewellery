import { NavLink } from "react-router-dom";

// Images
import InnovativeAdvertisingCampaigns from "/images/strengths/Innovative Advertising Campaigns.png";
import AdvancedDigitalStandee from "/images/strengths/Advanced Digital Standee.png";
import StrategyMarketingSolutions from "/images/strengths/Strategy Marketing Solutions.png";
import ComprehensiveBrandDevelopment from "/images/strengths/Comprehensive Brand Development.png";
import TeamMember from "/images/team/Team Member.png";

// Icons
import CreativeExcellence from "/images/icons/Creative Excellence.png";
import CuttingEdgeTechnology from "/images/icons/Cutting Edge Technology.png";
import ClientCentricFocus from "/images/icons/Client-Centric Focus.png";

import StrengthCard from "../components/StrengthCard";
import StatCard from "../components/StatCard";
import TeamCard from "../components/TeamCard";

const About = () => {
  const strengths = [
    {
      image: InnovativeAdvertisingCampaigns,
      title: "Innovative Advertising Campaigns",
      description:
        "We craft unique and memorable campaigns tailored to your specific goals, ensuring that your message stands out in a crowded marketplace",
    },
    {
      image: AdvancedDigitalStandee,
      title: "An Advanced Digital Standee",
      description:
        "Our state-of-the-art digital signage solutions offer dynamic and interactive displays that captivate and inform your audience.",
    },
    {
      image: StrategyMarketingSolutions,
      title: "Strategy Marketing Solutions",
      description:
        "We utilize data-driven strategies to enhance your brand’s visibility, drive engagement, and maximize return on investment.",
    },
    {
      image: ComprehensiveBrandDevelopment,
      title: "Comprehensive Brand Development",
      description:
        "From logo design to full-scale rebranding, we build strong, cohesive brand identities that resonate with your target audience.",
    },
  ];

  const differentiators = [
    {
      icon: CreativeExcellence,
      title: "Creative Excellence",
      description:
        "Our commitment to creativity ensures that every campaign is fresh, engaging, and impactful.",
    },
    {
      icon: CuttingEdgeTechnology,
      title: "Cutting-Edge Technology",
      description:
        "We leverage the latest technology to deliver solutions that are both innovative and effective.",
    },
    {
      icon: ClientCentricFocus,
      title: "Client-Centric Focus",
      description:
        "Your satisfaction is our top priority. We strive to build long-lasting relationships through exceptional service and results.",
    },
  ];

  const team = [
    {
      image: TeamMember,
      title: "John Doe",
      position: "Creative Director",
    },
    {
      image: TeamMember,
      title: "Jane Doe",
      position: "Marketing Manager",
    },
    {
      image: TeamMember,
      title: "Alex Smith",
      position: "Lead Developer",
    },
  ];

  return (
    <>
      <section id="showcase" className="about-hero" data-aos="fade-down">
        <div className="container">
          <div className="subtitle" data-aos="slide-right">
            <p>About Us</p>
            <h1 className="text-primary">
              Empowering Brands through Innovative Advertising
            </h1>
          </div>
          <p data-aos="slide-right" data-aos-delay="200">
            At Digital Sign World, we are dedicated to redefining the
            advertising landscape. Founded with a vision to merge creativity
            with technology, we specialize in delivering cutting-edge
            advertising solutions that make a real impact. Our mission is to
            help brands like yours capture attention, engage audiences, and
            achieve remarkable results.
          </p>
        </div>
      </section>
      <div className="container">
        <section className="our-strengths" data-aos="fade-up">
          <div className="subtitle" data-aos="fade-up">
            <p>Our Strengths</p>
            <h1 className="text-primary">
              Our Expertise in Advertising and <br />
              Brand Development
            </h1>
          </div>
          <div className="strength-cards" data-aos="fade-up">
            {strengths.map((strength, index) => (
              <StrengthCard
                key={index}
                image={strength.image}
                title={strength.title}
                description={strength.description}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              />
            ))}
          </div>
        </section>

        <section className="our-approach" data-aos="fade-up">
          <div className="content">
            <div className="subtitle" data-aos="fade-up">
              <p>Our Approach</p>
              <h1 className="text-primary">Why Choose Us?</h1>
            </div>
            <p data-aos="fade-up" data-aos-delay="100">
              We believe in a collaborative approach where your vision drives
              our creativity. Our team of experts works closely with you to
              understand your unique needs and objectives. We blend innovative
              thinking with strategic insights to deliver solutions that not
              only meet but exceed your expectations.
            </p>
            <p data-aos="fade-up" data-aos-delay="200">
              Join us at Digital Sign World, and let&apos;s transform your
              advertising vision into a powerful reality.
            </p>
            <NavLink>
              <button
                className="btn btn-primary"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Join Us
              </button>
            </NavLink>
          </div>
          <div className="cards" data-aos="fade-up">
            {differentiators.map((differentiator, index) => (
              <StatCard
                key={index}
                icon={differentiator.icon}
                title={differentiator.title}
                description={differentiator.description}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              />
            ))}
          </div>
        </section>

        <section className="our-team" data-aos="fade-up">
          <div className="subtitle" data-aos="fade-up">
            <p>Our Team</p>
            <h1 className="text-primary">
              Meet the creative minds behind <br /> Digital Sign World
            </h1>
          </div>
          <div className="team-cards" data-aos="fade-up">
            {team.map((member, index) => (
              <TeamCard
                key={index}
                image={member.image}
                title={member.title}
                position={member.position}
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

export default About;
