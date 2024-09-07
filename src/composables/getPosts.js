import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);
  const url = "http://localhost:3000/posts";

  const load = async () => {
    try {
      // simulate delay
      await new Promise((resolve) => {
        setTimeout(resolve, 1500);
      });
      const data = await fetch(url);
      if (!data.ok) {
        throw new Error("Data not found");
      }
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { posts, error, load };
};

export default getPosts;
