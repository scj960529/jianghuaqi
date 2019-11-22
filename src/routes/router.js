// 保存路由对象

// 做出路由对象:

// ES6的导出 和 导入 需要配合使用

/*  export default ***  
    用的是 import *** from **
    
    export ***
    用的是import {***} from ***   */

import {routes} from "./routes"

import Vue from "vue"
import VueRouter from "vue-router"

// 让vue加载 router路由模块
Vue.use(VueRouter)

// 实例化一个路由对象, 导出
// 实例化时 必须传入 routes:[], []中存放对应关系
export const router = new VueRouter({
    // routes:routes    //前面是属性名,用来放数组的  后面是引过来的
    routes    // 因为两个名字一样,可以简写。  效果同上
})

// 到App.vue中 , 主文件中  加载此 路由