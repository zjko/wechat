<template>
    <div class="tabbar">
        <div class="item" v-for="(item, key) in store.view.tabbar" @click="store.setTabbar(key)">
            <img :src="item.icon">
            <span>{{ item.title }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store';
const store = useStore()
</script>

<style scoped>
.tabbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0 -1px 1px rgba(0, 0, 0, .1);
}

.item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
</style>
