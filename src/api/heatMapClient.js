import Axios from "axios";

export async function getEvents(filter) {
  filter = filter || `filter[fields]=locations&filter[limit]=100`;
  let result = await Axios.get(
    `${process.env.REACT_APP_HEAT_MAP_API_URL}/api/Events?${filter}`
  );
  
  result = result.data.filter((res) => (res?.locations?.situation?.lat && res?.locations?.situation?.lng));

  result = result.map((res) => {
      return {
        lat: res.locations.situation.lat,
        lng: res.locations.situation.lng,
      };
  });

  console.log(result);

  return result;
}
