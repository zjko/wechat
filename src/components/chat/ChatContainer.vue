<template>
    <main>
        <div ref="chatContainer" class="chat-container">
            <div v-for="message in store.getChatHistory()">
                {{ message.content}}
            </div>

        </div>

    </main>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store';
import {ref, onMounted} from 'vue'
const BASE_URL = import.meta.env.BASE_URL
const store = useStore()
const chatContainer = ref<HTMLDivElement | null>(null)

onMounted(() => {
    if (chatContainer.value) {
        chatContainer.value.focus()
    }
    store.setChatContainerToBottom(() => {
        if(chatContainer.value) {
            chatContainer.value.scrollTop = chatContainer.value.scrollHeight
        }
    })
})

</script>

<style scoped></style>