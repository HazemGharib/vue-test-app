<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <Navbar />
    <div id="main-content" class="container">
      <router-view />
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
