<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue';
</script>

<template>


    <ul class="box">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
    </ul>

</template>

<style scoped lang='scss'>
    .box{
        width: 500px;
        height: 500px;
display:grid;
grid-template-columns: repeat(3,1fr);
grid-template-rows: repeat(3,1fr);

    }

</style>