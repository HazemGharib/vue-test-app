<template>
  <div class="row container">
    <h1>Add new employee</h1>
    <form id="employee" class="col s12" action="#">
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input id="name" v-model="name" type="text" class="validate" />
          <label for="name">Full Name</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">today</i>
          <input id="age" v-model="age" type="text" class="validate" />
          <label for="age">Age</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">attach_money</i>
          <input id="salary" v-model="salary" type="text" class="validate" />
          <label for="salary">Salary</label>
        </div>
      </div>

      <div class="row">
        <button class="btn waves-effect waves-light" @click="submit">
          Submit
          <i class="material-icons right">send</i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import EmployeesService from "../services/employeesService";
import router from "../router";

const employeesService = new EmployeesService();

export default {
  name: "Employee",
  data() {
    return {
      name: "",
      age: "",
      salary: ""
    };
  },
  methods: {
    submit: function() {
      const employee = {
        name: this.name,
        age: this.age,
        salary: this.salary
      };

      employeesService
        .createEmployee(employee)
        .then(res => {
          const requestBody = res.data;
          console.log(requestBody);
          router.push("/");
        })
        .catch(err => console.error(err));
    }
  }
};
</script>

<style scoped>
form {
  margin-top: 5rem;
}
</style>
