// html
<template>
    <div>
        <header class="header container">
            <h1 class="logo">
                <a href="index.html" class="link"></a>
            </h1>
            <div class="h_con">
                <ul class="clearfloat">
                    <li class="phone">4000-585-116</li>
                    <li>
                        <a href="#">中文</a>
                    </li>
                    <li>
                        <em>|</em>
                    </li>
                    <li>
                        <a href="#">English</a>
                    </li>
                    <li>
                        <a href="#" class="weixin"></a>
                    </li>
                    <li>
                        <a href="#" class="weibo"></a>
                    </li>
                    <li>
                        <router-link to="/login" class="h_login">登录</router-link>
                        <!-- <a href="login.html" class="h_login">登录</a> -->
                    </li>
                    <li><em>|</em></li>
                    <li>
                        <router-link to="/register" class="h_register">注册</router-link>
                        <!-- <a href="register.html" class="h_register">注册</a> -->
                    </li>
                    <li v-show="isLogin" class="top_user"><a href="">{{uname}}</a></li>
                    <li v-show="isLogin" class="top_quit"><a @click.prevent="logout()">退出</a></li>
                </ul>
                <div class="search clearfloat">
                    <button type="button"></button>
                    <input type="text"/>
                </div>
            </div>
        </header>
        <!--nav-->
        <nav class="navbar">
            <div class="container">
                <div class="nav">
                    <ul>
                        <li>
                            <a href="index.html">
                                <span class="icon_home"></span>首页
                            </a>
                        </li>
                        <li>
                            <!-- 路由跳转配合专门的标签 -->
                            <router-link to="/about">关于净美仕</router-link>
                            <!-- <a href="/about">关于净美仕</a> -->
                        </li>
                        <li>
                            <router-link to="/news">公司动态</router-link>
                            <!-- <a href="news.html">公司动态</a> -->
                        </li>
                        <li class="nav_pd">
                            <router-link to="/product">
                                产品中心<span class="icon_pd"></span>
                            </router-link>
                            <!-- <a href="product.html">产品中心<span class="icon_pd"></span></a> -->
                            <div class="pd_dropdown">
                                <a href="product.html?type=1">净美仕净化器</a>
                                <a href="product.html?type=2">净美仕滤网</a>
                            </div>
                        </li>
                        <li>
                            <router-link to="/contact">联系我们</router-link>
                            <!-- <a href="contact.html">联系我们</a> -->
                        </li>
                    </ul>
                </div>
                <div class="s_cart">
                    <router-link to="/cart">
                    <!-- <a href="cart.html"> -->
                        <span class="icon_cart"></span>购物车(<strong id="cart_sum">0</strong>)<span class="icon_sj"></span>
                    <!-- </a> -->
                    </router-link>
                    <div class="cart_dropdown">
                        <h3>您的购物车为空~</h3>
                        <ul>
                            <li>
                                <a href=""><img src="../assets/product-imgs/jhq-m8088a.jpg" alt=""/></a>
                                <div>
                                    <span>-</span><input type="text" value="2"/><span>+</span>
                                </div>
                                <strong>¥1599.00</strong>
                                <em></em>
                            </li>
                            <li>
                                <a href=""><img src="../assets/product-imgs/jhq-m8088a.jpg" alt=""/></a>
                                <div>
                                    <span>-</span><input type="text" value="2"/><span>+</span>
                                </div>
                                <strong>¥1599.00</strong>
                                <em></em>
                            </li>
                        </ul>
                        <div class="cd_js clearfloat">
                            <span>共计：<strong>0.00</strong></span>
                            <a href="#">结算</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

// 脚本
<script>
export default{
    // name属性没什么影响,如果报错的时候会有提示
    name:"Header",
    data(){
        return{
            isLogin:false,
            uname:undefined
        }
    },
    mounted(){
        this.checkLogin()
    },
    methods:{
        // 检查登陆状态
        checkLogin(){
            this.isLogin = sessionStorage.uid != undefined
            this.uname = sessionStorage.uname
        },
        logout(){
            sessionStorage.clear()
            this.checkLogin()
        }
    },
    // 观察器: 观察路由变化,当路由变化时查看登陆状态
    watch:{
        // 观察路由
        $route:function(){
            this.checkLogin()
        }
    },
}
</script>

// 样式
<style scoped>
</style>