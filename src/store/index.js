import Vue from "vue";
import Vuex from "vuex";
import consumer from "./consumer/product";
import orderlist from "./consumer/orderlist";
import point from "./consumer/point";
import address from "./consumer/address";
import review from "./consumer/review";
import cart from "./consumer/cart";
import recipe from "./consumer/recipe";
import notice from "./consumer/notice";
import faq from "./consumer/faq";
import question from "./consumer/question";
import user from "./consumer/user";
Vue.use(Vuex);
//vuex 메인
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    consumer,
    orderlist,
    point,
    address,
    review,
    cart,
    recipe,
    notice,
    faq,
    question,
    user,
  },
});
