import axios from "axios";
import ClientError from "./errors/index.js";
import config from "../config/env.js";
const { DATABASE } = config;

export default async (metodo, body = null) => {
  try {
    let data;
    if (metodo === "get") {
      if (body !== null) {
        data = await axios.get(`${DATABASE}/Characters/${body}`);
        return data.data;
      } else {
        data = await axios.get(`${DATABASE}/Characters`);
        return data.data;
      }
    }
    if (metodo === "post") {
      data = await axios.post(`${DATABASE}/Characters`, body);
      return data.data.data;
    }
  } catch (err) {
    const status = err?.response?.status;
    const message = err?.response?.data?.message;
    throw new ClientError(message, status);
  }
};
