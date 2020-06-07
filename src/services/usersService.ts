/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { User, UserResponse } from "../types/user";

const baseUrl = "https://reqres.in/api";

export default class UsersService {
  getAllUsers(page = undefined) {
    return axios.get(`${baseUrl}/users${page ? `/?page=${page}` : ""}`);
  }

  createUser(user: User): Promise<UserResponse> {
    if (!user) throw { message: "No user object provided" };
    return axios.post(`${baseUrl}/users`, {
      name: user.name,
      job: user.job
    });
  }

  getAllProducts(): Promise<any> {
    const data = {
      vendor_id: process.env.VUE_APP_VENDOR_ID,
      vendor_auth_code: process.env.VUE_APP_AUTH_CODE
    };

    return axios({
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/json"
      },
      data: JSON.stringify(data),
      url: "https://vendors.paddle.com/api/2.0/product/get_products"
    });
  }
}
