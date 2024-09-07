import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailsView from "@/views/DetailsView.vue";
import CreatePost from "@/views/CreatePost.vue";
import TagsView from "@/views/TagsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/posts/:id",
      name: "DetailsView",
      component: DetailsView,
      props: true,
    },
    {
      path: "/createPost",
      name: "CreatePost",
      component: CreatePost,
    },
    {
      path: "/tags/:tag",
      name: "Tag",
      component: TagsView,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "HomeView" },
    },
  ],
});

export default router;
