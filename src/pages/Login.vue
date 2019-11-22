<template>
    <div>
        <div class="login_box">
            <div class="container">
                <div class="login">
                    <h2>用户登录</h2>
                    <dl class="clearfloat">
                        <dt>
                            <span class="tips" id="uname_prompt_text"></span>用户名：
                        </dt>
                        <dd>
                            <input type="text" id="uname" placeholder="邮箱/手机号" v-model="uname"/>
                            <em class="icon_user"></em>
                            <i class="icon_error" id="uname_prompt_icon"></i>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span class="tips" id="pwd_prompt_text">请输入密码</span>密码：
                        </dt>
                        <dd>
                            <input type="password" id="pwd" placeholder="密码" v-model="upwd"/>
                            <em class="icon_pwd"></em>
                            <i class="icon_error" id="pwd_prompt_icon"></i>
                        </dd>
                    </dl>
                    <p>
                        <lable>
                            <input type="checkbox"/>
                            <span>自动登录</span>
                        </lable>
                    </p>
                    <button type="button" @click.prevent="login()" id="login">立 即 登 录</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

const qs = require('qs')

export default {
    name:"Login",
    data(){
        return{
            uname:"",
            upwd:""
        }
    },
    methods:{
        login(){
            var url = 'user_login.php'
            // unameOrPhone =xxx&upwd=xxx
            var params = 'unmaeOrPhone='+this.uname + '&upwd='+ this.upwd

            // 把参数写成对象格式,然后使用qs转为 url参数格式
            var obj={
                unameOrPhone:this.uname,
                upwd:this.upwd
            }
            var args = qs.stringify(obj)
            console.log('args='+ args)

            this.$axios.post(url,params)
            .then(res =>{
                console.log(res)
                // 判断 code==1 就是登陆成功,否则是失败
                // 如果成功,则提示登陆成功,保存信息到session,跳转到首页
                if(1 == res.data.code){
                    alert('登陆成功')
                    sessionStorage.uname = res.data.uname
                    sessionStorage.uid = res.data.uid
                    this.$router.push({path:'/'})
                }else{
                    alert('登陆失败')
                }
            })
            .catch(err =>{
                console.error(err);
                alert('登陆失败')
            })
        }
    }
}
</script>
<style scoped>

</style>