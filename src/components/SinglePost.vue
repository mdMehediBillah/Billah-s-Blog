<template>
  <main>
    <router-link :to="{ name: 'DetailsView', params: { id: post.id } }">
      <h2>{{ post.title }}</h2>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag" class="tag">#{{ tag }}</span>
  </main>
</template>

<script>
import { computed } from "vue";

export default {
  name: "SinglePost",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.slice(0, 250) + "...";
      // return props.post.body.substring(0, 250) + "...";
      // Both slice and substring will work here
    });
    return {
      snippet,
    };
  },
};
</script>

<style>
.tag {
  margin-right: 5px;
  color: #242424;
  background-color: #cfcfcf;
  padding: 3px 8px;
  border-radius: 5px;
}
</style>
