<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue';
</script>

<template>
    <div class="contanier">

        <p>123</p>

    </div>
</template>

<style scoped lang='scss'>
*{
    margin: 0;
    padding: 0;
}
.contanier{
    width: 100px;
    height: 100px;
    padding: 10px;
    background-color: skyblue;
    background-clip: content-box;
    border: 1px dotted;

    p{
        width: 100px;
    }
}

</style>