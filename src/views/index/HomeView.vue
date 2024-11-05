<script setup lang="ts">
import Header from '@/components/Header.vue'
import Tabbar from '@/components/Tabbar.vue'
import MessageList from '@/components/MessageList.vue'
import BaseLine from '@/components/BaseLine.vue';
</script>

<template>
  <main>
    <Header />
    <Tabbar />
    <MessageList class="container"/>
    <!-- <BaseLine /> -->
  </main>
</template>
<style scoped>

</style>