import { config } from "dotenv";
config();
export default {
  PORT: process.env.PORT,
  DATABASE: process.env.DATABASE,
};
