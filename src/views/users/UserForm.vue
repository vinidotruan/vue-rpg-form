<template>
  <div class="user-form container">
    <form @submit.prevent="onSubmit">
      <div class="container">
        <p class="title">Atributos</p>

        <div class="c">
          <label for="force">Força</label>
          <input
            type="number"
            id="force"
            class="nes-input is-dark"
            placeholder="força 0-100"
            v-model="form.force"
          />
        </div>

        <div
          style="background-color: #212529; padding: 1rem"
          class="nes-field is-inline"
        >
          <label for="skill">Destreza</label>
          <input
            type="number"
            id="skill"
            class="nes-input is-dark"
            placeholder="destreza 0-100"
            v-model="form.skill"
          />
        </div>

        <div
          style="background-color: #212529; padding: 1rem"
          class="nes-field is-inline"
        >
          <label for="inteligence">Inteligência</label>
          <input
            type="number"
            id="inteligence"
            class="nes-input is-dark"
            placeholder="inteligência 0-100"
            v-model="form.inteligence"
          />
        </div>
      </div>

      <div class="nes-container is-dark with-title is-centered">
        <p class="title">História</p>

        <div
          style="background-color: #212529; padding: 1rem"
          class="nes-field is-inline"
        >
          <label for="name">Nome</label>
          <input
            type="text"
            id="name"
            class="nes-input is-dark"
            placeholder="Nome"
            v-model="form.username"
          />
        </div>

        <div
          style="background-color: #212529; padding: 1rem"
          class="nes-field is-inline"
        >
          <label for="classD">Classe</label>
          <div class="nes-select is-dark">
            <select required id="classD" v-model="form.classId">
              <option value="" disabled selected hidden>Selecione uma</option>
              <option value="1">Humano</option>
              <option value="0">Lobisomen</option>
              <option value="0">Lobisomen</option>
              <option value="1">Elfo</option>
            </select>
          </div>
        </div>
      </div>

      <button type="submit" class="nes-btn is-primary">Cadastrar</button>
    </form>
    <section>
      <dialog class="nes-dialog is-dark" id="alert-modal">
        <form method="dialog">
          <p class="title" v-if="state.props.modalStatus">Parabéns 😃</p>
          <p class="title" v-else>Oops 😿</p>
          <p v-if="state.props.modalStatus">
            Seu char foi criado com sucesso! Boa aventura
          </p>
          <p v-else>
            Tivemos um problema ao criar seu char, por favor contate o suporte
          </p>
          <menu class="dialog-menu">
            <button class="nes-btn is-primary">Fechar</button>
          </menu>
        </form>
      </dialog>
    </section>
  </div>
</template>

<script>
import { reactive } from "vue";
import { createUser } from "@/collections/users";
import User from "@/models/user";
// @ is an alias to /src

export default {
  name: "UserForm",
  setup() {
    const state = reactive({
      props: {
        modalStatus: false,
        handleModal: async () => {
          const modal = document.getElementById("alert-modal");
          modal.showModal();
        },
      },
    });

    const form = reactive(User);
    const onSubmit = async () => {
      const response = await createUser({ ...form });
      await state.props.handleModal();
      state.props.modalStatus = response?.id;
    };

    return { form, onSubmit, state };
  },
};
</script>

<style lang="scss" scoped>
dialog {
  margin: auto;
}
</style>
