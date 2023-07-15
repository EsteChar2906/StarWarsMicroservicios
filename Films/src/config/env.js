import { config } from "dotenv";
config();
export default {
  PORT: 6002,
  DATABASE: process.env.DATABASE,
};
