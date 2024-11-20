<template>
    <main>
        <div ref="chatContainer" class="chat-container">
            <div v-for="message in store.getChatHistory()"></div>

        </div>

    </main>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store';
const BASE_URL = import.meta.env.BASE_URL
const store = useStore()
</script>

<style scoped></style>