import React, { useState, useEffect } from "react";
import Filter from "../components/filter";
import Map from "../components/map";
import { getEvents } from "../api/heatMapClient";

export default function MainPage() {
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    const getMapData = async () => {
      const result = await getEvents();
      setMapData(result);
    };

    getMapData();
  }, []);

  return (
    <>
      <Map data={mapData}/>
      <div id="over_map">
        <Filter />
      </div>
    </>
  );
}
