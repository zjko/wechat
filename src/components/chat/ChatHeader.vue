<template>
    <div class="header">
        <div class="left item">
            <img class="button" :src="BASE_URL + '/icon/back.svg'" alt="back" @click="store.back()" />
        </div>
        <div class="center item">
            <div class="title">{{ store.view.chat.headerText }}</div>
        </div>
        <div class="right item">
            <img class="button" :src="BASE_URL + '/icon/more.svg'" alt="more" />
        </div>
    </div>
</template>

<script setup lang="ts">

import { useStore } from '@/stores/store';
const BASE_URL = import.meta.env.BASE_URL
const store = useStore()
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 100%;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

.item {
    flex: 0 0 30%;
    text-align: center;
    display: flex;
    justify-items: center;
    margin-left: 10px;
    margin-right: 10px;
}

.item:nth-child(2) {
    margin: 0 auto;
}

.button {
    width: 20px;
    height: 20px;
}
.center {
    justify-content: center;
}
.right {
    justify-content: flex-end;

}
.title {
    font-size: 16px;
    font-weight: bold;
    color: #333;
}
</style>