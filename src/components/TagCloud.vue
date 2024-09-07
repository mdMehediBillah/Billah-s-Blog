<template>
  <div>
    <h1>Tag Cloud</h1>
    <p>Tags will be displayed here</p>
    <div v-if="tags.length">
      <div v-for="tag in tags" :key="tag" class="tags">
        <router-link :to="{ name: 'Tag', params: { tag: tag } }">
          <span class="tag">#{{ tag }}</span>
        </router-link>
      </div>
    </div>
    <div v-else>No tag found</div>
  </div>
</template>

<script>
import useTags from "@/composables/useTags";

export default {
  name: "TagCloud",
  props: ["posts"],
  setup(props) {
    const { tags } = useTags(props.posts);
    console.log(tags);
    return { tags };
  },
};
</script>

<style></style>
