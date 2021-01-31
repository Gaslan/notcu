import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: () => ({
    notes: [],
    selectedNote: {},
    displayedNoteType: {},
    displayedNoteSortType: {
      type: 'asc'
    },
    isContentEditorPreviewMode: true,
    searchText: ''
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
    },
    setDisplayedNoteSortType(state, type) {
      state.displayedNoteSortType.type = type
    },
    toggleContentEditorPreviewMode(state) {
      state.isContentEditorPreviewMode = !state.isContentEditorPreviewMode
    },
    setContentEditorPreviewMode(state, mode) {
      state.isContentEditorPreviewMode = mode
    },
    setSearchText(state, text) {
      state.searchText = text
    }
  },
  actions: {
    async getAllNotes({ commit }) {
      await fetch('http://192.168.0.21:3000/todos')
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
    },
    changeDisplayedNoteSortType({commit}, type) {
      commit('setDisplayedNoteSortType', type)
    },
    toggleContentEditorPreviewMode({commit}) {
      commit('toggleContentEditorPreviewMode')
    },
    setContentEditorPreviewMode({commit}, mode) {
      commit('setContentEditorPreviewMode', mode)
    },
    setSearchText({commit}, text) {
      commit('setSearchText', text)
    }
  }
})

export default store
