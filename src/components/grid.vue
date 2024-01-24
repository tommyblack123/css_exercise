<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue';
</script>

<template>

        <ul class="box">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>

</template>

<style scoped lang='scss'>
    .box{
display:grid;
grid-template-columns: 100px 200px 100px;

    }

</style>