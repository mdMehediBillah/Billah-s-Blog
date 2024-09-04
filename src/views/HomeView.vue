<template>
  <main>
    <h1>Home page</h1>
    <!-- <input type="text" v-model="search" />
    <p>Search term - {{ search }}</p> -->
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">Delete a post</button>
  </main>
</template>

<script>
import PostList from "@/components/PostList.vue";
import { ref } from "vue";

export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    const posts = ref([
      {
        id: 1,
        title: "welcome to the blog",
        body: "Ea corporis nemo vel quod ratione eos incidunt aliquam sit laboriosam quos in rerum iure aut saepe nisi. In reprehenderit aliquam ut suscipit amet eum architecto fugit sed Quis quae cum corporis numquam qui commodi dolores sed amet adipisci Aut ipsam possimus est odit voluptas et quis ipsa qui adipisci dolorem et beatae Quis. Et pariatur magni sed voluptatem maiores qui omnis illum id aperiam facilis sit praesentium natus Eum quam tenetur qui maxime dolore non fuga facilis est ratione autem eum autem ducimus est blanditiis cumque. Sed aliquid illo sit velit sint ut sint rerum a magni commodi et obcaecati sapiente non voluptates omnis et dolorem nemo. Eos temporibus odio et delectus internos et maiores commodi qui dolore dicta 33 dolor voluptatibus! Ut fuga architecto sed rerum similique ex tenetur facilis sit aperiam deleniti eos enim magnam Aut illo assumenda et laborum accusantium aut alias saepe qui quidem explicabo. Ex ipsum doloremque eum molestiae quae ea quia eveniet id deserunt numquam et nihil molestiae. Et assumenda voluptate id ipsa veritatis est omnis adipisci quo sint obcaecati qui soluta possimus eum error voluptate.",
      },
      {
        id: 2,
        title: "another blog post",
        body: "Ea corporis nemo vel quod ratione eos incidunt aliquam sit laboriosam quos in rerum iure aut saepe nisi. In reprehenderit aliquam ut suscipit amet eum architecto fugit sed Quis quae cum corporis numquam qui commodi dolores sed amet adipisci Aut ipsam possimus est odit voluptas et quis ipsa qui adipisci dolorem et beatae Quis. Et pariatur magni sed voluptatem maiores qui omnis illum id aperiam facilis sit praesentium natus Eum quam tenetur qui maxime dolore non fuga facilis est ratione autem eum autem ducimus est blanditiis cumque. Sed aliquid illo sit velit sint ut sint rerum a magni commodi et obcaecati sapiente non voluptates omnis et dolorem nemo. Eos temporibus odio et delectus internos et maiores commodi qui dolore dicta 33 dolor voluptatibus! Ut fuga architecto sed rerum similique ex tenetur facilis sit aperiam deleniti eos enim magnam Aut illo assumenda et laborum accusantium aut alias saepe qui quidem explicabo. Ex ipsum doloremque eum molestiae quae ea quia eveniet id deserunt numquam et nihil molestiae. Et assumenda voluptate id ipsa veritatis est omnis adipisci quo sint obcaecati qui soluta possimus eum error voluptate.",
      },
      {
        id: 3,
        title: "yet another blog post",
        body: "Ea corporis nemo vel quod ratione eos incidunt aliquam sit laboriosam quos in rerum iure aut saepe nisi. In reprehenderit aliquam ut suscipit amet eum architecto fugit sed Quis quae cum corporis numquam qui commodi dolores sed amet adipisci Aut ipsam possimus est odit voluptas et quis ipsa qui adipisci dolorem et beatae Quis. Et pariatur magni sed voluptatem maiores qui omnis illum id aperiam facilis sit praesentium natus Eum quam tenetur qui maxime dolore non fuga facilis est ratione autem eum autem ducimus est blanditiis cumque. Sed aliquid illo sit velit sint ut sint rerum a magni commodi et obcaecati sapiente non voluptates omnis et dolorem nemo. Eos temporibus odio et delectus internos et maiores commodi qui dolore dicta 33 dolor voluptatibus! Ut fuga architecto sed rerum similique ex tenetur facilis sit aperiam deleniti eos enim magnam Aut illo assumenda et laborum accusantium aut alias saepe qui quidem explicabo. Ex ipsum doloremque eum molestiae quae ea quia eveniet id deserunt numquam et nihil molestiae. Et assumenda voluptate id ipsa veritatis est omnis adipisci quo sint obcaecati qui soluta possimus eum error voluptate.",
      },
    ]);
    // const search = ref("");
    // const names = ref(["John", "Doe", "Jane", "Mehedi", "Hasan"]);

    // const matchingNames = computed(() => {
    //   return names.value.filter((name) => name.includes(search.value));
    // });
    const showPosts = ref(true);

    return {
      posts,
      showPosts,
      // names,
      // search,
      // matchingNames,
    };
  },
};
</script>
