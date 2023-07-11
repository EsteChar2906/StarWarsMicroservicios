import { readFile } from "fs/promises";
const data = await readFile("./src/data/planets.json", "utf-8");
const planets = JSON.parse(data);

export default {
  planetsData: async () => {
    return planets;
  },
};
