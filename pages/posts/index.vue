<template>
  <div class="post-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "../../components/Posts/PostList.vue";
export default {
  components: {
    PostList,
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            {
              id: "1",
              title: "First Post",
              previewText: "This is out first post",
              thumbnail:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnqCE5vikGzYMpFtT77iceT-IzbZsMxamQfT_1QUnDRBSXGcct-FsC7pIBwb2BNpaVGzw&usqp=CAU",
            },
            {
              id: "2",
              title: "Second Post",
              previewText: "This is out second post",
              thumbnail:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJWPRKIhQt7Y4GbrvXw5A9LlmgTgktae03ag&usqp=CAU",
            },
          ],
        });
      }, 1500);
      // reject(new Error());
    })
      .then((data) => {
        return data;
      })
      .catch((e) => {
        // context.error(new Error());
        context.error(e);
      });
  },
  created() {
    this.$store.dispatch("setPosts", this.loadedPosts);
    console.log(this.$store.getters.loadedPosts);
  },
};
</script>

<style scoped>
.post-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
