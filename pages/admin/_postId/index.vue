<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "../../../components/Admin/AdminPostForm.vue";
export default {
  components: { AdminPostForm },
  data() {
    return {
      loadedPost: {
        author: "Abdullah sayket",
        title: "My first post",
        content: "hello world",
        thumbnailLink:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBOq2dEad1g8w9syMcEjhOa8JXMn1TawG0gA&usqp=CAU",
      },
    };
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
