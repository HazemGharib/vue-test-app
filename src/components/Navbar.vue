<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <div class="">
          <a href="#" class="brand-logo">Vue Test App</a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"
            ><i class="material-icons">menu</i></a
          >
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <router-link tag="li" to="/"><a>Home</a></router-link>
            <router-link tag="li" to="/admin"><a>Administration</a></router-link>
            <router-link tag="li" to="/user"><a>Add New User</a></router-link>
            <router-link tag="li" to="/move"><a>Move Users</a></router-link>
            <router-link tag="li" to="/about"><a>About</a></router-link>
            <li v-if="authenticated" @click.prevent="logout" id="logout-btn">
              <a class="waves-effect waves-light btn">Logout</a>
            </li>
            <li v-else @click.prevent="$auth.loginRedirect('/')" id="login-btn">
              <a class="waves-effect waves-light btn">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <ul class="sidenav" id="mobile-demo">
      <router-link tag="li" to="/"><a @click="closeSidenav">Home</a></router-link>
      <router-link tag="li" to="/admin"><a @click="closeSidenav">Administration</a></router-link>
      <router-link tag="li" to="/user"><a @click="closeSidenav">New User</a></router-link>
      <router-link tag="li" to="/move"><a @click="closeSidenav">Move Users</a></router-link>
      <router-link tag="li" to="/about"><a @click="closeSidenav">About</a></router-link>
      <li v-if="authenticated" @click.prevent="logout" id="logout-btn">
        <a class="waves-effect waves-light btn">Logout</a>
      </li>
      <li v-else @click.prevent="$auth.loginRedirect('/')" id="login-btn">
        <a class="waves-effect waves-light btn">Login</a>
      </li>
    </ul>
  </div>
</template>

<script>
import $ from "jquery";
import M from "../../node_modules/materialize-css/dist/js/materialize.min.js";

$(document).ready(function() {
  M.Sidenav.init($(".sidenav"), []);
});

export default {
  data() {
    return {
      authenticated: false
    };
  },
  created() {
    this.isAuthenticated();
  },
  watch: {
    $route: "isAuthenticated"
  },
  methods: {
    closeSidenav: function() {
      M.Sidenav.getInstance($(".sidenav")).close();
    },
    isAuthenticated: async function() {
      this.authenticated = await this.$auth.isAuthenticated();
    },
    logout: async function() {
      await this.$auth.logout();
      await this.isAuthenticated();

      this.$router.push({ path: "/" });
    }
  }
};
</script>
