<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue';
</script>

<template>
  <div class="bg">
    <div class="container">
        <div class="login"></div>
        <div class="agreement">
            <!-- <p>未注册手机验证后自动登录，注册即代表同意《知乎协议》《隐私保护指引》</p> -->
        </div>
        <div class="social"></div>
        <div class="other"></div>

    </div>

    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

  </div>
</template>

<style scoped lang='scss'>
.bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background: url('https://static.zhihu.com/heifetz/assets/sign_bg.47eec442.png'),
    url('https://static.zhihu.com/heifetz/assets/sign_bg.47eec442.png') 50% 50%;
}
$containerHeight:500px;

$loginHeight:calc($containerHeight/2);

.container{
    width: 400px;
    height: $containerHeight;
    background-color: rgb(18, 17, 17);
    border-radius: 2px;
    padding: 10px;
    position: absolute;
    left: calc(50% - 400px/2);
    top:calc(50% - $containerHeight/2);
}


.container .login{
    width: 380px;
    height: $loginHeight;
    background-color: red;
    margin: 0 auto;

}

.container .agreement,
.container .social,
.container .other{
    width: 380px;
    height: calc($loginHeight/3);
    margin: 0 auto;
}

.container .agreement{
    background-color: rgb(0, 255, 13);
}

.container .agreement p{
    font-size: 14px;
}

.container .social{
    background-color: rgb(33, 59, 176);
}


.container .other{
    background-color: rgb(100, 3, 61);
}


</style>
