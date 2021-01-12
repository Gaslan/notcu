<template>
  <div class="middlebar">
    <div class="middlebar-search">
      <div class="search-panel">
        <input type="text" name="search" id="" placeholder="Search...">
        <i class="fas fa-search search-icon"></i>
      </div>
      <div class="new-note-panel">
        <button><i class="fas fa-plus"></i></button>
      </div>
    </div>
    <div class="middlebar-title">
      <div class="title-panel">
        Title
      </div>
      <div class="sort-panel">
        <i class="fas fa-angle-down"></i>
      </div>
    </div>
    <div class="middlebar-list">
      <NoteListItem
        v-for="note in notes"
        :note="note"
        :key="note.title" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NoteListItem from "./NoteListItem";

export default {
  name: 'Middlebar',
  components: {
    NoteListItem
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapState(['notes'])
  }
}
</script>

<style>
:root{
  --border-light: #d5d6d7;
  --background-primary: #e5e6e7;
  --background-secondary: #fafbfc;
}
.middlebar{
  position: fixed;
  top: 0;
  left: 240px;
  width: 240px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border-light);
}

.middlebar-search{
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

.middlebar-title{
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  border-bottom: 1px solid var(--border-light);
  background: var(--background-secondary);
}

.middlebar-title .title-panel{
  padding: 4px 4px;
  cursor: pointer;
}

.middlebar-title .sort-panel{
  padding: 4px 8px;
  cursor: pointer;
}

.middlebar-list{
  flex-grow: 1;
}
</style>
