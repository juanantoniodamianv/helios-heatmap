import React, { useState, useEffect } from "react";
import Filter from "../components/filter";
import Map from "../components/map";
import { getEvents } from "../api/heatMapClient";

export default function MainPage() {
  const [mapData, setMapData] = useState([]);
  const [situation, setSituation] = useState(null);

  useEffect(() => {
    const getMapData = async () => {
      const result = await getEvents({ situation });
      setMapData(result);
    };

    getMapData();
  }, [situation]);

  const onChangeSituation = (event) => {
    console.log(event.target.value);
    setSituation(event.target.value);
  };

  return (
    <>
      <Map data={mapData} />
      <div id="over_map">
        <Filter onChangeSituation={() => onChangeSituation}/>
      </div>
    </>
  );
}
