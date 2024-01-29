<!-- https://yujingbo1023.github.io/meitu/ -->

<script setup lang='ts'>
import { requiredNumber } from 'element-plus/es/components/table-v2/src/common.mjs';
import { ref, reactive, onMounted } from 'vue';

interface goodsitem{
    img:string;
    name:string;
    desc:string;
}

function getIcon(name: string) {
    return new URL(`../assets/meizu/${name}`, import.meta.url).href;
}



const  goodslist = ref<Array<goodsitem>>([
    {
        img: '1.jpg',
        name:'520礼遇季',
        desc:'购物抽双分礼'
    },
    {
        img: '1.jpg',
        name:'520礼遇季',
        desc:'购物抽双分礼'
    },
    {
        img: '1.jpg',
        name:'520礼遇季',
        desc:'购物抽双分礼'
    },
    {
        img: '1.jpg',
        name:'520礼遇季',
        desc:'购物抽双分礼'
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
                <div class="box" v-for="(item,i) in  goodslist" :key="i">
                    <img :src="getIcon(item.img)" class="goods-img">
                    <p class="goods-name">{{ item.name}}</p>
                    <p class="goods-desc">{{ item.desc}}</p>
                </div>
            </div>
        </div>


    </div>
</template>

<style scoped lang='scss'>
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
.ad .wrap .box{
    flex: 1;
    height: 277px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
}

.ad .wrap .box .goods-img{
    width: 130px;
    height: 130px;
}

</style>