<template>
<!--  generate basic game menu  with buttons -->
  <div class="menu">
    <div class="menu__header">
      <h1 class="menu__title">BombParty Clone</h1>
    </div>
    <div class="menu__body">
      <div class="menu__button" @click="createGame">
        <span class="menu__button-text">Create Game</span>
      </div>
      <div class="menu__button" @click="joinGame">
        <span class="menu__button-text">Join Game</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu.vue"
}
</script>

<style scoped>

</style>