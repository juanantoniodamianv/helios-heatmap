import React, { useState, useEffect } from "react";
import Filter from "../components/filter";
import Map from "../components/map";
import { getEvents } from "../api/heatMapClient";

export default function MainPage() {
  const [mapData, setMapData] = useState([]);
  const [situation, setSituation] = useState(null);
  const [dateSince, setDateSince] = useState(null);
  const [dateTo, setDateTo] = useState(null);

  useEffect(() => {
    const getMapData = async () => {
      const result = await getEvents({ situation, dateSince, dateTo });
      setMapData(result);
    };

    getMapData();
    return setMapData([]);
  }, [situation, dateSince, dateTo]);

  const onChangeDateSince = (event) => {
    setDateSince(event.target.value);
  };

  const onChangeDateTo = (event) => {
    setDateTo(event.target.value);
  };

  const onChangeSituation = (event) => {
    setSituation(event.target.value);
  };

  return (
    <>
      <Map data={mapData} />
      <div id="over_map">
        <Filter
          onChangeSituation={() => onChangeSituation}
          onChangeDateSince={() => onChangeDateSince}
          onChangeDateTo={() => onChangeDateTo}
          data={mapData}
        />
      </div>
    </>
  );
}
