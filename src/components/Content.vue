<template>
  <div class="content">
    <ContentHeader />
    <div v-if="this.selectedNote && this.selectedNote.title">
      {{this.selectedNote}}
    </div>
  </div>
</template>

<script>
import ContentHeader from "./ContentHeader";
import { mapState } from "vuex";

export default {
  name: 'Content',
  components: {
    ContentHeader
  },
  computed: {
    ...mapState(['selectedNote'])
  }
}
</script>

<style>
  .content{
    position: fixed;
    height: 100vh;
    width: calc(100% - 240px - 240px);
    top: 0;
    bottom: 0;
    right: 0;
  }
</style>
