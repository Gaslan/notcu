<template>
  <div class="middlebar-list-item" :class="isSelected(note) ? 'selected' : ''" @click="handleClick">
    <span class="title">{{note.title}}</span>
    <span v-if="note.favorited" class="icon-container favorited">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg>
    </span>
    <span v-if="note.pinned" class="icon-container pinned">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-fill" viewBox="0 0 16 16">
        <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z"/>
      </svg>
    </span>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: 'NoteListItem',
  props: {
    note: Object
  },
  methods: {
    ...mapActions(['selectNote']),
    handleClick() {
      this.selectNote(this.note)
    },
    isSelected(note) {
      if (!this.selectedNote) {
        return false;
      }

      return this.selectedNote.id === note.id
    }
  },
  computed: {
    ...mapState(['selectedNote'])
  }
}
</script>

<style>
  .middlebar-list-item{
    width: 100%;
    line-height: 18px;
    font-size: 14px;
    display: flex;
    align-items: center;
    padding: 8px;
    cursor: pointer;
  }

  .middlebar-list-item:hover{
    background: var(--background-secondary);
  }

  .middlebar-list-item.selected{
    background: var(--background-primary);
  }

  .middlebar-list-item .title{
    text-align: left;
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
  }

  .middlebar-list-item .icon-container{
    display: inline-flex;
    padding-left: .25rem;
    padding-right: .25rem;
  }

  .middlebar-list-item .icon-container svg{
    fill: #333;
    width: .75rem;
    height: .75rem;
  }
</style>
