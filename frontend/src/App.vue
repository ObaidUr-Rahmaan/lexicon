<template>
  <router-view />
</template>

<script setup>
import io from 'socket.io-client';

// Establish a basic connection to the backend
const socket = io('http://localhost:3000');

</script>

<style scoped>
</style>
