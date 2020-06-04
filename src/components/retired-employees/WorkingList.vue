<template>
  <div class="container">
    <h4>{{ "Working List".toUpperCase() }}</h4>
    <p class="center help-text" v-if="multiple === 'true'">
      (Use ctrl or cmd to select multiple)
    </p>
    <div class="row">
      <div class="col s12">
        <select
          multiple="true"
          v-bind:class="{ 'fix-height': multiple === 'true' }"
          v-model="multipleSelections"
        >
          <option v-for="employee in list" :value="employee" :key="employee.id">
            {{ employee.employee_name }} - {{ employee.employee_age }}
          </option>
        </select>
      </div>
    </div>
    <div class="row">
      <button
        @click="send"
        class="col offset-s3 s6 btn waves-effect waves-light"
      >
        <i class="material-icons">navigate_next</i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data: function() {
    return {
      multipleSelections: [],
      multiple: "true"
    };
  },
  methods: {
    send: function() {
      this.$store.dispatch("setRetiredList", [
        ...this.multipleSelections,
        ...this.$store.state.retiredList
      ]);
      this.$store.dispatch("setWorkingList", [
        ...this.$store.state.workingList.filter(
          emp => !this.multipleSelections.includes(emp)
        )
      ]);
    }
  }
};
</script>

<style scoped>
* {
  font-family: Roboto;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}
p.center {
  text-align: center;
}
p.help-text {
  margin: 0;
}
.container {
  width: 250px;
  background: white;
  box-shadow: 1px 1px 3px #000;
  padding: 10px;
  margin-top: 5rem;
}
h4 {
  text-align: center;
  margin: 0;
  padding: 10px 0 5px 0;
}
select {
  background-color: #e1eceb;
  box-shadow: inset 1px 1px 3px 0px black;
  display: block;
  margin: 2rem 0;
  padding: 3px;
  width: 100%;
  border-radius: 3px;
}
select.fix-height {
  height: 100px;
}
options {
  padding: 10px;
  margin: 2px;
  border: 1px solid #052f5f;
  background: linear-gradient(rgb(255, 255, 255), rgb(224, 224, 224));
  color: #052f5f;
  border-radius: 3px;
  box-shadow: 0 0 3px #000;
  cursor: pointer;
}
options.active {
  border: 1px solid white;
  background: linear-gradient(#0e4f9a, #052f60);
  color: white;
}
/* width */
::-webkit-scrollbar {
  width: 0.8rem;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #26a69a;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #2bbbad;
}
</style>
