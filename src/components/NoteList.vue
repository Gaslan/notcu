<template>
  <div class="middlebar-list">
    <div v-if="this.isDisplayedNoteExist">
      <NoteListItem
        v-for="note in this.sortedDisplayedNotes"
        :note="note"
        :key="note.title" />
    </div>
    <div v-if="!this.isDisplayedNoteExist" class="middlebar-list-no-note">No notes found</div>
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
    ...mapState(['notes', 'selectedNote', 'displayedNoteType', 'displayedNoteSortType', 'searchText', 'isContentEditorPreviewMode']),
    isDisplayedNoteExist() {
      if (this.displayedNotes && this.displayedNotes.length) {
        return true
      }
      this.selectNote(undefined)
      this.setContentEditorPreviewMode(true)
      return false
    },
    displayedNotes() {
      const noteType = this.displayedNoteType
      let displayedNotes = []

      if (!noteType || !noteType.type) {
        return displayedNotes
      }

      if (noteType.type == 'all') {
        displayedNotes = this.notes.filter(x => !x.deleted)
      } else if (noteType.type == 'favorite') {
        displayedNotes = this.notes.filter(x => x.favorited && !x.deleted)
      } else if (noteType.type == 'trash') {
        displayedNotes = this.notes.filter(x => x.deleted)
      } else if (noteType.type == 'tag') {
        if (noteType.payload == 'all') {
          displayedNotes = this.notes.filter(x => x.tags && x.tags.length && !x.deleted)
        } else {
          displayedNotes = this.notes.filter(x => x.tags && x.tags.includes(noteType.payload) && !x.deleted)
        }
      }

      if (this.searchText) {
        displayedNotes = displayedNotes.filter(x => x.title.indexOf(this.searchText) >= 0 || x.content.indexOf(this.searchText) >= 0)
      }

      return displayedNotes
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
    ...mapActions(['selectNote', 'setContentEditorPreviewMode']),
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
  .middlebar-list-no-note{
    font-size: 14px;
    padding: 8px;
  }
</style>
