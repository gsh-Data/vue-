import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapse:false,
    conmut:1
  },
  mutations: {
    collapseValue(state,value){
      state.collapse++
    },
    Add(state,val){
      if(val){
        state.conmut+=Number(val)
      }else{
        state.conmut++
      }
     
    },
    Reduce(state,val){
      if(state.conmut>0){
        state.conmut--
      }  
    },
    Reduces(state){
      if(state.conmut>0){
        state.conmut--
      }  
    },
  },
  actions: {
    ayncBut(context,val){
      console.log(val)
      setTimeout(()=>{
        context.commit('Reduces')
      },1000)
    }
  },
  modules: {
  }
})
