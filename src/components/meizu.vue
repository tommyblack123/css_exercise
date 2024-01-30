<!-- https://yujingbo1023.github.io/meitu/ -->

<script setup lang='ts'>
import { requiredNumber } from 'element-plus/es/components/table-v2/src/common.mjs';
import { ref, reactive, onMounted } from 'vue';

interface goodsitem {
    img: string;
    name: string;
    desc: string;
}

function getIcon(name: string) {
    return new URL(`../assets/meizu/${name}`, import.meta.url).href;
}



const goodslist = ref<Array<goodsitem>>([
    {
        img: '1.jpg',
        name: '520礼遇季',
        desc: '购物抽双分礼'
    },
    {
        img: '1.jpg',
        name: '520礼遇季',
        desc: '购物抽双分礼'
    },
    {
        img: '1.jpg',
        name: '520礼遇季',
        desc: '购物抽双分礼'
    },
    {
        img: '1.jpg',
        name: '520礼遇季',
        desc: '购物抽双分礼'
    },
])


</script>

<template>
    <div>

        <div class="nav">
            <ul>
                <li><a href="#">手机</a></li>
                <li><a href="#">声学</a></li>
                <li><a href="#">配件</a></li>
                <li><a href="#">生活</a></li>
                <li><a href="#">Flyme</a></li>
                <li><a href="#">服务</a></li>
                <li><a href="#">专卖店</a></li>
                <li><a href="#">社区</a></li>
                <li><a href="#">政企定制</a></li>
                <li><a href="#">APP现在</a></li>
            </ul>
        </div>

        <div class="banner"></div>

        <div class="ad">
            <div class="wrap">
                <div class="box" v-for="(item, i) in  goodslist" :key="i">
                    <img :src="getIcon(item.img)" class="goods-img">
                    <p class="goods-name">{{ item.name }}</p>
                    <p class="goods-desc">{{ item.desc }}</p>
                </div>
            </div>
        </div>


        <div class="content">
            <div class="phone">
                <p class="title">
                    手机
                </p>

                <div class="ad-img">

                </div>

                <div class="phone-box">
                    <div class="phone-wrap">
                        <div class="phone-box-top">
                            <div class="phone-item" v-for="(item, index) in 3" :key="index">
                                <a href="">
                                    <p class="phone-name">魅族17pro</p>
                                    <p class="phone-desc">高通最新处理器</p>
                                    <p class="phone-price">
                                        <span>￥</span>3389
                                    </p>
                                    <img src="../assets/meizu/3.png" alt="">
                                </a>
                            </div>
                        </div>

                        <div class="phone-box-bottom">
                            <div class="phone-item" v-for="(item, index) in 4" :key="index">
                                <a href="">
                                    <img src="../assets/meizu/4.png" alt="">
                                    <p class="phone-name">魅族17航母限定版</p>
                                    <p class="phone-desc">以梦为航</p>
                                    <p class="phone-price">
                                        <span>￥</span>3389
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

            <div class="voice"></div>
        </div>

    </div>
</template>

<style scoped lang='scss'>

.phone-box-bottom{
    width: 100%;
    display: flex;        

}


.phone-box-bottom .phone-item{
    flex: 0 1 25%;
}
.phone-box-bottom .phone-item img{
    width: 100%;
}

.phone-box{
    background-color: gold;
}

.phone-box-top{
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.phone-box-top .phone-item{
    flex: 0 1 50%;
    overflow: hidden;
}


.phone-box-top .phone-item .phone-name{
    color: #333;
    font-size: 28px;
    padding-top: 57px;
}

.phone-box-top .phone-item .phone-desc{
    font-size: 18px;
    color: #333;
}

.phone-box-top .phone-item .phone-price{
    color: #c00;
    font-size: 22px;

    span{
        font-size: 14px;
    }
}

.phone-box-top .phone-item img{
    width: 100%;
}


.phone-box .phone-wrap{
    width: 1240px;
     margin: 0 auto;
}


.phone .title {
    font-size: 3rem;
    color: black;
    text-align: center;
    height: 50px;
    padding-top: 55px;
}




* {
    a {
        text-decoration: none;
    }
}


.ad-img {
    height: 450px;
    background: url('../assets/meizu/2.jpg') center no-repeat;
}

.ad-img:hover {
    opacity: 0.85;
}


.content {
    background-color: #f4f4f4;
}

.phone-item .phone-name {
    color: #333;
    font-size: 28px;
    padding-top: 58px;
}

.phone-item .phone-desc {}


.content {}


.content .phone {}


.content .voice {}

.nav {
    background-color: #c21923;
    width: 100%;
}

.nav ul {
    display: flex;
    height: 82px;
    font-size: 1.4rem;
}


.nav ul li {
    margin: 36px 20px 0px;
}

.nav ul a {
    text-decoration: none;
    color: white;
}


.nav ul a:hover {
    color: #008cff;
}


.banner {
    width: 100%;
    height: 670px;
    background: url('../assets/meizu/meizu.jpg') center no-repeat;
}

.ad {
    width: 100%;
    height: 277px;
    background-color: white;
    border-bottom: 1px solid #eee;
}

.ad .wrap {
    height: 277px;
    background-color: gold;
    margin: 0 auto;
    width: 1240px;
    display: flex;
}

.ad .wrap .box {
    flex: 1;
    height: 277px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
}

.ad .wrap .box .goods-img {
    width: 130px;
    height: 130px;
}

.goods-name {
    color: #333;
    font-size: 20px;
    height: 30px;
}

.goods-desc {
    color: #999;
    font-size: 14px;
    height: 21px;
}
</style>