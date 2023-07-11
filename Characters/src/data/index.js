import { readFile } from "fs/promises";
const data = await readFile('./src/data/characters.json', 'utf-8');
const characters = JSON.parse(data);

export default {
    characters: async () => {
        return characters;
    }
}