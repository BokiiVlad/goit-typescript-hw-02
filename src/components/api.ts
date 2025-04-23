import axios, { AxiosResponse } from "axios";
import { Images } from "../types";

export default async function queryServer(
  queryValue: string,
  page: number
): Promise<Images[]> {
  const paramsValue = {
    params: {
      orientation: "landscape",
      client_id: "j2m5CnZbXuFFpKZA6Aczf6nWhu_eX1W5fkXlkYx1S7A",
      query: queryValue,
      page: page,
      per_page: 3,
    },
  };
  const queryResult: AxiosResponse<{ results: Images[] }> = await axios.get(
    "https://api.unsplash.com/search/photos",
    paramsValue
  );
  return queryResult.data.results;
}
