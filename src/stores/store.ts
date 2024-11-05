
import { defineStore } from 'pinia'
import { app } from '@/main'

const BASE_URL = import.meta.env.BASE_URL
export const useStore = defineStore('store', {
  state: () => ({
    myInfo: {
      "name": "zjko",
      "avatar": BASE_URL + '/avatar/me.svg'
    },
    contact: {} as any,
    chatHistory: {},
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
      ]
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
    }
  }
})
