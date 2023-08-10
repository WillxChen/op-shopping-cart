import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import geoUrl from "./world-countries-sans-antarctica.json";

export default function SimpleMap() {
  return (
    <div>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
