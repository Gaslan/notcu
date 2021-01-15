<template>
  <a href="#" @click="handleClick(...type)" :class="isNoteTypeSelected(...type)">
    <span class="icon-container"><i v-if="this.icon" :class="'fas fa-' + this.icon"></i></span>
    <span class="title">{{this.title}}</span>
    <span class="count">{{this.count}}</span>
  </a>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: 'SidebarMenuItem',
  computed: {
    ...mapState(['displayedNoteType']),
  },
  props: {
    type: {
      type: Array,
      required: true
    },
    icon: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      required: true
    }
  },
  methods:{
    ...mapActions(['displayNoteType']),
    handleClick(type, payload) {
      const noteType = {
        type: type
      }
      if (type == 'tag') {
        noteType.payload = payload
      }
      this.displayNoteType(noteType)
      return false;
    },
    isNoteTypeSelected(type, payload) {
      if (type == this.displayedNoteType.type) {
        if (type == 'tag') {
          if (payload != this.displayedNoteType.payload) {
            return ''
          }
        }
        return 'active'
      }
      return ''
    }
  }
}
</script>

<style>

</style>
