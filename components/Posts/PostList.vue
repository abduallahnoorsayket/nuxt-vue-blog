<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBOq2dEad1g8w9syMcEjhOa8JXMn1TawG0gA&usqp=CAU"
      title="Hello -there"
      previewText="This is my first post !"
    />
    <PostPreview
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
    />
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
