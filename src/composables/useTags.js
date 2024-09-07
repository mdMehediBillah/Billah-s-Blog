import { ref } from "vue";

const useTags = (posts) => {
  const tags = ref([]); // Holds all tags
  const tagSet = new Set(); // Holds unique tags

  // Iterate over each post and add its tags to the Set
  posts.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag));
  });

  tags.value = [...tagSet]; // Assign the unique tags to the tags ref

  return { tags }; // Return refs
};

export default useTags;
