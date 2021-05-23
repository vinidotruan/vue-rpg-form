<template>
  <header class="nes-container is-dark">Nome do meu avatar</header>

  <router-view />
</template>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  text-align: center;
  transition: 0.5s;
}

body {
  background-color: #212529;
  color: white;
}

header {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

main {
  margin-top: 1rem;
}

label {
  color: #fff;
}

.nes-container {
  margin-top: 1rem !important;
}
</style>
