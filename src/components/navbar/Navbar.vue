<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="/">Navbar</a>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <router-link to="/" tag="li" class="nav-item">
            <a class="text-capitalize">home</a>
          </router-link>
          <router-link to="/about" tag="li" class="nav-item">
            <a class="text-capitalize">about</a>
          </router-link>
          <router-link to="/addpost" tag="li" class="nav-item">
            <a class="text-capitalize">add post</a>
          </router-link>
          <router-link to="/articles" tag="li" class="nav-item">
            <a class="text-capitalize">articles</a>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
<style scoped lang="scss">
nav {
  ul {
    li {
      a {
        padding-right: 20px;
      }
    }
  }
}
</style>
