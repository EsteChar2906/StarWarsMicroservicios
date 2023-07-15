import { config } from "dotenv";
config();
export default {
  PORT: 6003,
  DATABASE: process.env.DATABASE,
};
