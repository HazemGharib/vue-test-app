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
      <MovingList
        buttonDirection="to-right"
        class="col s5"
        :list="this.$store.state.leftList"
        listName="Left List"
      />
      <span class="col s2" />
      <MovingList
        buttonDirection="to-left"
        class="col s5"
        :list="this.$store.state.rightList"
        listName="Right List"
      />
    </div>
  </div>
</template>

<script>
import MovingList from "@/components/move-users/MovingList";

import UsersService from "../services/usersService";

const usersService = new UsersService();

export default {
  name: "MoveUsers",
  components: { MovingList },
  data() {
    return {
      isLoaded: false
    };
  },
  created() {
    Promise.all([
      usersService
        .getAllUsers(1)
        .then(res => {
          const requestBody = res.data;
          const leftList = requestBody?.data;
          this.$store.dispatch("setLeftList", leftList);
        })
        .catch(err => console.error(err)),
      usersService
        .getAllUsers(2)
        .then(res => {
          const requestBody = res.data;
          const rightList = requestBody?.data;
          this.$store.dispatch("setRightList", rightList);
        })
        .catch(err => console.error(err))
    ]).then(() => {
      this.isLoaded = true;
      console.log(this.$store.state.leftList);
      console.log(this.$store.state.rightList);
    });
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
