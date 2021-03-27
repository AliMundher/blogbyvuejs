<template>
  <div class="add-post">
    <div class="container">
      <h1 class="title-add">Add Post</h1>
      <h2 class="error">{{ post.MsgError }}</h2>
      <div class="row">
        <div class="col-12 col-md-6">
          <form>
            <label for="title" class="text-capitalize">title</label>
            <input
              type="text"
              class="form-control mb-3"
              v-model="post.title"
              id="title"
              required
            />
            <label for="body" class="text-capitalize">post</label>
            <textarea
              class="form-control mb-3"
              v-model="post.body"
              id="body"
              required
            />

            <label for="author" class="text-capitalize">author</label>
            <input
              type="text"
              class="form-control mb-3"
              v-model="post.author"
              id="author"
              required
            />
            <label for="sport" class="text-capitalize mr-2">sport</label>
            <input
              type="checkbox"
              class="mr-3"
              v-model="post.cats"
              id="sport"
              value="sport"
              required="true"
            />

            <label for="food" class="text-capitalize mr-2">food</label>
            <input
              type="checkbox"
              v-model="post.cats"
              id="food"
              value="food"
              required="true"
            />

            <label for="prog" class="text-capitalize mx-2">programation</label>
            <input
              type="checkbox"
              v-model="post.cats"
              id="prog"
              value="program"
              required="true"
            />

            <label for="tech" class="text-capitalize mx-2">tech</label>
            <input
              type="checkbox"
              v-model="post.cats"
              id="tech"
              value="tech"
              required="true"
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
        MsgError: "",
      },
    };
  },
  methods: {
    subMist() {
      if (!this.post.title) {
        this.post.MsgError = "Please enter the all Fields";
      } else {
        this.post.MsgError = "";
        this.$http.post(
          "https://my-blog-e9210-default-rtdb.firebaseio.com/blogs.json",
          this.post
        );
        this.post.title = "";
        this.post.body = "";
        this.post.author = "";
      }
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
  .error {
    font-size: 1.5rem;
    color: red;
  }
  form {
    label {
      font-weight: bold;
      font-size: 0.9rem;
    }
  }
}
</style>
