import { createStore } from "vuex";
import { jsonapiModule } from 'jsonapi-vuex';
import { axiosConfig } from "@/configs/axiosConfig";
import { jvConfig } from "@/configs/jvConfig";
const api = axiosConfig;

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    jv: jsonapiModule(api, jvConfig),
  },
});
