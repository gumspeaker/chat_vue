export function init(){
    if(typeof(WebSocket) === "undefined"){
        alert("您的浏览器不支持socket")
    }else{
        // 实例化socket
        this.socket = new WebSocket(this.path)
        // 监听socket连接
        this.socket.onopen = this.open
        // 监听socket错误信息
        this.socket.onerror = this.error
        // 监听socket消息
        this.socket.onmessage = this.getMessage
}
export  function open() {
    console.log("socket连接成功")
},
export function error() {
    console.log("连接错误")
},
export  function getMessage(msg) {
    console.log(msg.data)
},
export  function send() {
    this.socket.send(params)
},
export function close () {
    console.log("socket已经关闭")
}
},
export function destroyed () {
// 销毁监听
this.socket.onclose = this.close
}