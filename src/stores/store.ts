
import { defineStore } from 'pinia'
import { app } from '@/main'
import {MessageType, request} from '@/util/bigmodel'
import { v4 as uuidv4 } from 'uuid';
import { nextTick } from 'vue';

const BASE_URL = import.meta.env.BASE_URL
export const useStore = defineStore('store', {
  state: () => ({
    myInfo: {
      "name": "zjko",
      "avatar": BASE_URL + '/avatar/me.svg'
    },
    contact: {} as any,
    chatHistory: {} as any,
    view: {
      tabarId: 0,
      headerText: "微信",
      tabbar: [
        {
          "title": "微信",
          "path": "/",
          "icon": BASE_URL + '/icon/chats-select.svg'
        },
        {
          "title": "通讯录",
          "path": "/contact",
          "icon": BASE_URL + '/icon/contacts.svg'
        },
        {
          "title": "发现",
          "path": "/discover",
          "icon": BASE_URL + '/icon/discover.svg'
        },
        {
          "title": "我的",
          "path": "/me",
          "icon": BASE_URL + '/icon/me.svg'
        },
      ],
      chat: {
        contactId: "",
        headerText: "",
        showSendButton: false,
        voiceMode: true,
        inputText: "",
        toBottom: null
      }
    }

  }),
  getters: {
    get: (state) => state
  },
  actions: {
    setContact(contact: any) {
      this.contact = contact
      console.log(this.contact)
    },
    setTabbar(tabarId: number) {
      let currentTabbarId = this.view.tabarId;
      if (currentTabbarId == tabarId) {
        return
      }
      // 取消之前的选中 设置当前tabbarId
      this.view.tabbar[currentTabbarId].icon = this.view.tabbar[currentTabbarId].icon.replace('-select', '')
      this.view.tabarId = tabarId
      this.view.headerText = this.view.tabbar[tabarId].title
      this.view.tabbar[tabarId].icon = this.view.tabbar[tabarId].icon.replace('.svg', '-select.svg')
      app.config.globalProperties.$router.push(this.view.tabbar[tabarId].path)
    },
    getContactList(): any[] {
      let contacts: any[] = []
      Object.keys(this.contact).forEach((key: string) => {
        let contact = this.contact[key]
        contacts.push({
          ...contact,
          id: key,
        })
      })
      return contacts
    },
    openChatPage(contactId: string) {
      this.view.chat.contactId = contactId
      this.view.chat.headerText = this.contact[contactId].name
      app.config.globalProperties.$router.push('/chat/index')
    },
    back() {
      app.config.globalProperties.$router.back()
    },
    switchVoiceMode() {
      if (this.view.chat.voiceMode) {
        this.chatInput()
      } else {
        this.view.chat.showSendButton = false
      }
      this.view.chat.voiceMode = !this.view.chat.voiceMode

    },
    chatInput() {
      console.log(this.view.chat.inputText)
      if (this.view.chat.inputText.length > 0) {
        this.view.chat.showSendButton = true
      } else {
        this.view.chat.showSendButton = false
      }
    },
    chatKeyBoard(e: any) {
      if (e.code == "Enter") {
        this.sendInputMessage()
      }
    },
    setChatContainerToBottom(toBottom: ()=>void) {
      // @ts-ignore
      this.view.chat.toBottom = toBottom
    },
    sendInputMessage() {
        console.log(this.view.chat.inputText)

        // init 初始化聊天记录
        if(!this.chatHistory[this.view.chat.contactId]) {
          this.chatHistory[this.view.chat.contactId] = []
        }

        // step1 生成聊天记录
        let msg = {
          id: uuidv4(),
          type: MessageType.TEXT,
          content: this.view.chat.inputText,
          isMe: true
        }
        this.chatHistory[this.view.chat.contactId].push(msg)

        // step2 清空输入框
        this.view.chat.inputText = ""
        
        
        nextTick(() => {
          // step3 滚动到底部
          if(this.view.chat.toBottom) {
            //@ts-ignore
            this.view.chat.toBottom()
          }
        })
        

    },
    getChatHistory() : any[]{
      return this.chatHistory[this.view.chat.contactId]
    }
  }
})
