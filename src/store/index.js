import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playedGamesDetails:[ ] 
  },
  mutations: {
     addplayedGameData(state, newGameData) {
         state.playedGamesDetails.push({
          totalgames: newGameData.totalgames,
          playerwithmaxwins:  newGameData.playerwithmaxwins,
          maxgamewinner:  newGameData.maxgamewinner,
          selectplayeddate:  newGameData.selectplayeddate,  
         })
     }
  },
  actions: {
  },
  getters: {
     getPlayedGameDetails(state) {
         return state.playedGamesDetails.slice().reverse();
     }   
  },
  modules: {
  }
})
