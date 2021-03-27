<template>
  <div class="about">
    <div class="container">
      <h1>This is an about page</h1>
      <CompAbout />
    </div>
  </div>
</template>

<script>
import CompAbout from "../components/ComAbout";

export default {
  name: "About",
  components: {
    CompAbout,
  },
};
</script>
