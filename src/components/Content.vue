<template>
  <div class="content">
    <ContentHeader />
    <!-- <div v-if="this.selectedNote && this.selectedNote.title">
      {{this.selectedNote}}
    </div> -->
    <ContentEditor :content="this.selectedNote.content" />
  </div>
</template>

<script>
import ContentHeader from "./ContentHeader";
import ContentEditor from "./ContentEditor";
import { mapState } from "vuex";

export default {
  name: 'Content',
  components: {
    ContentHeader,
    ContentEditor
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
    display: flex;
    flex-direction: column;
  }
</style>
