import Axios from "axios";

import { BASE_API_URL } from "./constants";

class AuthService {
  async signup(item) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
      }
    };
    try {
      const response = await Axios.post(`${BASE_API_URL}/doc/create-doc`, item, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
export default AuthService;
