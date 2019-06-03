import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logo: "logo.png",
    nodes:[
      {
        "id": 1,
        "title": "json-server",
        "author": "typicode"
      },
      {
        "id": 2,
        "title": "json-server 1",
        "author": "typicode"
      },
      {
        "id": 3,
        "title": "json-server 2",
        "author": "typicode"
      },
      {
        "id": 4,
        "title": "json-server 3",
        "author": "typicode"
      },
      {
        "id": 5,
        "title": "json-server 4",
        "author": "typicode"
      }
    ]
  },
  getters:{
    getNodesCount: state => {
      return state.nodes.length
    }
  },
  mutations: {
    ADD_NODE:(state,id) => {
      state.nodes.push({
        "id":id,
        "title": "json-serve222222r",
        "author": "typicode"
      });
    },
    REMOVE_NODE:(state,id) => {
      let i = state.nodes.map(item => item.id).indexOf(id);
      state.nodes.splice(i, 1);
    },
    REMOVE_ALL:(state) => {
      state.nodes = []
    }
  },
  actions: {
    removeNode:(context,id) => {
      context.commit("REMOVE_NODE",id)
    },
    addNode:(context,id) => {
      context.commit("ADD_NODE",id)
    },
    removeAll({commit}){
      return new Promise((resolve,reject) => 
      {
        setTimeout(()=>{
          commit('REMOVE_ALL')
          resolve()
        },1500)

      })
    }
  }
})
