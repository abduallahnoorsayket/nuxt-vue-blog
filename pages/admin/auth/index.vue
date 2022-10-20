<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onClick">
        <app-control-input type="email" v-model="email"
          >E-Mail Address
        </app-control-input>
        <app-control-input type="password" v-model="password"
          >Password
        </app-control-input>
        <app-button type="submit"
          >{{ isLogin ? "Login" : "Sign Up" }}
        </app-button>
        <app-button
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin"
          >Switch to {{ isLogin ? "Signup" : "Login" }}
        </app-button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminAuthPage",
  layout: "admin",

  data() {
    return {
      isLogin: true,
      email: null,
      password: null,
    };
  },
  methods: {
    onClick() {
      let authUrl =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +process.env.fbAPIKey,;
      if (!this.isLogin) {
        authUrl =  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +process.env.fbAPIKey
      } else {
        this.$axios
          .post(
            authUrl,
            {
              email: this.email,
              password: this.password,
              returnSecureToken: true,
            }
          )
          .then((result) => {
            console.log(result);
          })
          .catch((e) => console.log(e));
      }
    },
  },
};
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
