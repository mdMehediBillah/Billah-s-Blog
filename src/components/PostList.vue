<template>
  <main>
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </main>
</template>

<script>
import SinglePost from "./SinglePost.vue";

export default {
  name: "PostList",
  components: { SinglePost },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  setup() {},
};
</script>

<style></style>
