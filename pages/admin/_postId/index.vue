<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="loadedPosts" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "../../../components/Admin/AdminPostForm.vue";
import axios from "axios";

export default {
  components: { AdminPostForm },
  layout: "admin",

  asyncData(context) {
    return axios
      .get(
        "https://nuxt-blog-5aaaf-default-rtdb.firebaseio.com/posts/" +
          context.params.postId +
          ".json"
      )
      .then((res) => {
        return {
          loadedPosts: res.data,
        };
      })
      .catch((e) => context.error(e));
  },
  methods: {
    onSubmitted(editedPost) {
      axios
        .put(
          "https://nuxt-blog-5aaaf-default-rtdb.firebaseio.com/posts/" +
            this.$route.params.postId +
            ".json",
          editedPost
        )
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
