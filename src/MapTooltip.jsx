import { Link } from "react-router-dom";
import { useEffect } from "react";
import data from "./regions.json";

/*

1. Div container
  Region Carousel
  a. Region
  b. Country Image
  c. Country Information
  d. Region Characteristics
  e. Link to filtered products

  State lifted up to App component
  MapLegend and MapSvg shared state
  MapSvg changes state depending on selected or highlighted country
    Clicking country will set active state true, and clicking it again will set active state false

  { country: string, region: string, isActive: bool}

  Need to storage country images and copy text
  Need to set up query parameters to filter products by country 


*/

function getRegionalData(targetCountry) {
  for (let selectedRegion of data.regions) {
    const selectedCountry = selectedRegion.countries.find(
      (country) => country.name === targetCountry
    );

    if (selectedCountry !== undefined) {
      return { selectedRegion, selectedCountry };
    }
  }
}

export default function MapTooltip({ country }) {
  const { selectedRegion, selectedCountry } = country
    ? getRegionalData(country)
    : {};
  console.log(selectedRegion);
  return (
    <>
      {selectedRegion && (
        <div className="absolute bottom-0 left-0 w-80">
          <h3>Region: {selectedRegion.name}</h3>
          <img></img>
          <div>
            <h4>Country: {selectedCountry.name}</h4>
            <p>Tasting Notes: {selectedCountry.typicalFlavors.join(", ")}</p>
            <p>Altitude: {selectedCountry.altitude}</p>
            <p>Description: {selectedCountry.description}</p>
          </div>
          <Link></Link>
        </div>
      )}
    </>
  );
}
