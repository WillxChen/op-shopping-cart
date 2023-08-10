import { useEffect, useState } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function Map() {
  const [topology, setTopology] = useState(null);
  const [mapData, setMapData] = useState(null);

  const options = {
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
        name: "Population density",
      },
    ],
  };

  useEffect(() => {
    async function fetchData() {
      const result = (
        await Promise.all([
          fetch("https://code.highcharts.com/mapdata/custom/world.topo.json"),
          fetch(
            "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-population-density.json"
          ),
        ])
      ).map((res) => res.json());
      const [topologyResult, mapDataResult] = await Promise.all(result);
      setTopology(topologyResult);
      setMapData(mapDataResult);
    }
    fetchData();
  }, []);

  return (
    <>
      {(topology && mapData && (
        <>
          <HighchartsReact
            constructorType={"mapChart"}
            highcharts={Highcharts}
            options={options}
          />
          <h1>{console.log(options)}</h1>
        </>
      )) || <div>Loading</div>}
    </>
  );
}
