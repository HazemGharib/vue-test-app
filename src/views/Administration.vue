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
    <div v-else>
      <h4>Hello {{ user.name }}!!</h4>

      <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">account_circle</i>
          <input disabled id="name" v-model="user.name" type="text" />
          <label class="active" for="name">Name</label>
        </div>

        <div class="input-field col s12">
          <i class="material-icons prefix">email</i>
          <input disabled id="email" v-model="user.email" type="text" />
          <label class="active" for="email">Email</label>
        </div>

        <div class="input-field col s6">
          <i class="material-icons prefix">person_pin_circle</i>
          <input disabled id="f_name" v-model="user.given_name" type="text" />
          <label class="active" for="f_name">Given Name</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">people</i>
          <input disabled id="l_name" v-model="user.family_name" type="text" />
          <label class="active" for="l_name">Family Name</label>
        </div>

        <div class="input-field col s6">
          <i class="material-icons prefix">verified_user</i>
          <p>
            <label>
              <input
                type="checkbox"
                :checked="user.email_verified ? 'checked' : ''"
                disabled="disabled"
              />
              <span>Email Verified</span>
            </label>
          </p>
        </div>

        <div class="input-field col s6">
          <i class="material-icons prefix">language</i>
          <input disabled id="zone" v-model="user.zoneinfo" type="text" />
          <label class="active" for="zone">Zone Info</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false,
      user: {}
    };
  },
  async created() {
    this.$auth.getUser().then(user => {
      this.user = user;
      this.isLoaded = true;
    });
  }
};
</script>

<style>
.input-field p {
  margin-left: 40px;
  margin-top: 10px;
}
.preloader-wrapper {
  position: absolute;
  top: 20%;
  left: 50%;
  margin-left: -50px;
}
</style>
