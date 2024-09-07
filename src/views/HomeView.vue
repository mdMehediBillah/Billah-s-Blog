<template>
  <main>
    <h1>Welcome to Billah's Blog</h1>
    <p class="para">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi sapiente
      odio pariatur cumque sunt quas. Perferendis excepturi tenetur molestiae ex
      blanditiis optio officiis at odio vero, quae alias reprehenderit
      necessitatibus?
    </p>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
    <TagCloud :posts="posts" />
  </main>
</template>

<script>
import PostList from "@/components/PostList.vue";
import Spinner from "@/components/Spinner.vue";
import TagCloud from "@/components/TagCloud.vue";
import getPosts from "@/composables/getPosts";
export default {
  name: "HomeView",
  components: { PostList, Spinner, TagCloud },
  setup() {
    const { posts, error, load } = getPosts();
    load();
    return { posts, error, TagCloud };
  },
};
</script>

<style>
.para {
  text-align: center;
  font-size: 1.2rem;
  margin: 20px auto;
  width: 80%;
}
</style>
