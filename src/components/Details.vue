<template>
  <div class="container">
    <h1>details</h1>
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      id: this.$route.params.id,
      post: [],
    };
  },
  created() {
    this.$http
      .get(
        `https://my-blog-e9210-default-rtdb.firebaseio.com/blogs/${
          this.id + ".json"
        }`
      )
      .then((res) => {
        this.post = res.data;
      });
  },
};
</script>

<style scoped></style>
