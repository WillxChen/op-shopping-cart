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

  Zoomed out = active state is false
  First click = active state is region
  Second click = active state is countrygap-y-4

  State lifted up to App component
  MapLegend and MapSvg shared state
  MapSvg changes state depending on selected or highlighted country
    Clicking country will set active state true, and clicking it again will set active state false

  { country: string, region: string, isActive: bool}

  Need to storage country images and copy text
  Need to set up query parameters to filter products by country 


  Need state to monitor if country or region is currently selected

  If activeCountry then set tooltip to country
  Set up breadcrumb/menu to display Region -> Country
*/

function getRegionalData(targetCountry) {
  for (let selectedRegion of data.regions) {
    const selectedCountry = selectedRegion.countries.find(
      (country) => country.name === targetCountry
    );

    if (selectedCountry) {
      return {
        selectedRegion: selectedRegion.name.toLowerCase().split(" ").join("-"),
        selectedCountry,
      };
    }
  }
}

function handleBackButton() {
  /*
   is activeRegion === null? then setActiveRegion to false and reset zoom
   else setActiveRegion to true and zoom to activeRegion
  */
}

function RegionTooltip() {}

export default function MapTooltip({
  country,
  activeCountry,
  zoomToElement,
  resetTransform,
  animationValue,
}) {
  const { selectedRegion, selectedCountry } = country
    ? getRegionalData(country)
    : {};

  return (
    <>
      {selectedRegion && activeCountry && (
        <div className="absolute bottom-0 left-0 w-80 bg-zinc-700 p-3 m-6">
          <div className="relative">
            <button
              type="button"
              className="absolute"
              // onClick={() => resetTransform()}
              onClick={() =>
                zoomToElement(
                  selectedRegion,
                  2.5,
                  animationValue.animationTime,
                  animationValue.animationType
                )
              }
            >
              &lt;
            </button>
            <h3 className="text-center">{selectedCountry.name}</h3>
          </div>
          <img></img>
          <div>
            <h4>Region: {selectedRegion.name}</h4>
            <p>Tasting Notes: {selectedCountry.typicalFlavors.join(", ")}</p>
            <p>Altitude: {selectedCountry.altitude}</p>
            <p>Description: {selectedCountry.description}</p>
            {/* If activeRegion === null || activeCountry = null then set className hidden */}
            <button
              type="button"
              onClick={() =>
                zoomToElement(
                  selectedCountry.countryCode,
                  animationValue.scale,
                  animationValue.animationTime,
                  animationValue.animationType
                )
              }
            >
              Button
            </button>
          </div>
          <Link></Link>
        </div>
      )}
    </>
  );
}
