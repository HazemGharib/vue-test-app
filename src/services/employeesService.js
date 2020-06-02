import axios from "axios";

const baseUrl = "http://dummy.restapiexample.com/api/v1";

export default class EmployeesService {
  getAllEmployees() {
    return axios.get(`${baseUrl}/employees`);
  }
}
