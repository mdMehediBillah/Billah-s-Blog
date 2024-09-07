<template>
  <main>
    <h1>Post Details</h1>
    <div v-if="error">{{ error }}</div>
    <!-- Display error if exists -->
    <div v-if="post">
      <!-- Display post content if post is loaded -->
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
      <div class="tags">
        <span v-for="tag in post.tags" :key="tag" class="tag">#{{ tag }}</span>
      </div>
    </div>
    <div v-else>Loading...</div>
    <!-- Display loading message while fetching -->
  </main>
</template>

<script>
import getSinglePost from "../composables/getPost.js"; // Correctly import the function
import { useRoute } from "vue-router";

export default {
  name: "PostDetails",
  props: ["id"], // Receive post ID as a prop
  setup() {
    const route = useRoute();
    const { post, error, load } = getSinglePost(route.params.id);
    load(); // Call the load function when the component is mounted

    return { post, error }; // Return reactive references for template usage
  },
};
</script>

<style scoped>
.tag {
  margin: 0 5px;
  padding: 3px 7px;
  background-color: #f0f0f0;
  border-radius: 5px;
}
</style>
