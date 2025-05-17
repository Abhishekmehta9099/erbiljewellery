import Brand01 from "/images/brands/Brand 01.png";
import Brand02 from "/images/brands/Brand 02.png";
import Brand03 from "/images/brands/Brand 03.png";
import Brand04 from "/images/brands/Brand 04.png";
import Brand05 from "/images/brands/Brand 05.png";
import Brand06 from "/images/brands/Brand 06.png";
import Brand07 from "/images/brands/Brand 07.png";
import Brand08 from "/images/brands/Brand 08.png";
import Brand09 from "/images/brands/Brand 09.png";
import Brand10 from "/images/brands/Brand 10.png";
import Brand11 from "/images/brands/Brand 11.png";
import Brand12 from "/images/brands/Brand 12.png";

const brands = [
  { id: 1, src: Brand01, alt: "Brand 01" },
  { id: 2, src: Brand02, alt: "Brand 02" },
  { id: 3, src: Brand03, alt: "Brand 03" },
  { id: 4, src: Brand04, alt: "Brand 04" },
  { id: 5, src: Brand05, alt: "Brand 05" },
  { id: 6, src: Brand06, alt: "Brand 06" },
  { id: 7, src: Brand07, alt: "Brand 07" },
  { id: 8, src: Brand08, alt: "Brand 08" },
  { id: 9, src: Brand09, alt: "Brand 09" },
  { id: 10, src: Brand10, alt: "Brand 10" },
  { id: 11, src: Brand11, alt: "Brand 11" },
  { id: 12, src: Brand12, alt: "Brand 12" },
];

const BrandSlider = () => {
  return (
    <div className="brand-slider">
      <div className="brand-track">
        {brands.map((brand) => (
          <div className="brand" key={brand.id}>
            <img src={brand.src} alt={brand.alt} />
          </div>
        ))}
        {/* Duplicate the brand items for smooth infinite scrolling */}
        {brands.map((brand) => (
          <div className="brand" key={`duplicate-${brand.id}`}>
            <img src={brand.src} alt={brand.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
