<template>
  <div>
    <div v-if="!isLoaded" class="preloader-wrapper big active">
      <div class="spinner-layer spinner-green-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
    <div v-else class="row">
      <div class="col card" v-for="employee in employees" :key="employee.id">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="../assets/nature.jpeg" />
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">
            {{ employee.employee_name }}
            <i class="material-icons right">more_vert</i>
          </span>
          <p>{{ employee.employee_age }} years old</p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            {{ employee.employee_name }}
            <i class="material-icons right">close</i>
          </span>
          <p>
            {{ employee.employee_name }} earns L.E.
            {{ employee.employee_salary }}
            anually.
          </p>
          <p>
            Which is L.E. {{ Math.floor(employee.employee_salary / 12) }}
            monthly.
          </p>
          <p>
            That's L.E. {{ Math.floor(employee.employee_salary / 12 / 4) }}
            weekly.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeesService from "../services/employeesService";

const employeesService = new EmployeesService();

export default {
  name: "Home",
  data() {
    return {
      employees: [],
      isLoaded: false
    };
  },
  created() {
    if (this.employees.length != 0) return;
    employeesService
      .getAllEmployees()
      .then(res => {
        const requestBody = res.data;
        this.employees = requestBody?.data;
        this.isLoaded = true;
      })
      .catch(err => console.error(err));
  }
};
</script>

<style scoped>
.card {
  margin: 10px;
  width: 30%;
}

.preloader-wrapper {
  position: absolute;
  top: 20%;
  left: 50%;
  margin-left: -50px;
}
</style>
