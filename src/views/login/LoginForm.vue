<template>
  <div class="login-form">
    <div class="nes-container is-dark with-title is-centered">
      <p>Login</p>
    </div>
    <form @submit.prevent="onSubmit">
      <div class="nes-container is-dark is-centered">
        <div
          style="background-color: #212529; padding: 1rem"
          class="nes-field is-inline"
        >
          <label for="email">Email</label>
          <input
            type="email"
            placeholder="seuemail@email.com"
            class="nes-input
        is-dark"
            autocomplete="off"
          />
        </div>
        <div
          style="background-color: #212529; padding: 1rem"
          class="nes-field is-inline"
        >
          <label for="password">Password</label>
          <input
            type="password"
            placeholder="seuemail@email.com"
            class="nes-input
        is-dark"
            autocomplete="off"
          />
        </div>
      </div>

      <button type="submit" class="nes-btn is-warning">Login</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "LoginForm",
  setup() {
    const onSubmit = async () => {
      console.log("tá funcionando");
    };

    return { onSubmit };
  },
};
</script>

<style lang="scss" scoped>
dialog {
  margin: auto;
}
</style>
