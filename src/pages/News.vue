<template>
    <div>
        <!-- 拷贝news.html 头脚中间内容进入此处 -->
        <div class="header_box"></div>
        <!--面包屑导航-->
        <div class="breadcrumb">
            <div class="container">
                <h2>
                    <!-- <router-link to="/index">首页</router-link>&gt; -->
                    <a href="">首页</a>&ge;
                    <a href="">公司动态</a>
                </h2>
            </div>
        </div>
        <!--页面主体-->
        <div class="main container">
            <div class="news">
                <ul>
                    <!-- vue提供的循环写法 -->
                    <li v-for="(item,index) in news.data" :key="index">
                        <span>{{item.pubTime | dateFormat}}</span>
                        <!-- params 和 query 都可以用来传参 -->
                        <router-link :to="{ path:'/news_details',query:{nid:item.nid}}">
                            {{item.title}}
                        </router-link>
                        <!-- <a href="">{{item.title}}</a> -->
                    </li>
                    <!-- <li>
                        <span>2016-02-21</span><a href="">空气净化器要逆天？ “玫瑰金”“土豪金”齐上阵</a>
                    </li>
                    <li>
                        <span>2016-02-21</span><a href="">净美仕新风净化系统 助力校园新风行动</a>
                    </li>
                    <li>
                        <span>2016-02-21</span><a href="">全国新风行动全面启动 助推净美仕战略升级</a>
                    </li>
                    <li>
                        <span>2016-02-21</span><a href="">智能空气净化器翻盘：净美仕能否领衔?</a>
                    </li> -->
                </ul>
            </div>
            <!-- 分页导航-->
            <div class="pages">
                <!-- v-show 和 v-if 同效果,都可以判断是否应该显示 -->
                <a v-show="news.pageNum!=1" @click.prevent="getNews(news.pageNum-1)" class="prev">
                    上一页
                </a>
                <a v-show="news.pageNum==1" @click.prevent class="default">
                    上一页
                </a>
                <a v-for="n in news.pageCount" :key="n" :class="n==news.pageNum ? 'cur' :''" @click.prevent="getNews(n)">
                    {{n}}
                </a>
                
                <!-- <a href="" class="">上一页</a>
                <a href="" class="cur">1</a>
                <a href="">2</a>
                <a href="">3</a>
                <a href="">4</a>
                <a href="">5</a>
                <a href="">下一页</a> -->
                
                <!-- 添加一个判定: 当前页数小于总页数 才会显示下一页 -->
                <a class="default" @click.prevent v-if="news.pageNum==news.pageCount">下一页</a>
                <!-- prevent: 阻止标签默认的操作 -->
                <a v-else class="next" @click.prevent="getNews(news.pageNum+1)">下一页</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"News",
    // data属性:专门用来提供数据项
    data(){
        return {
            news:{}
        };
    },
    // methods属性: 专门提供此页面使用的方法
    methods: {
        // p代表页数
        getNews(p) {
            // 常见的 异步请求解决方案
            var that = this;

            //发 axios 请求
            var url = "news_select.php";
            var params = "pageNum=" + p;

            this.$axios
                .post(url, params)
                .then(res => {
                    console.log(res);
                    that.news = res.data;
                })
                .catch(err => {
                    console.error(err);
                });
        }
    },
    // 生命周期: 准备创建vue->创建完毕->准备挂载->挂载成功->准备更新->更新完毕->准备销毁->销毁完毕
    // mounted: 监听挂载成功的时机
    mounted() {
        this.getNews(1);
    },
    // vue的过滤器, 可以让变量进行调整, 使用方式
    // {{变量|过滤器}}
    filters:{
        dateFormat:function(time){
            time = parseInt(time);

            var t = new Date(time);
            var year = t.getFullYear();
            var month = t.getMonth() + 1;
            var day = t.getDate();

            return year + "-" + month + "-" + day;
        }
    }
};
</script>

<style scoped>

</style>