<template>
  <div class="editor-wrapper">
    <MonacoEditor
      v-if="!this.isContentEditorPreviewMode"
      theme="vs"
      language="javascript"
      :value="this.content"
      :options="options"
      @change="onChange"
    ></MonacoEditor>

    <div v-if="this.isContentEditorPreviewMode" class="preview" v-html="this.renderedContent"></div>
  </div>
</template>

<script>
import MonacoEditor from 'monaco-editor-vue';
import showdown from "showdown";
import { mapState } from "vuex";

const converter = new showdown.Converter({
  tables: true,
  ghCodeBlocks: true,
  tasklists: true
})

export default {
  name: 'ContentEditor',
  components: {
    MonacoEditor
  },
  props: {
    content: String
  },
  computed: {
    ...mapState(['selectedNote', 'isContentEditorPreviewMode']),
    renderedContent() {
      return this.content ? converter.makeHtml(this.content) : ''
    }
  },
  methods: {
    onChange(value) {
      this.selectedNote.content = value
    }
  },
  data() {
    return {
      options: {
        automaticLayout: true,
        lineNumbers: false,
        minimap: {
          enabled: false
        }
      },
      editor: {}
    }
  }
}
</script>

<style>
  .editor-wrapper{
    text-align: left;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
  }

  .preview{
    padding: 20px;
  }
</style>
