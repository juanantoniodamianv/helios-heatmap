import Axios from "axios";

export async function getEvents(filter) {
  const result = await Axios.get(
    `${process.env.REACT_APP_HEAT_MAP_API_URL}/api/Events?${filter}`
  );

  console.log(result);

  return result;
}
