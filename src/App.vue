<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <Navbar />
    <div id="main-content" class="container">
      <transition name="slide" mode="out-in">
        <router-view />
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";

export default {
  name: "App",
  components: { Navbar, Footer }
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: scale3d(0.5, 0.2, 0.5);
}
div#app {
  position: relative;
  min-height: 100vh;
}
div#main-content {
  padding-bottom: 17rem;
}
@media only screen and (min-width: 770px) {
  div#main-content {
    padding-bottom: 24rem;
  }
}
</style>
