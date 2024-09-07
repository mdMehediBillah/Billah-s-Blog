<template>
  <header class="headerHome">
    <h2 class="logo">Billah's Blog</h2>
    <nav>
      <router-link :to="{ name: 'HomeView' }">Home</router-link>
      <router-link :to="{ name: 'CreatePost' }">Create Post</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
.headerHome {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(124, 9, 80);
}
.logo {
  color: rgb(124, 9, 80);
  font-size: 3rem;
}
nav a {
  color: rgb(65, 65, 65);
  text-decoration: none;
  margin-left: 10px;
}
nav a:hover {
  color: rgb(124, 9, 80);
}
nav a.router-link-exact-active {
  color: rgb(37, 102, 215);
  font-size: 1rem;
  font-weight: bold;
}
</style>
