<template>
  <div class="home">
    <div class="img">
      <img
        alt="Imagem do avatar"
        :src="getLoggedUser.picture"
        style="image-rendering: pixelated;"
      />
    </div>
    <p class="title">
      {{ getLoggedUser.given_name }} {{ getLoggedUser.family_name }}
    </p>
    <p class="paragraph">
      {{ getLoggedUser.email }}
    </p>
    <div class="container full-height">
      <div class="box">
        <div class="item">
          <span class="material-icons-outlined">
            person_add
          </span>
          <router-link to="/users/create">
            Criar fichar
          </router-link>
        </div>
        <div class="item">
          <span class="material-icons-outlined">
            edit_note
          </span>
          <router-link to="/users/create">
            Editar fichar
          </router-link>
        </div>
        <div class="item">
          <span class="material-icons-outlined">
            stacked_line_chart
          </span>
          <router-link to="/users/create">
            Visualizar fichar
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home {
  flex: auto;
  display: flex;
  flex-direction: column;
  .img {
    margin: 1rem 0;
    img {
      border-radius: 100%;
      border: 4px solid white;
    }
  }

  .title {
    font-weight: bold;
    font-size: 24px;
  }

  .paragraph {
    font-weight: lighter;
    font-size: 14px;
  }
}
</style>
<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
// @ is an alias to /src

export default {
  name: "Home",
  setup() {
    const store = useStore();
    const getLoggedUser = computed(() => store.state.loggedUser);

    return { store, getLoggedUser };
  },
};
</script>
