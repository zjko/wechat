<template>
    <div class="bottom">
        <img class="img" :src="BASE_URL + '/icon/' + (store.view.chat.voiceMode ? 'keyboard.svg' : 'voice.svg')"
            alt="back" @click="store.switchVoiceMode()" />
        <div v-if="!store.view.chat.voiceMode" class="input-wrap">
            <input class="input" @input="store.chatInput" @keydown="store.chatKeyBoard"
                v-model="store.view.chat.inputText" />
        </div>
        <div class="input-wrap" v-else>
            <div class="voice-button">按住说话</div>
        </div>
        <div class="right">
            <img class="img" :src="BASE_URL + '/icon/smile.svg'" alt="smile" />
            <div class="send-button" v-if="store.view.chat.showSendButton" @click="store.sendInputMessage()">发送</div>
            <img class="img" v-else :src="BASE_URL + '/icon/add.svg'" alt="add" />
        </div>
    </div>
</template>

<script setup lang="ts">

import { useStore } from '@/stores/store';
const BASE_URL = import.meta.env.BASE_URL
const store = useStore()
</script>

<style scoped>
.bottom {
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: row nowrap;
    
    align-items: center;
    height: 50px;
    width: 100%;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    background-color: #f7f7f7;

}

.img {
    width: 30px;
    height: 30px;
    margin-left: 10px;
}

.input-wrap {
    flex: 2;
    height: 30px;
    background-color: #fff;
    border-radius: 5px;
    margin-left: 10px;
    width: calc(100% - 170px);
    text-align: center;
    justify-self: center;
    align-items: center;
    display: flex;
    
    
}

.input {
    height: 100%;
    width: 100%;
    background-color: #fff;
    border: none;
}

.send-button {
    height: 30px;
    width: 60px;
    color: #fff;
    border-radius: 5px;
    background-color: rgb(119, 230, 119);
    margin-left: 10px;
    text-align: center;
    line-height: 30px;
}

.right {
    margin-right: 10px;
    display: flex;
    flex-direction: row nowrap;
}

.voice-button {
    width: 100%;
}
</style>