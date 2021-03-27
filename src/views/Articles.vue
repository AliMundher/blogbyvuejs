<template>
  <div class="container main-articles">
    <div class="row">
      <div class="col-12 col-md-8">
        <h1 class="title">all articles</h1>
        <input
          type="text"
          v-model="search"
          class="form-control mb-3 search"
          placeholder="Search..."
        />
        <div v-for="post in filterSearch" :key="post.id" class="blogs">
          <!-- This is Info of Author -->
          <div class="info">
            <span class="img"></span>
            <div class="sub-info">
              <span class="name">{{ post.author }}</span
              ><br />
              <span class="date">10-20-2020</span>
            </div>
          </div>
          <!-- This is Link Title -->
          <router-link :to="'/details/' + post.id" class="title-link">
            <h1 class="title-post">{{ post.title }}</h1>
          </router-link>
          <!-- This is Text Of Post -->
          <p class="body-post">{{ post.body | short }}</p>
          <!-- This is Category -->
          <div class="cat" v-for="cat in post.cats" :key="cat">
            <span class="name-cat">{{ cat }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      posts: [],
      search: "",
    };
  },
  created() {
    var blogArray = [];
    this.$http
      .get("https://my-blog-e9210-default-rtdb.firebaseio.com/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        for (let key in data) {
          data[key].id = key;
          blogArray.push(data[key]);
        }
        this.posts = blogArray;
      });
  },
  computed: {
    filterSearch() {
      return this.posts.filter((post) => {
        return post.title.match(this.search);
      });
    },
  },
};
</script>

<style scoped lang="scss">
.main-articles {
  .title {
    margin: 30px 0;
    text-transform: capitalize;
    font-size: 2rem;
    color: orange;
  }
  .search {
    margin-bottom: 40px !important;
  }
  .blogs {
    border: 2px solid #777;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 10px;
    .info {
      .img {
        width: 70px;
        height: 70px;
        border: 1px solid #777;
        padding: 20px;
        display: block;
      }
      .sub-info {
        position: relative;
        top: -59px;
        left: 81px;
        .name {
          text-transform: capitalize;
          color: #777;
        }
        .date {
          color: #777;
        }
      }
    }
    .title-post {
      font-size: 1.5rem;
      font-weight: bold;
      margin: -22px 0 17px 0;
      color: orange;
    }
    .title-link {
      &:hover {
        text-decoration: none !important;
      }
    }
    .body-post {
      color: #777;
    }
    .cat {
      display: inline-block;
      margin-right: 10px;
      text-transform: capitalize;
      color: orange;
      font-weight: bold;
      font-size: 0.9rem;
    }
  }
}
</style>
