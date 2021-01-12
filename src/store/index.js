import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: () => ({
    notes: [],
    selectedNote: {}
  }),
  mutations: {
    setNotes (state, notes) {
      state.notes = notes
    },
    setSelectedNote(state, note) {
      state.selectedNote = note
    }
  },
  actions: {
    async getAllNotes({ commit }) {
      await fetch('http://localhost:3000/todos')
        .then(response => response.json())
        .then(data => {
          commit('setNotes', data)
        });
    },
    selectNote({commit}, note) {
      commit('setSelectedNote', note)
    }
  }
})

export default store
