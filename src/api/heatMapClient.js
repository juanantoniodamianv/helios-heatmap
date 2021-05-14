import Axios from "axios";

const limit = 1000;

export async function getEvents(dataFilter) {
  let filter = `filter[fields]=locations&filter[limit]=${limit}`; 
  if (dataFilter.situation && dataFilter.situation !== "") {
    filter += `&filter[where][situation]=${dataFilter.situation}`;  
  }
  let result = await Axios.get(
    `${process.env.REACT_APP_HEAT_MAP_API_URL}/api/Events?${filter}`
  );

  result = result.data.filter(
    (res) => res?.locations?.situation?.lat && res?.locations?.situation?.lng
  );

  result = result.map((res) => {
    return {
      lat: res.locations.situation.lat,
      lng: res.locations.situation.lng,
    };
  });

  console.log(result);

  return result;
}
