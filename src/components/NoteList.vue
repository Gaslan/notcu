<template>
  <div class="middlebar-list">
    <NoteListItem
      v-for="note in this.sortedDisplayedNotes"
      :note="note"
      :key="note.title" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NoteListItem from "./NoteListItem";

export default {
  name: 'NoteList',
  components: {
    NoteListItem
  },
  computed: {
    ...mapState(['notes', 'displayedNoteType']),
    displayedNotes() {
      const noteType = this.displayedNoteType
      if (!noteType || !noteType.type) {
        return []
      }

      if (noteType.type == 'all') {
        return this.notes
      }

      if (noteType.type == 'favorite') {
        return this.notes.filter(x => x.favorited)
      }

      if (noteType.type == 'tag') {
        if (noteType.payload == 'all') {
          return this.notes.filter(x => x.tags && x.tags.length)
        } else {
          return this.notes.filter(x => x.tags && x.tags.includes(noteType.payload))
        }
      }

      return []
    },
    sortedDisplayedNotes() {
      this.sortNotes(this.displayedNotes)
      return this.displayedNotes
    }
  },
  methods: {
    sortNotes(notes) {
      notes.sort((a, b) => {
        if (a.pinned) {
          if (b.pinned) {
            return a.title.localeCompare(b.title)
          } else {
            return -1
          }
        } else {
          if (b.pinned) {
            return 1
          } else {
            return a.title.localeCompare(b.title)
          }
        }
      })
    }
  }
}
</script>

<style>
  .middlebar-list{
    flex-grow: 1;
  }
</style>
