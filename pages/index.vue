<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <post-list :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "../components/Posts/PostList.vue";
export default {
  name: "IndexPage",
  components: {
    PostList,
  },
  asyncData(context, callback) {
    console.log(context);
    setTimeout(() => {
      callback(null, {
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
  },
  // data() {
  //   return {
  //     loadedPosts: [],
  //   };
  // },
  created() {},
};
</script>
<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/main-page-background.jpg");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
