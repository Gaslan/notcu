<template>
  <div class="content-header">
    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <div class="btn-group me-2" role="group" aria-label="First group">
        <button type="button" class="btn btn-primary btn-header">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
        </button>
        <button type="button" class="btn btn-primary btn-header">2</button>
        <button type="button" class="btn btn-primary btn-header">3</button>
      </div>
      <div class="btn-group me-2" role="group" aria-label="Second group">
        <button type="button" class="btn btn-secondary btn-header">5</button>
        <button type="button" class="btn btn-secondary btn-header">6</button>
      </div>
      <div class="btn-group" role="group" aria-label="Third group">
        <button type="button" class="btn btn-info btn-header">8</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .btn-header{
    height: 24px;
    width: 24px;
    border: 1px solid var(--border-light);
    background: var(--background-secondary);
    border-radius: 4px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0px;
    font-size: 14px;
    background: #fff;
    display: flex;
  }

  .btn-header svg{
    width: 14px;
    height: 14px;
    fill: #2196F3;
  }
</style>
