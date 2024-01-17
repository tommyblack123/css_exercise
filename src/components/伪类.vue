<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue';
</script>

<template>
  <div class="parent">
    
    <div v-for="(item,index) in 10" :key="index" class="child">
            {{ item }}
    </div>

  </div>
</template>

<style scoped lang='scss'>

*{
    color: red;
}

.parent{

}

.child{

}

</style>