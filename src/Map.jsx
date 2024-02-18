import { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import MapSvg from "./MapSvg";
import MapTooltip from "./MapTooltip";

const animationValue = {
  scale: 3.5,
  animationTime: 500,
  animationType: "easeOutQuad",
};

export default function Map() {
  const [country, setCountry] = useState("");
  const [activeCountry, setActiveCountry] = useState(false);

  return (
    <TransformWrapper limitToBounds={false} wheel={{ smoothStep: 0.0015 }}>
      {({ zoomToElement, resetTransform }) => (
        <>
          <TransformComponent>
            <MapSvg
              country={country}
              setCountry={setCountry}
              activeCountry={activeCountry}
              setActiveCountry={setActiveCountry}
              zoomToElement={zoomToElement}
              animationValue={animationValue}
            ></MapSvg>
          </TransformComponent>
          <MapTooltip
            country={country}
            activeCountry={activeCountry}
            zoomToElement={zoomToElement}
            resetTransform={resetTransform}
            animationValue={animationValue}
          ></MapTooltip>
        </>
      )}
    </TransformWrapper>
  );
}
