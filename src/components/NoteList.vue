<template>
  <div class="middlebar-list">
    <NoteListItem
      v-for="note in this.sortedDisplayedNotes"
      :note="note"
      :key="note.title" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import NoteListItem from "./NoteListItem";

export default {
  name: 'NoteList',
  components: {
    NoteListItem
  },
  computed: {
    ...mapState(['notes', 'selectedNote', 'displayedNoteType', 'displayedNoteSortType']),
    displayedNotes() {
      const noteType = this.displayedNoteType
      if (!noteType || !noteType.type) {
        return []
      }

      if (noteType.type == 'all') {
        return this.notes.filter(x => !x.deleted)
      }

      if (noteType.type == 'favorite') {
        return this.notes.filter(x => x.favorited && !x.deleted)
      }

      if (noteType.type == 'trash') {
        return this.notes.filter(x => x.deleted)
      }

      if (noteType.type == 'tag') {
        if (noteType.payload == 'all') {
          return this.notes.filter(x => x.tags && x.tags.length && !x.deleted)
        } else {
          return this.notes.filter(x => x.tags && x.tags.includes(noteType.payload) && !x.deleted)
        }
      }

      return []
    },
    sortedDisplayedNotes() {
      if (!this.displayedNotes || this.displayedNotes.length == 0) {
        return []
      }

      if (this.displayedNoteSortType.type == 'asc') {
        this.sortNotes(this.displayedNotes)
      } else {
        this.sortNotesReverse(this.displayedNotes)
      }

      if (!this.displayedNotes.includes(this.selectedNote)) {
        const first = this.displayedNotes[0]
        this.selectNote(first)
      }

      return this.displayedNotes
    }
  },
  methods: {
    ...mapActions(['selectNote']),
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
    },
    sortNotesReverse(notes) {
      notes.sort((a, b) => {
        if (a.pinned) {
          if (b.pinned) {
            return b.title.localeCompare(a.title)
          } else {
            return -1
          }
        } else {
          if (b.pinned) {
            return 1
          } else {
            return b.title.localeCompare(a.title)
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
