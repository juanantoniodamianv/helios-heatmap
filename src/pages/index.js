import React from "react";
import Filter from "../components/filter";
import Map from "../components/map";

export default function MainPage() {
  return (
    <>
      <Map />
      <div id="over_map">
        <Filter />
      </div>
    </>
  );
}
