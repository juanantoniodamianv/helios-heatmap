import Axios from "axios";

const limit = 1000;

export async function getEvents(dataFilter) {
  let filter = `filter[fields]=locations&filter[fields]=providerDistance&filter[limit]=${limit}`;
  if (dataFilter.situation && dataFilter.situation !== "") {
    filter += `&filter[where][situation]=${dataFilter.situation}`;
  }
  let result = await Axios.get(
    `${process.env.REACT_APP_HEAT_MAP_API_URL}/api/Events?${filter}`
  );

  let avgDistance = 0;
  if (dataFilter.situation && dataFilter.situation !== "") {
    avgDistance = Math.round(averageDistance(result.data) / 1000);
  }

  result = result.data.filter(
    (res) => res?.locations?.situation?.lat && res?.locations?.situation?.lng
  );

  result = result.map((res) => {
    return {
      lat: res.locations.situation.lat,
      lng: res.locations.situation.lng,
      avgDistance: avgDistance,
    };
  });

  return result;
}

export function averageDistance(events) {
  let total = 0;
  const countEvents = events.length;

  for (const event of events) {
    total += event.providerDistance ? event.providerDistance : 0;
  }

  return total > 0 ? total / countEvents : 0;
}
