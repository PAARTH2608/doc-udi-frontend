import Axios from "axios";

import { BASE_API_URL } from "./constants";

class AuthService {
  async getAppointments(item) {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
      }
    };
    try {
      const response = await Axios.post(`${BASE_API_URL}/doc/upcoming-appointments`, item, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
export default AuthService;
