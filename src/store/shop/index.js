import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state() {
    return {
      productsList: [],
      product: null,
    };
  },
};
