<template>
  <main>
    <h1>Create Post</h1>
    <div class="createPost">
      <form @submit.prevent="handleSubmit">
        <label>Title</label>
        <input
          type="text"
          required
          v-model="title"
          placeholder="add post title"
        />
        <label>Content</label>
        <textarea
          required
          v-model="body"
          placeholder="describe your post"
        ></textarea>
        <label>Tags</label>
        <input
          type="text"
          v-model="tag"
          placeholder="add tags"
          @keydown.enter.prevent="handleAddTag"
        />
        <div class="tags">
          <span v-for="tag in tags" :key="tag" class="tag">#{{ tag }}</span>
        </div>
        <button>Create Post</button>
      </form>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);
    const handleAddTag = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, ""); // remove whitespace
        tags.value.push(tag.value);
      }
      tag.value = "";
    };
    const handleSubmit = async () => {
      const post = { title: title.value, body: body.value, tags: tags.value };
      try {
        const data = await fetch("http://localhost:3000/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(post),
        });
        if (data.ok) {
          title.value = "";
          body.value = "";
          tags.value = [];
          tag.value = "";
          // alert("Post created successfully");
        }
        router.push({ name: "HomeView" });
      } catch (error) {
        console.error(error);
      }
    };
    return { title, body, tag, handleSubmit, tags, handleAddTag };
  },
};
</script>

<style>
h1 {
  text-align: center;
}

form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
  padding: 1rem;
  background: rgb(239, 239, 239);
  border-radius: 0.5rem;
}
.tag {
  padding: 4px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
input,
textarea {
  width: 100%;
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 0.5rem;
  box-sizing: border-box;
  border: none;
}
textarea {
  resize: vertical;
  min-height: 100px;
}
label {
  text-transform: uppercase;
  font-size: -8rem;
  color: rgb(67, 67, 67);
}
.tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 0.5rem 0;
}
button {
  width: 100%;
  background-color: #0b75bd;
  color: white;
  cursor: pointer;
  border-radius: 24px;
  margin-top: 1rem;
  padding: 0.5rem;
  border: none;
  font-size: 1rem;
}
button:hover {
  background-color: #0a5a8a;
}
</style>
