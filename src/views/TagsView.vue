<template>
  <main>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <div v-if="postWithTags.length">
        <PostList :posts="postWithTags" />
      </div>
      <div v-else>
        <Spinner />
      </div>
    </div>
    <div>
      <div class="tags"></div>
    </div>
  </main>
</template>

<script>
import Spinner from "@/components/Spinner.vue";
import getPosts from "@/composables/getPosts";
import getSinglePost from "@/composables/getPost";
import { useRoute } from "vue-router";
import { computed } from "vue";
import PostList from "@/components/PostList.vue";
export default {
  name: "TagsView",
  components: { Spinner, PostList },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();
    load();

    const postWithTags = computed(() => {
      return posts.value.filter((post) => {
        return post.tags.includes(route.params.tag);
      });
    });
    return { posts, error, postWithTags };
  },
};
</script>

<style></style>
