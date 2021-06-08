import { createStore } from "vuex";
import { LoggedUser } from "../models/logged-user";

const state = {
  currentUser: new LoggedUser(),
};

export default createStore({
  state,
});
