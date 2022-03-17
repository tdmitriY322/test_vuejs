import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: [],
    kids: []
  },
  mutations: {
    CREATE_USER(state, data) {
      state.user.unshift(data); //добавить в начало массива 
      console.log('come to mutation', data);
    },
    ADD_KIDS(state, data) {
      state.kids.unshift(data); //добавить в начало массива 
      console.log('come to mutation', data);
    },
  },
  actions: {
    async GET_USER_DATA(context, data) {
      context.commit('CREATE_USER', data); // Рабоает
      console.log(data);
      return data;
    },
    async GET_USER_KIDS(context, data) {
      context.commit('ADD_KIDS', data); // Рабоает
      console.log(data);
      return data;
    },
  },
  getters: {
    STATE(state) {
      return state;
    },
  }
})