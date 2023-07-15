require("dotenv").config();

module.exports = {
  PORT: 6000,
  CHARACTERS: process.env.CHARACTERS,
  FILMS: process.env.FILMS,
  PLANETS: process.env.PLANETS,
};
