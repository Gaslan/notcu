<template>
  <div class="sidebar">
    <div class="sidebar-main">
      <ul>
        <li>
          <SidebarMenuItem
            v-bind:type="['all']"
            :icon="'file'"
            :title="'All Notes'"
            :count="this.allNotesCount" />
        </li>
        <li v-if="this.hasFavorited">
          <SidebarMenuItem
            v-bind:type="['favorite']"
            :icon="'star'"
            :title="'Favorites'"
            :count="this.favoritedCount" />
        </li>
        <li v-if="this.hasTagged">
          <SidebarMenuItem
            v-bind:type="['tag', 'all']"
            :icon="'tag'"
            :title="'Tags'"
            :count="this.taggedCount" />
        </li>
        <li v-for="tag in this.getTagList()" :key="tag">
          <SidebarMenuItem
            v-bind:type="['tag', tag]"
            :title="tag"
            :count="countNotesWithTag(tag)" />
        </li>
        <li v-if="this.hasDeleted">
          <SidebarMenuItem
            v-bind:type="['trash']"
            :icon="'trash'"
            :title="'Trash'"
            :count="this.deletedCount" />
        </li>
      </ul>
    </div>
    <div class="sidebar-collapse">
      <div class="sidebar-collapse-inner">
        <div class="collapse-button">
          <button><i class="fas fa-angle-left"></i></button>
        </div>
        <div class="collapse-label">
          <div class="collapse-label-inner">Collapse</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SidebarMenuItem from "./SidebarMenuItem";
export default {
  name: 'Sidebar',
  components: {
    SidebarMenuItem
  },
  computed: {
    ...mapState(['notes', 'displayedNoteType']),
    hasFavorited() {
      return this.notes.some(x => x.favorited && !x.deleted)
    },
    hasTagged() {
      return this.notes.some(x => x.tags && x.tags.length && !x.deleted)
    },
    hasDeleted() {
      return this.notes.some(x => x.deleted)
    },
    favoritedCount() {
      return this.notes.filter(x => x.favorited && !x.deleted).length
    },
    taggedCount() {
      return this.notes.filter(x => x.tags && x.tags.length && !x.deleted).length
    },
    deletedCount() {
      return this.notes.filter(x => x.deleted).length
    },
    allNotesCount() {
      return this.notes.filter(x => !x.deleted).length
    }
  },
  methods: {
    getTagList() {
      const tagSet = new Set()
      this.notes.forEach(x => {
        if (x.deleted) {
          return
        }
        if (x.tags) {
          x.tags.forEach(y => tagSet.add(y))
        }
      })
      return [...tagSet]
    },
    countNotesWithTag(tag) {
      return this.notes.reduce((acc, val) => {
        if (!val.tags) {
          return acc
        }
        if (!val.tags.includes(tag)) {
          return acc
        }
        return acc + 1
      }, 0)
    }
  }
}
</script>

<style>
:root{
  --collapse-button-height: 2.5rem;
  --sidebar-background: #202528;
}
.sidebar{
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  height: 100%;
  background: var(--sidebar-background);
  display: flex;
  flex-direction: column;
}

.sidebar-main{
  flex-grow: 1;
  text-align: left;
}

.sidebar-main ul{
  margin: 0;
  padding: 4px 0;
  list-style: none;
}

.sidebar-main ul a{
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 500;
  font-size: .875rem;
  text-decoration: none;
  padding: 6px 8px;
  transition: all ease-in-out .2s;
}

.sidebar-main ul a:hover{
  background: rgba(255, 255, 255, .06);
}

.sidebar-main ul a.active{
  background: rgba(255, 255, 255, .09);
}

.sidebar-main ul a .icon-container{
  display: flex;
  justify-content: center;
  max-width: 16px;
  min-width: 16px;
  margin-right: 8px;
}

.sidebar-main ul a .title{
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}

.sidebar-main ul a .count{
  font-size: .75rem;
  margin-left: .25rem;
}

.sidebar-main ul a:hover .icon-container{
  color: #2196F3;
}



.sidebar-collapse{
  height: var(--collapse-button-height);
  color: #fff;
}

.sidebar-collapse-inner{
  display: flex;
  align-items: stretch;
  height: 100%;
}

.sidebar-collapse-inner .collapse-button{
  width: var(--collapse-button-height);
  height: 100%;
  padding: .125rem;
}

.sidebar-collapse-inner .collapse-button button{
  margin: 0;
  border: 0;
  height: 100%;
  width: 100%;
  background: var(--sidebar-background);
  color: #fff;
}

.sidebar-collapse-inner .collapse-button button:hover{
  background: #454647;
}

.sidebar-collapse-inner .collapse-label{
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding: 0 .5rem;
}

.sidebar-collapse-inner .collapse-label-inner{
  opacity: 0;
  transform: translateX(-10px);
  transition: opacity ease-in-out .3s, transform ease-in-out .3s;
}

.sidebar-collapse-inner .collapse-button:hover+.collapse-label .collapse-label-inner{
  opacity: 1;
  transform: translateX(0);
}
</style>
