import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        if (!process.client) {
          console.log(context.req.session);
        }
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
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
            ]);
            resolve();
          }, 1500);
          // reject(new Error());
        });
      },

      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
    },
  });
};

export default createStore;
