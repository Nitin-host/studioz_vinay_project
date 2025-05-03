import React from "react";
import "../styles/PropertyManagement.scss";

function PropertyManagement({ data }) {
  const {
    imageSrc,
    altText = "Property management",
    title,
    subtitle,
    description,
    buttonText = "Learn More",
    onButtonClick,
  } = data || {};

  return (
    <div className="banner-container">
      <div className="banner-image">
        <img src={imageSrc} alt={altText} />
      </div>

      <div className="text-overlay">
        {title && <h1>{title}</h1>}
        {subtitle && <h2>{subtitle}</h2>}
        {description && <p>{description}</p>}
        {buttonText && (
          <button className="btn btn-primary" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}

export default PropertyManagement;
