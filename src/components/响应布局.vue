<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue';
</script>

<template>
    <ul class="layout">
        <li class="left">
            <div class="left-main">
                <div class="left-head">
                    <SvgIcon name="9dot9baoyou" width="10px" height="10px" color="red"></SvgIcon>
                    <span>首页</span>
                </div>

                <ul>
                    <li>c++</li>
                    <li>java</li>
                    <li>php</li>
                    <li>delphi</li>
                </ul>

            </div>

        </li>
        <li class="right">
            <div class="right-header">
                <h1>
                    打造高质量课程
                </h1>

                <h2>
                    不忘初心，磨砺前行
                </h2>
            </div>

            <div class="content">
                <div class="title">
                    <SvgIcon name="hot" width="20px" height="20px"></SvgIcon>
                    <h3>首页</h3>
                </div>
                <ul>
                    <li>
                        <img src="../assets/back.jpg" alt="">
                    </li>
                    <li>
                        <img src="../assets/周杰伦.jpg" alt="">
                    </li>
                    <li>
                        <img src="../assets/王力宏.jpg" alt="">
                    </li>
                    <li>
                        <img src="../assets/陶喆.jpg" alt="">
                    </li>
                </ul>

                <div class="title">
                    <SvgIcon name="hot" width="20px" height="20px"></SvgIcon>
                    <h3>首页</h3>
                </div>
                <ul>
                    <li>
                        <img src="../assets/back.jpg" alt="">
                    </li>
                    <li>
                        <img src="../assets/周杰伦.jpg" alt="">
                    </li>
                    <li>
                        <img src="../assets/王力宏.jpg" alt="">
                    </li>
                    <li>
                        <img src="../assets/陶喆.jpg" alt="">
                    </li>
                </ul>


            </div>


        </li>
    </ul>
</template>

<style scoped lang='scss'>
.content {
    padding: 2rem;
}

.content .title {
    display: flex;
    align-items: center;
}


.content ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.content ul li {
    flex: 0 1 24%;
    overflow: hidden;
}

.content ul li img {
    max-width: 100%;
    transition: all 0.8s ease;
}

.content ul li img:hover {
    transform: scale(1.4);
}


.layout {
    display: flex;
}

.left {
    flex-basis: 20rem;
    background-color: #333;
    overflow: hidden;
    min-height: 100vh;
}

.right {
    flex: 1;
    // background-color: pink;
}

.left-main {
    color: #fff;
}

.left-main ul li {
    margin-left: 1rem;
    padding: 0.5rem;
}


.left-head {
    background-color: #404040;
    padding: 0.5rem;

    span {
        font-size: 1.8rem;
    }
}

.right-header {
    text-align: center;
    border: 1px solid #eee;

    h1 {
        font-size: 3rem;
        font-weight: 400;
    }

    h2 {
        font-size: 2rem;
        font-weight: 300;
        color: #ccc;
    }
}

@media (max-width:1200px) {
    .content ul li {
        flex: 0 1 49%;
        overflow: hidden;
    }
}

@media (max-width:992px) {
    .content ul li {
        flex: 0 1 49%;
        overflow: hidden;
    }
    .left{
        display: none;
    }
}


</style>