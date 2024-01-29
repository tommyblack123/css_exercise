<!-- https://yujingbo1023.github.io/meitu/ -->

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue';
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

  </div>
</template>

<style scoped lang='scss'>

.nav{
    background-color: #c21923;
    width: 100%;
}

.nav ul{
    display: flex;
    height: 82px;
    font-size: 1.4rem;
}


.nav ul li{
 margin: 36px 20px 0px;
}

.nav ul a{
    text-decoration:none;
    color: white;
}


.nav ul a:hover{
    color: #008cff;
}


</style>