import axios from 'axios'

export interface Prompt {
    content: string,
    role: string
}
export enum MessageType {
    TEXT,
    IMAGE,
    VOICE
}




export function request(prompts: Prompt[]) {
    var data = JSON.stringify({
        "model": "glm-4",
        "messages": prompts
      });
      
      var config = {
        method: 'post',
        url: 'https://open.bigmodel.cn/api/paas/v4/chat/completions',
        headers: { 
          'Authorization': 'Bearer b26f0eb5bcda7e6f85bd1ac028165edc.taVsJ543HqdooePC', 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      
}