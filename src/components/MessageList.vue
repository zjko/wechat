<template>
    <main>
        <div class="message-list">
            <div class="message" v-for="msg in store.getContactList()" :key="msg.id" @click="store.openChatPage(msg.id)">
                <div class="left">
                    <img class="avatar" :src="msg.avatar" alt="avatar">
                </div>
                <div class="center">
                    <div>{{ msg.name }}</div>
                    <div>{{ msg.sayHi }}</div>
                </div>
                <div class="right">
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store';
const store = useStore()
console.log(store.getContactList())
</script>

<style scoped>
.message-list {
    position: fixed;
    top: 40px;
    left: 0;
    background-color: #fff;
    padding: 0 5px 0 5px;
    height: calc(100vh - 90px);
    width: 100%;
    overflow-y: scroll;
}

.message {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    height: 60px;

}

.avatar {
    border-radius: 8px;
    width: 50px;
    height: 50px;
}

.left .right {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.center {
    flex: 1;
    margin-left: 5px;
}
</style>