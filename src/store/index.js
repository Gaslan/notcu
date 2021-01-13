import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: () => ({
    notes: [],
    selectedNote: {},
    displayedNoteType: {}
  }),
  mutations: {
    setNotes (state, notes) {
      state.notes = notes
    },
    setSelectedNote(state, note) {
      state.selectedNote = note
    },
    setDisplayedNoteType(state, type) {
      state.displayedNoteType = type
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
    },
    displayNoteType({commit}, type) {
      commit('setDisplayedNoteType', type)
    }
  }
})

export default store
