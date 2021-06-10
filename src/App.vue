<template>
  <header class="header" v-if="$route.name != 'Login'">
    <div class="back-button" @click="$router.go(-1)" id="goBack">
      <span class="material-icons">arrow_back_ios_new</span>
    </div>
    <div class="title">
      <p>{{ $route.name }}</p>
    </div>
  </header>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transitionName">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import firebase from "firebase";

// import { LoggedUser } from "@/models/logged-user";
export default {
  name: "App",
  setup() {
    const store = useStore();
    const route = useRoute();
    const getLoggedUser = computed(() => store.state.loggedUser);

    if (!getLoggedUser.value.id) {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((response) => {
          store.dispatch("setLoggedUser", response.additionalUserInfo.profile);
        })
        .catch((err) => {
          console.log("erro", err);
        });
    }
    // store.
    return { route, store, getLoggedUser };
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
  background: linear-gradient(#5c27fe, #36198b);
  color: white;
  min-height: 100vh;
}

main {
  margin-top: 1rem;
}

label {
  color: #fff;
}

p {
  margin: 0;
}

#app {
  min-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.paragraph {
  font-size: 12px;
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

header {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 1rem;

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

.container {
  display: flex;
}

.full-height {
  flex: auto;
}

.box {
  background: white;
  display: flex;
  border-radius: 20px;
  padding: 1rem;
  box-shadow: 0 0 10px 10px rgb(0, 0, 0, 0.2);
  margin-top: 2rem;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  * {
    color: #414141 !important;
  }

  .item {
    display: flex;
    height: 3rem;
    background-color: #dedede;
    width: 100%;
    border-radius: 10px;
    padding: 0.5rem;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    box-shadow: 0 0 10px 1px rgb(0, 0, 0, 0.6);
    margin: 0.5rem;
    span.material-icons-outlined {
      margin: 0 1rem;
    }
    a {
      text-decoration: none;
      font-size: 16px;
      font-weight: 600;
    }
  }
}
</style>
