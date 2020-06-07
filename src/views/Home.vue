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
      <div class="col s7">
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
            <p>
              <input
                class="waves-effect waves-light btn"
                @click="checkout(596225)"
                type="button"
                value="Hire now!"
              />
            </p>
          </div>
        </div>
      </div>
      <div class="col s5">
        <div class="checkout-container">
          <h4 v-if="isEmptyCheckout">Nothing to checkout</h4>
        </div>
        <div class="overlay-button">
          <a href="#!" class="paddle_button" data-product="596225">Buy Now!</a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s4 offset-s5">
        <ul class="pagination">
          <li
            data-position="left"
            data-tooltip="First"
            :class="
              (currentPage == 1 ? 'disabled' : 'waves-effect') + ' tooltipped'
            "
          >
            <a @click="currentPage != 1 ? navigate(1, true) : null"
              ><i class="material-icons">chevron_left</i></a
            >
          </li>
          <li
            :class="currentPage == i ? 'active' : 'waves-effect'"
            :key="i"
            v-for="i in totalPages"
          >
            <a @click="currentPage != i ? navigate(i, true) : null">{{ i }}</a>
          </li>
          <li
            data-position="right"
            data-tooltip="Last"
            :class="
              (currentPage == totalPages ? 'disabled' : 'waves-effect') +
                ' tooltipped'
            "
          >
            <a
              @click="
                currentPage != totalPages ? navigate(totalPages, true) : null
              "
              ><i class="material-icons">chevron_right</i></a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import M from "../../node_modules/materialize-css/dist/js/materialize.min.js";

import UsersService from "../services/usersService";
import router from "../router";

const usersService = new UsersService();

$(document).ready(function() {
  M.Tooltip.init($(".tooltipped"), []);
});

export default {
  name: "Home",
  data() {
    return {
      users: [],
      currentPage: 0,
      totalPages: 0,
      router,
      isLoaded: false,
      isEmptyCheckout: true
    };
  },
  created() {
    if (this.users.length != 0) return;
    this.navigate(this.$route.query.page || 1);
  },
  methods: {
    navigate: function(page, pushRoute = false) {
      usersService.getAllProducts().then(results => console.log(results.data));
      usersService
        .getAllUsers(page)
        .then(res => {
          const requestBody = res.data;
          this.currentPage = requestBody?.page;
          this.totalPages = requestBody?.total_pages;
          this.users = requestBody?.data;
          this.isLoaded = true;
        })
        .then(() => {
          if (pushRoute) router.push(`/?page=${page}`);
        })
        .then(() => window.Paddle.Setup({ vendor: 115775 }))
        .catch(err => console.error(err));
    },
    checkout: function(product) {
      this.isEmptyCheckout = false;
      window.Paddle.Checkout.open({
        method: "inline",
        product: product,
        allowQuantity: false,
        disableLogout: true,
        frameTarget: "checkout-container",
        frameInitialHeight: 416,
        frameStyle:
          "width:495px; min-width:495px; background-color: transparent; border: none;"
      });
    }
  }
};
</script>

<style scoped>
p {
  overflow-wrap: break-word;
}

.card {
  margin: 2rem 2rem;
  width: 20rem;
  height: 28rem;
}

.overlay-button {
  margin-top: 10%;
}

.checkout-container {
  border: 1px black solid;
  height: fit-content;
  margin-top: 3rem;
}

.checkout-container h4 {
  width: 320px;
  margin: 1rem auto;
}

.preloader-wrapper {
  position: absolute;
  top: 20%;
  left: 50%;
  margin-left: -50px;
}
</style>
