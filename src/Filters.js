import Vue from "vue";

Vue.filter("short", (v) => {
  return v.substring(0, 260) + "...";
});
