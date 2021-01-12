<template>
  <div class="sidebar">
    <div class="sidebar-main">
      <ul>
        <li>
          <a href="#">
            <span class="icon-container"><i class="fas fa-file"></i></span>
            <span class="title">All Notes</span>
            <span class="count">{{this.notesCount}}</span>
          </a>
        </li>
        <li v-if="this.hasFavorited">
          <a href="#">
            <span class="icon-container"><i class="fas fa-star"></i></span>
            <span class="title">Favorites</span>
            <span class="count">{{this.favoritedCount}}</span>
          </a>
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
export default {
  name: 'Sidebar',
  computed: {
    ...mapState(['notes']),
    hasFavorited() {
      return this.notes.some(x => x.favorited)
    },
    favoritedCount() {
      return this.notes.filter(x => x.favorited).length
    },
    notesCount() {
      return this.notes.length
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
  background: rgba(255, 255, 255, .08);
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
