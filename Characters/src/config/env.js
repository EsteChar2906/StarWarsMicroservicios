import { config } from "dotenv";
config();
export default {
  PORT: 6001,
  DATABASE: process.env.DATABASE,
};
