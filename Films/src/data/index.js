import { readFile } from "fs/promises";
const data = await readFile('./src/data/films.json', 'utf-8');
const films = JSON.parse(data);

export default {
    filmsData: async() => {
        return films;
    }
};