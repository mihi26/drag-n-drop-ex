import { createStore } from 'vuex'
import companyRoom from '@/data/companyRoom'
import companyTree from '@/data/companyTree'

const store = createStore({
  state () {
    return {
      roomList: companyRoom,
      roomTree: companyTree,
    }
  },
  mutations: {
    moveRoomFromListToTree(state, payload){
      // state.roomList.splice(state.roomList.findIndex(item => item.id === payload.id), 1);
      // state.roomTree.push(payload);
    },
    addRoomToList(state, payload){
      state.roomList.push(payload);
    }
  },
  actions: {
    addRoomToTree(context) {
      context.commit("moveRoomFromListToTree");
    },
    addRoomToList(context, payload) {
      context.commit("addRoomToList", payload);
    }
  }
})

export default store;