<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="loadedPosts" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "../../../components/Admin/AdminPostForm.vue";

export default {
  components: { AdminPostForm },
  layout: "admin",
  middleware: ["check-auth", "auth"],

  asyncData(context) {
    return context.app.$axios
      .$get(process.env.baseUrl + "posts/" + context.params.postId + ".json")
      .then((data) => {
        return {
          loadedPosts: { ...data, id: context.params.postId },
        };
      })
      .catch((e) => context.error(e));
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch("editPost", editedPost).then(() => {
        this.$router.push("/admin");
      });
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
