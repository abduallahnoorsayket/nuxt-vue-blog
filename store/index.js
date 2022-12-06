import Vuex from "vuex";
import Cookie from "js-cookie";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null,
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          (post) => post.id === editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost;
      },
      setToken(state, token) {
        state.token = token;
      },
      clearToken(state) {
        state.token = null;
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios.$get("/posts.json").then((data) => {
          const postArray = [];
          for (const key in data) {
            postArray.push({ ...data[key], id: key });
          }
          vuexContext.commit("setPosts", postArray);
        });
      },

      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
      addPost(vuexContext, post) {
        const createdPost = { ...post, updatedDate: new Date() };

        return this.$axios
          .$post("/posts.json", createdPost)
          .then((data) => {
            vuexContext.commit("addPost", {
              ...createdPost,
              id: data.name,
            });
            this.$router.push("/admin");
          })
          .catch((e) => console.log(e));
      },
      editPost(vuexContext, editedPost) {
        return this.$axios
          .$put(
            process.env.baseUrl + "posts/" + editedPost.id + ".json",
            editedPost
          )
          .then((res) => {
            vuexContext.commit("editPost", editedPost);
          })
          .catch((e) => console.log(e));
      },
      authenticateUser(vuexContext, authData) {
        let authUrl =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
          process.env.fbAPIKey;
        if (!authData.isLogin) {
          authUrl =
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
            process.env.fbAPIKey;
        }
        return this.$axios
          .post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          })
          .then((result) => {
            console.log("81///", result.data.idToken);
            vuexContext.commit("setToken", result.data.idToken);
            localStorage.setItem("token", result.data.idToken);
            localStorage.setItem(
              "tokenExpiration",
              new Date().getTime() +
                Number.parseInt(result.data.expiresIn) * 1000
            );
            Cookie.set("jwt", result.data.idToken);
            Cookie.set(
              "expirationDate",
              new Date().getTime() +
                Number.parseInt(result.data.expiresIn) * 1000
            );
            // vuexContext.dispatch(
            //   "setLogoutTimer",
            //   result.data.expiresIn * 1000
            // );
          })
          .catch((e) => console.log(e));
      },
      // setLogoutTimer(vuexContext, duration) {
      //   setTimeout(() => {
      //     vuexContext.commit("clearToken", duration);
      //   });
      // },
      initAuth(vuexContext, req) {
        let token;
        let expirationDate;
        if (req) {
          if (!req.headers.Cookie) {
            return;
          }
          const jwtCookie = req.headers.cookie
            .split(";")
            .find((c) => c.trim().startsWith("jwt="));

          if (!jwtCookie) {
            return;
          }
          token = jwtCookie.split("=")[1];
          expirationDate = req.headers.cookie
            .split(";")
            .find((c) => c.trim().startsWith("expirationDate="))
            .split("=")[1];
        } else {
          token = localStorage.getItem("token");
          expirationDate = localStorage.getItem("tokenExpiration");
        }
        if (new Date().getTime() > +expirationDate || !token) {
          console.log("No token or invalid token");
          vuexContext.dispatch("logout");
          return;
        }

        // vuexContext.dispatch(
        //   "setLogoutTimer",
        //   +expirationDate - new Date().getTime()
        // );
        vuexContext.commit("setToken", token);
      },
      logout(vuexContext) {
        vuexContext.commit("clearToken");
        Cookie.remove("jwt");
        Cookie.remove("expirationDate");
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpiration");
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      // Token(state) {
      //   return state.token;
      // },
      isAuthenticated(state) {
        return state.token != null;
      },
    },
  });
};

export default createStore;
