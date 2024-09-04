<template>
  <main>
    <h2>{{ post.title }}</h2>
    <p>{{ snippet }}</p>
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

<style></style>
