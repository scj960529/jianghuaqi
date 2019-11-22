<template>
    <div>
        <div class="register">
            <h2>新用户注册</h2>
            <ul>
                <li>
                    <span>邮箱：</span>
                    <!-- v-model 专门配合input使用,绑定value -->
                    <input type="text" id="uname" placeholder="请输入邮箱名" v-model="uname"/>
                    <em></em>
                    <i></i>
                </li>
                <li>
                    <span>密码：</span>
                    <input type="password" id="upwd" placeholder="请输入密码" v-model="upwd"/>
                    <em></em>
                    <i></i>
                </li>
                <li>
                    <span>重复密码：</span>
                    <input type="password" id="upwd2" placeholder="请重复输入密码" v-model="upwd2" />
                    <em></em>
                    <i></i>
                </li>
                <li>
                    <span>手机号：</span>
                    <input type="text" id="phone" placeholder="请输入手机号" v-model="phone"/>
                    <em></em>
                    <i></i>
                </li>
                <li>
                    <span>验证码：</span>
                    <input type="text" class="inp_yzm" placeholder="请输入验证码"/>
                    <img src="../assets/images/yzm.png" alt=""/>
                    <strong class="icon_refresh"></strong>
                </li>
                <li class="li_checkbox"><label>
                    <input type="checkbox" checked/>
                    <span>我已阅读并同意用户注册协议</span>
                    </label>
                </li>
                <li class="li_btn">
                    <button type="button" @click.prevent="regist()">提交注册</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"Register",
    data() {
        return {
            uname: '',
            upwd: '',
            upwd2: '',
            phone: ''
        }
    },
    methods: {
        regist(){
            // alert('注册操作')
            var url = 'user_register.php'
            //uname=xxx&upwd=xxx&phone=xxx
            var params = 'uname='+this.uname+'&upwd='+this.upwd + '&phone='+ this.phone

            this.$axios.post(url,params)
                .then(res => {
                    console.log(res)
                    if (res.data.code == 1){
                        alert('恭喜您,注册成功! 即将为您跳转到首页!')
                        //短期保存登录状态, 保存到标签被关闭
                        sessionStorage.uname = res.data.uname
                        sessionStorage.uid = res.data.uid

                        //通过代码来触发路由, 实现跳转
                        this.$router.push({path: '/'})
                    }else{
                        alert('不好意思, 注册失败!')
                    }
                })
                .catch(err => {
                    console.error(err); 
                    alert('不好意思, 注册失败!')
                })
        }
    },
}
</script>
<style scoped>

</style>