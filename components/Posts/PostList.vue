<template>
  <section class="post-list">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :previewText="post.previewText"
    />
    <!-- <PostPreview
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnqCE5vikGzYMpFtT77iceT-IzbZsMxamQfT_1QUnDRBSXGcct-FsC7pIBwb2BNpaVGzw&usqp=CAU"
      title="Hi how are you -there"
      previewText="This is my Second post !"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJWPRKIhQt7Y4GbrvXw5A9LlmgTgktae03ag&usqp=CAU"
      title="Hello world -there"
      previewText="This is my Third post !"
    /> -->
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";
export default {
  components: {
    PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
