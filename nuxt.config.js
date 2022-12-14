const bodyParser = require("body-parser");

export default {
  mode: "universal",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-vue-blog",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "This is my cool blog",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital@1&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/styles/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~plugins/core-component.js", "~plugins/date-filter.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL:
      process.env.BASE_URL ||
      "https://nuxt-blog-5aaaf-default-rtdb.firebaseio.com/",
    credentials: false,
  },
  loading: { color: "#0000FF", height: "5px", duration: 5000 },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  // build: {},
  build: {
    standalone: true,
  },
  dev: true,
  env: {
    baseUrl:
      process.env.BASE_URL ||
      "https://nuxt-blog-5aaaf-default-rtdb.firebaseio.com/",
    fbAPIKey: "AIzaSyDmBT8hSBVvlILPUnV9zUL4bHexcFSJfqw",
  },
  transition: {
    name: "fade",
    mode: "out-in",
  },
  // srcDir: "client-app/",
  router: {
    // middleware: "log",
    // base: "/my-app/",
    // extendRoutes(routes, resolve) {
    //   routes.push({
    //     path: "*",
    //     component: resolve(__dirname, "pages/index.vue"),
    //   });
    // },
    // linkActive: "active",
  },
  serverMiddleware: [bodyParser.json(), "~/api"],
};
