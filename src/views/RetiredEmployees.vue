<template>
  <div class="container">
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
      <WorkingList v-bind:list="this.$store.state.workingList" class="col s5" />
      <span class="col s2" />
      <RetiredList v-bind:list="this.$store.state.retiredList" class="col s5" />
    </div>
  </div>
</template>

<script>
import WorkingList from "@/components/retired-employees/WorkingList";
import RetiredList from "@/components/retired-employees/RetiredList";
import EmployeesService from "../services/employeesService";

const employeesService = new EmployeesService();

export default {
  name: "RetiredEmployees",
  components: { WorkingList, RetiredList },
  data() {
    return {
      isLoaded: false
    };
  },
  created() {
    employeesService
      .getAllEmployees()
      .then(res => {
        const requestBody = res.data;
        const workingEmployees = requestBody?.data.filter(
          employee => employee.employee_age < 60
        );
        const retiredEmployees = requestBody?.data.filter(
          employee => employee.employee_age >= 60
        );
        this.isLoaded = true;
        this.$store.dispatch("setRetiredList", retiredEmployees);
        this.$store.dispatch("setWorkingList", workingEmployees);
      })
      .catch(err => console.error(err));
  }
};
</script>

<style scoped>
.preloader-wrapper {
  position: absolute;
  top: 20%;
  left: 50%;
  margin-left: -50px;
}
</style>
