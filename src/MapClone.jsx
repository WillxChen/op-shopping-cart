import { useState } from "react";

import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import topology from "./world.topo.json";
import mapData from "./world-population-density.json";

export default function Map() {
  const [options] = useState({
    chart: {
      map: topology,
    },
    title: {
      text: "My map chart",
    },
    series: [
      {
        data: mapData,
        joinBy: ["iso-a3", "code3"],
      },
    ],
  });

  return (
    <>
      <HighchartsReact
        constructorType={"mapChart"}
        highcharts={Highcharts}
        options={options}
      />
      <h1>{console.log(options)}</h1>
    </>
  );
}
