<template>
  <div class="middlebar-list-item" @click="handleClick">
    {{note.title}}
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'NoteListItem',
  props: {
    note: Object
  },
  methods: {
    ...mapActions(['selectNote']),
    handleClick() {
      console.log(this.note.title)
      this.selectNote(this.note)
    }
  }
}
</script>

<style>

</style>
