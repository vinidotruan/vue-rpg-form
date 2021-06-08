<template>
  <header class="nes-container is-dark" v-if="$route.name != 'Login'">
    <div class="back-button">
      <button class="nes-btn is-warning" @click="$router.go(-1)" id="goBack">
        <span> > </span>
      </button>
    </div>
    <div class="title">
      <p>{{ $route.name }}</p>
    </div>
  </header>
  {{ route.meta.transition }}
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transitionName">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import { reactive } from "vue";

import { useRoute } from "vue-router";
export default {
  name: "App",
  setup() {
    const route = useRoute();
    const state = reactive({
      props: {
        transitionName: "",
      },
    });
    return { state, route };
  },
};
</script>

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

main {
  margin-top: 1rem;
}

label {
  color: #fff;
}

// Transitions
.next-enter-active,
.next-leave-active {
  transition: all 0.3s ease-out;
}

.next-enter-to {
  position: absolute;
  right: 0;
}

.next-leave-to {
  position: absolute;
  left: -100%;
}

.next-enter-from {
  position: absolute;
  right: -100%;
}

.next-leave-from {
  position: absolute;
  left: 0;
}
// Transitions
.prev-enter-active,
.prev-leave-active {
  transition: all 0.3s ease-in;
}

.prev-enter-to {
  position: absolute;
  left: 0;
}

.prev-leave-to {
  position: absolute;
  right: -100%;
}

.prev-enter-from {
  position: absolute;
  left: -100%;
}

.prev-leave-from {
  position: absolute;
  right: 0;
}

.nes-container {
  margin-top: 1rem !important;
}

header {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  .nes-btn {
    transform: rotate(180deg);
  }

  .back-button {
    width: 20%;
    display: flex;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
  }
  .title {
    width: 80%;
    display: flex;
    align-content: center;
    justify-content: flex-start;
    align-items: center;

    p {
      margin: 0;
    }
  }
}
</style>
