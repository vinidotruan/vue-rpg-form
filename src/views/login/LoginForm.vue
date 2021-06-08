<template>
  <div class="login-form">
    <div class="nes-container is-dark with-title is-centered">
      <p>Login</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import firebase from "firebase";
import { onMounted } from "@vue/runtime-core";
export default {
  name: "LoginForm",
  setup() {
    onMounted(() => {
      // const provider = new firebase.auth.GoogleAuthProvider();
      // firebase
      //   .auth()
      //   .signInWithPopup(provider)
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    });
  },
};
</script>

<style lang="scss" scoped>
dialog {
  margin: auto;
}
</style>
