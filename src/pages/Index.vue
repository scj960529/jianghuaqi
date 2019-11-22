<template>
    <div>
        <div class="banner">
            <!-- 图片列表-->
            <ul>
                <transition-group name="fade">
                    <!-- 通过:key 规定 哪些元素执行动画切换 -->
                    <li :key="1" v-show="cur==1">
                        <a href="#" class="link"></a>
                    </li>
                    <li :key="2" v-show="cur==2">
                        <a href="#" class="link"></a>
                    </li>
                    <li :key="3" v-show="cur==3">
                        <a href="#" class="link"></a>
                    </li>
                    <li :key="4" v-show="cur==4">
                        <a href="#" class="link"></a>
                    </li>
                </transition-group>
            </ul>
            <!-- 左右箭头-->
            <span class="cut prev" @click="prevBanner()"></span>
            <span class="cut next" @click="nextBanner()"></span>
            <!-- 小圆点指示器-->
            <div class="indicator">
                <a href :class="{cur:cur==1}" @click.prevent="cur=1"></a>
                <a href :class="{cur:cur==2}" @click.prevent="cur=2"></a>
                <a href :class="{cur:cur==3}" @click.prevent="cur=3"></a>
                <a href :class="{cur:cur==4}" @click.prevent="cur=4"></a>
            </div>
        </div><!-- banner end -->
        <!--main-->
        <div class="main container">
            <div class="ind_con1">
                <h2 class="title">
                <a href="#" class="more">more</a>净美仕产品
                </h2>
                <ul class="clearfloat">
                    <li>
                        <a href="#" class="link">
                            <img src="../assets/images/01.jpg" alt />
                        </a>
                    </li>
                    <li>
                        <a href="#" class="link">
                            <img src="../assets/images/02.jpg" alt />
                        </a>
                    </li>
                    <li>
                        <a href="#" class="link">
                            <img src="../assets/images/03.jpg" alt />
                        </a>
                    </li>
                </ul>
            </div>
            <div class="ind_con2 clearfloat">
                <div class="ind_about">
                    <h2 class="title">
                        <a href="#" class="more">more</a>关于净美仕
                    </h2>
                    <p>
                        北京净美仕环境科技有限公司自诞生起一直关注人类呼吸健康的问题，并专注于室内空气质量的研究与改善。2003年，非典来袭，环境安全威胁到了每个人的生命，全国陷入一片恐慌。净美仕肩负着为人类创造健康安全生活环境的使命应运而生。2012年7月，亿朗以“净美仕(Mfresh)”为品牌重塑，以崭新的面貌屹立在净化行业。
                        <a href="#">查看更多</a>
                    </p>
                </div>
                <div class="ind_news">
                    <h2 class="title">
                        <a href="#" class="more">more</a>公司动态
                    </h2>
                    <ul>
                        <li>
                            <span>2016-02-21</span>
                            <a href>空气净化器要逆天？ “玫瑰金”“土豪金”齐上阵</a>
                        </li>
                        <li>
                            <span>2016-02-21</span>
                            <a href>净美仕新风净化系统 助力校园新风行动</a>
                        </li>
                        <li>
                            <span>2016-02-21</span>
                            <a href>全国新风行动全面启动 助推净美仕战略升级</a>
                        </li>
                        <li>
                            <span>2016-02-21</span>
                            <a href>智能空气净化器翻盘：净美仕能否领衔?</a>
                        </li>
                    </ul>
                </div> <!-- ind_news end-->
            </div><!--ind_con2 end-->
        </div><!-- main end-->
    </div><!-- 包裹结束 -->
</template>

<script>
export default {
    name: "Index",
    data(){
        return{
            //   当前显示的图片是第几张
            cur:1,
            interval : null
        }
    },
    methods:{
        // 下一页
        nextBanner(){
            if(this.cur == 4){
                this.cur = 1
            }else{
                this.cur += 1
            }
        },
        // 上一页
        prevBanner(){
            if(this.cur == 1){
                this.cur = 4
            }else{
                this.cur -=1
            }
        }
    },
    mounted(){
        if(!this.interval){
            this.interval = setInterval(this.nextBanner,5000)
        }
    }
};
</script>

<style scoped>
    /* 在style标签中的图片路径,打包时会自适应 */
    .banner li:first-child{
        background:url(../assets/images/banner_01.jpg) center 0 no-repeat;
        display: block;
    }
    .banner li:nth-child(2){
        background:url(../assets/images/banner_02.jpg) center 0 no-repeat;
        display: block;
    }
    .banner li:nth-child(3){
        background:url(../assets/images/banner_03.jpg) center 0 no-repeat;
        display: block;
    }
    .banner li:nth-child(4){
        background:url(../assets/images/banner_04.jpg) center 0 no-repeat;
        display: block;
    }

    /* 规定切换时的样式, name="fade" */
    .fade-enter-active,
    .fade-leave-active{
        transition:opacity 0.5s;
    }
    .fade-enter,.fade-leave-to{
        opacity:0;
    }
</style>