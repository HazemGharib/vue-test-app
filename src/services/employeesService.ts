import axios from "axios";
import { Employee } from "../types/employee";

/** @deprecated Moving to reqres.in */
const baseUrl = "http://dummy.restapiexample.com/api/v1";

export default class EmployeesService {
  /** @deprecated Moving to reqres.in */
  getAllEmployees() {
    return axios.get(`${baseUrl}/employees`);
  }

  /** @deprecated Moving to reqres.in */
  createEmployee(employee: Employee) {
    if (!employee) throw { message: "No employee object provided" };
    return axios.post(`${baseUrl}/create`, {
      name: employee.name,
      salary: employee.salary,
      age: employee.age
    });
  }
}
