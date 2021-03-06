import Axios from "axios";

const limit = 1000;

export async function getEvents(dataFilter) {
  let filter = `filter[fields]=locations&filter[fields]=account&filter[fields]=providerDistance&filter[limit]=${limit}`;

  if (dataFilter.situation && dataFilter.situation !== "") {
    filter += `&filter[where][situation]=${dataFilter.situation}`;
  }
  if (dataFilter.dateSince) {
    filter += `&filter[where][date][gte]=${dataFilter.dateSince}`;
  }
  if (dataFilter.dateTo) {
    filter += `&filter[where][date][lte]=${dataFilter.dateTo}`;
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

  const accountsCount = eventsByAccountsCount(result);

  const eventPositions = result.map((res) => {
    return {
      lat: res.locations.situation.lat,
      lng: res.locations.situation.lng,
      avgDistance: avgDistance,
    };
  });

  return { eventPositions, accountsCount };
}

function eventsByAccountsCount(events) {
  let accounts = {};
  events.forEach((res) => {
    !accounts[res.account]
      ? (accounts[res.account] = 1)
      : accounts[res.account]++;
  });
  return Object.entries(accounts).sort((a, b) => b[1] - a[1]);
}

export function averageDistance(events) {
  let total = 0;
  const countEvents = events.length;

  for (const event of events) {
    total += event.providerDistance ? event.providerDistance : 0;
  }

  return total > 0 ? total / countEvents : 0;
}
