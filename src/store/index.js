import Vue from 'vue'
import Vuex from 'vuex'
import games from "@/assets/games.json"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    games: games
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
