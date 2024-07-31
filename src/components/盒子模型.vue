<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue';
</script>

<template>


    <div class="box">

        <div class="sub"></div>

    </div>

</template>

<style scoped lang='scss'>

    .box{
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .sub{
        background-color: antiquewhite;
        width: 300px;
        height: 300px;
    }


</style>