export default function (context) {
  console.log("[Middleware] check- auth");
  context.store.dispatch("initAuth", context.req);
  // null
  // if (process.client) {
  // }
}
