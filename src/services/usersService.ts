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
}