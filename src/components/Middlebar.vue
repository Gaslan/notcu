<template>
  <div class="middlebar">
    <MiddlebarHeader />
    <div class="middlebar-title">
      <div class="title-panel">
        Title
      </div>
      <div class="sort-panel" @click="this.handleClickSort">
        <i v-if="this.sortType.type == 'desc'" class="fas fa-angle-down" title="Descending"></i>
        <i v-if="this.sortType.type == 'asc'" class="fas fa-angle-up" title="Ascending"></i>
      </div>
    </div>
    <NoteList />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import NoteList from "./NoteList";
import MiddlebarHeader from "./MiddlebarHeader";

export default {
  name: 'Middlebar',
  components: {
    NoteList,
    MiddlebarHeader
  },
  data() {
    return {
      sortType: {
        type: 'asc'
      }
    }
  },
  computed: {
    ...mapState(['displayedNoteSortType'])
  },
  methods: {
    ...mapActions(['changeDisplayedNoteSortType']),
    handleClickSort() {
      if (this.displayedNoteSortType.type == 'asc') {
        this.sortType.type = 'desc'
        this.changeDisplayedNoteSortType('desc')
      } else {
        this.sortType.type = 'asc'
        this.changeDisplayedNoteSortType('asc')
      }
    }
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
</style>
