<template>
  <div class="add-post">
    <div class="container">
      <h1 class="title-add">Add Post</h1>
      <div class="row">
        <div class="col-12 col-md-6">
          <form>
            <label for="title" class="text-capitalize">title</label>
            <input
              type="text"
              class="form-control mb-3"
              v-model="post.title"
              id="title"
            />
            <label for="body" class="text-capitalize">post</label>
            <textarea class="form-control mb-3" v-model="post.body" id="body" />

            <label for="author" class="text-capitalize">author</label>
            <input
              type="text"
              class="form-control mb-3"
              v-model="post.author"
              id="author"
            />
            <label for="sport" class="text-capitalize mr-2">sport</label>
            <input
              type="checkbox"
              class="mr-3"
              v-model="post.cats"
              id="sport"
              value="sport"
            />

            <label for="food" class="text-capitalize mr-2">food</label>
            <input type="checkbox" v-model="post.cats" id="food" value="food" />

            <label for="prog" class="text-capitalize mx-2">programation</label>
            <input
              type="checkbox"
              v-model="post.cats"
              id="prog"
              value="program"
            />

            <label for="tech" class="text-capitalize mx-2">tech</label>
            <input
              type="checkbox"
              v-model="post.cats"
              id="tech"
              value="tech"
            /><br /><br />

            <button
              class="text-capitalize btn btn-primary"
              @click.prevent="subMist"
            >
              add
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Add",
  data() {
    return {
      post: {
        title: "",
        body: "",
        author: "",
        cats: [],
      },
    };
  },
  methods: {
    subMist() {
      this.$http.post(
        "https://my-blog-e9210-default-rtdb.firebaseio.com/blogs.json",
        this.post
      );
    },
  },
};
</script>

<style scoped lang="scss">
.add-post {
  .title-add {
    margin: 27px 0;
    font-size: 1.8rem;
  }
  form {
    label {
      font-weight: bold;
      font-size: 0.9rem;
    }
  }
}
</style>
