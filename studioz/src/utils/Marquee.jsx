import React from "react";
import Marquee from "react-fast-marquee";
import "../styles/Marquee.scss"; // Regular SCSS import

const MarqueeComponent = () => {
  const images = [
    "/images/Residential/Residential.jpg",
    "/images/Residential/Residential.jpg",
    "/images/Residential/Residential.jpg",
    "/images/Residential/Residential.jpg",
    "/images/Residential/Residential.jpg",
    "/images/Residential/Residential.jpg",
    "/images/Residential/Residential.jpg",
  ];

  return (
    <div className="marquee-component">
      <Marquee speed={70} gradient={false} direction="left" autoFill delay={1}>
        {images.map((image, index) => {
          if (index % 3 === 0 && images[index + 1]) {
            return (
              <div key={index} className="marquee-component__item">
                <img
                  src={images[index]}
                  alt={`marquee-image-${index}`}
                  className="marquee-component__item--image"
                  width={500}
                  height={500}
                  loading="lazy"
                />
                <img
                  src={images[index + 1]}
                  alt={`marquee-image-${index + 1}`}
                  className="marquee-component__item--image"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
            );
          } else if (index % 3 === 2) {
            return (
              <div
                key={index}
                className="marquee-component__item marquee-component__item--center"
              >
                <img
                  src={image}
                  alt={`marquee-image-${index}`}
                  className="large-image"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
            );
          }
          return null;
        })}
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
