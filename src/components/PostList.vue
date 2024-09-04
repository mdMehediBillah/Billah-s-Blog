<template>
  <main>
    <h1>Post list</h1>
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </main>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "vue";
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
  setup(props) {
    onMounted(() => {
      console.log("Component mounted");
    });
    onUnmounted(() => {
      console.log("Component unmounted");
    });
    onUpdated(() => {
      console.log("Component updated");
    });
  },
};
</script>

<style></style>
