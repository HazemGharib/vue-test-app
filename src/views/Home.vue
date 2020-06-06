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
      <div class="col card" v-for="user in users" :key="user.id">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" :src="user.avatar" />
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">
            {{ user.first_name + " " + user.last_name }}
            <i class="material-icons right">more_vert</i>
          </span>
          <p>ID# {{ user.id }}</p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            {{ user.first_name + " " + user.last_name }}
            <i class="material-icons right">close</i>
          </span>
          <p>Email: {{ user.email }}</p>
          <p>
            Avatar:
            <a :href="user.avatar">{{
              user.first_name + " " + user.last_name
            }}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UsersService from "../services/usersService";

const usersService = new UsersService();

export default {
  name: "Home",
  data() {
    return {
      users: [],
      isLoaded: false
    };
  },
  created() {
    if (this.users.length != 0) return;
    usersService
      .getAllUsers()
      .then(res => {
        const requestBody = res.data;
        this.users = requestBody?.data;
        this.isLoaded = true;
      })
      .catch(err => console.error(err));
  }
};
</script>

<style scoped>
p {
  overflow-wrap: break-word;
}

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
