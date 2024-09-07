import { ref } from "vue";

const getSinglePost = (id) => {
  const posts = ref([]); // Holds all posts
  const post = ref(null); // Holds the single post we want
  const error = ref(null); // Holds any error messages

  const load = async () => {
    try {
      console.log(`Fetching posts from: http://localhost:3000/posts`); // Debug log
      const response = await fetch(`http://localhost:3000/posts`); // Fetch all posts
      console.log(`Response status: ${response.status}`); // Debug log
      if (!response.ok) {
        throw new Error("Failed to fetch data"); // If response is not ok, throw an error
      }

      posts.value = await response.json(); // Assign the fetched data to posts
      console.log("Fetched posts:", posts.value); // Debug log

      post.value = posts.value.find((item) => item.id === parseInt(id)); // Find the post by ID
      console.log("Found post:", post.value); // Debug log

      if (!post.value) {
        throw new Error("Post not found"); // Handle case where the post is not found
      }
    } catch (err) {
      error.value = err.message; // Set error message
      console.error("Error fetching data:", error.value); // Log error for debugging
    }
  };

  return { post, error, load }; // Return refs and load function
};

export default getSinglePost;
