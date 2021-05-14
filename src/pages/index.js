import React, { useState, useEffect } from "react";
import Filter from "../components/filter";
import Map from "../components/map";
import { getEvents } from "../api/heatMapClient";

export default function MainPage() {
  const [mapData, setMapData] = useState([]);
  const [situation, setSituation] = useState();

  useEffect(() => {
    getMapData();
  }, []);

  const getMapData = async () => {
    const result = await getEvents();
    setMapData(result);
  };

  const onChangeSituation = async (event) => {
    console.log(event);
  };

  return (
    mapData.length > 0 && (
      <>
        <Map data={mapData} />
        <div id="over_map">
          <Filter />
        </div>
      </>
    )
  );
}
