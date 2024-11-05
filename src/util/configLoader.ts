import axios from 'axios'
let BASE_URL = import.meta.env.BASE_URL

export function loadConfig(path: string, callback: any) {
    axios.get(BASE_URL + path).then((response) => {
        callback(response.data)
        console.log("配置加载完成")
    })
}