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
      // Build dataset, so we can group by as per need
      const gameDetails = state.playedGamesDetails.map((item) => {
         
         const { selectplayeddate } = item;
         const yearMonths = selectplayeddate.split("-");
         const recordYear = yearMonths[0];
         const recordMonth = yearMonths[1];
         return {
           year: recordYear,
           month: recordMonth,
           items: [item],
         };
       });
       // now we have data set , group by as need
       return gameDetails.reduce((acc, item) => {
         if (acc[item.year] && acc[item.year][item.month]) {
        
          acc[item.year][item.month].push(item.items);   //*** */
          
         } else if(acc[item.year] && !acc[item.year][item.month]) {
         
            acc[item.year][item.month] = item.items
             
         } else {
           acc[item.year] = {
             [item.month]: item.items,
           };
         }
         return acc;
       }, {});
     }   
  },
  modules: {
  }
})
