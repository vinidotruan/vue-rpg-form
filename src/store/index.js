import { createStore } from "vuex";
import { LoggedUser } from "../models/logged-user";
import * as mutations from "./mutations";
import * as getters from "./getters";
import * as actions from "./actions";

const state = {
  loggedUser: new LoggedUser(),
};

export default createStore({
  mutations,
  actions,
  getters,
  state,
});
