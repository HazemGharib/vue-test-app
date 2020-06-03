import axios from "axios";

const baseUrl = "http://dummy.restapiexample.com/api/v1";

export default class EmployeesService {
  getAllEmployees() {
    return axios.get(`${baseUrl}/employees`);
  }

  createEmployee(employee) {
    if (!employee) throw { message: "No employee object provided" };
    return axios.post(`${baseUrl}/create`, {
      name: employee.name,
      salary: employee.salary,
      age: employee.name
    });
  }
}
