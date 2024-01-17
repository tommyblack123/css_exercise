<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue';
</script>

<template>
    <div class="contanier">
        <div v-for="(item,index) in 4" :key="index">
                {{ index+1 }}
        </div>


    </div>
</template>

<style scoped lang='scss'>
*{
    margin: 0;
    padding: 0;
}

.contanier{

    width: 1000px;
    height: 150px;
    background-color: red;
    margin: 100px auto;

    div{
        width: calc((1000px/4) - 10px*2 - 5px*2 - 10px*2);
        height: calc(150px - 10px*2 - 5px*2 - 10px*2);
        background-color: blue;
        float: left;
        padding: 10px;
        border: 5px solid red;
        margin: 10px;
    }
}

</style>