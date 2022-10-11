<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPosts.title }}</h1>
      <div class="post-details">
        <div class="post-detail">
          Last updated on {{ loadedPosts.updatedDate }}
        </div>
        <div class="post-detail">Written by {{ loadedPosts.author }}</div>
      </div>
      <p class="post-content">{{ loadedPosts.content }}</p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what you think about the post send an email to
        <a href="mailto:abdullahnoorsayket@gmail.com"
          >abdullahnoorsayket@gmail.com</a
        >.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context, callback) {
    // console.log(context);
    setTimeout(() => {
      callback(null, {
        loadedPosts: {
          id: "1",
          title: "First Post (ID:" + context.route.params.id + ")",
          previewText: "This is out first post",
          author: "Abdullah sayket",
          updatedDate: new Date(),
          content:
            "It is a long established fact that a reader will be distracted by th",
          thumbnail:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnqCE5vikGzYMpFtT77iceT-IzbZsMxamQfT_1QUnDRBSXGcct-FsC7pIBwb2BNpaVGzw&usqp=CAU",
        },
      });
    }, 1500);
  },
};
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
