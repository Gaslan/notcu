<template>
  <div class="middlebar-header">
    <div class="search-panel">
      <input type="text" name="search" id="" placeholder="Search..." v-model="searchText" @input="handleSearchInputChange">
      <i v-if="!this.searchText" class="fas fa-search search-icon"></i>
      <i v-if="this.searchText" class="fas fa-times-circle search-icon" @click="this.clearSearchText" title="clear"></i>
    </div>
    <div class="new-note-panel">
      <button @click="handleClickAddNote"><i class="fas fa-plus"></i></button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: 'MiddlebarHeader',
  computed: {
    ...mapState(['notes']),
  },
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    ...mapActions(['selectNote', 'setSearchText']),
    handleClickAddNote() {
      const maxId = this.notes.reduce((acc, cur) => cur.id > acc ? cur.id : acc, 0)
      const notesLength = this.notes.length
      const newNote = {
        content: '',
        createdAt: new Date().toISOString(),
        deleted: false,
        favorited: false,
        id: maxId + 1,
        pinned: false,
        tags: [],
        title: `Untitled (${notesLength + 1})`
      }
      this.notes.push(newNote)
      this.selectNote(newNote)
    },
    handleSearchInputChange() {
      this.setSearchText(this.searchText)
    },
    clearSearchText() {
      this.searchText = ''
      this.setSearchText('')
    }
  }
}
</script>

<style>
  .middlebar-header{
    display: flex;
    height: 40px;
    font-size: 14px;
    padding: 8px;
    border-bottom: 1px solid var(--border-light);
    background: var(--background-primary);
  }

  .search-panel{
    position: relative;
    margin-right: 8px;
    flex-grow: 1;
  }

  .search-panel input{
    height: 24px;
    border: 1px solid var(--border-light);
    background: var(--background-secondary);
    border-radius: 4px;
    width: 100%;
  }

  .search-panel .search-icon{
      position: absolute;
      top: 5px;
      right: 6px;
  }

  .new-note-panel{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .new-note-panel button{
    height: 24px;
    width: 24px;
    border: 1px solid var(--border-light);
    background: var(--background-secondary);
    border-radius: 4px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .new-note-panel i{
    font-size: 12px;
  }
</style>
