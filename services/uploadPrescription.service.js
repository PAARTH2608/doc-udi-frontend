import Axios from "axios";

import { BASE_API_URL } from "./constants";

class AuthService {
  async uploadPrescription(item) {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
      },
    };
    try {
      const response = await Axios.post(
        `${BASE_API_URL}/doc/upload-prescription`,
        item,
        config
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
export default AuthService;
