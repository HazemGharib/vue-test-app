<template>
  <div class="row container">
    <h3>Add new user</h3>
    <form id="user" class="col s12" action="#">
      <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">account_circle</i>
          <input id="name" v-model="name" type="text" class="validate" />
          <label for="name">Full Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">work</i>
          <input id="job" v-model="job" type="text" class="validate" />
          <label for="job">Job</label>
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
import UsersService from "../services/usersService";
import router from "../router";

const usersService = new UsersService();

export default {
  name: "User",
  data() {
    return {
      name: "",
      job: ""
    };
  },
  methods: {
    submit: function() {
      const user = {
        name: this.name,
        job: this.job
      };

      usersService
        .createUser(user)
        .then(res => {
          const requestBody = res.data;
          console.log(requestBody);
          router.push(`/#${requestBody.id}`);
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
