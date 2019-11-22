// 引入axios模块
import axios from 'axios'


//实例化: 导出实例对象
//实例化时配置 基础url 和 跨域操作
//基础url: baseURL 可以让后期url路径省略前缀域名部分
// 跨区操作: 前端是本地的, 但是接口是网络的
export const axios_instance = axios.create({
    baseURL: 'http://www.codeboy.com/mfresh/data/',
    headers: {
        'Content-Type': "application/x-www-form-urlencoded"
    }
})