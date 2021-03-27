<template>
  <div class="home">
    <div class="container">
      <ComHome />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ComHome from "@/components/ComHome.vue";

export default {
  name: "Home",
  components: {
    ComHome,
  },
};
</script>
