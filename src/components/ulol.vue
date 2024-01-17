<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue';

defineProps(['name'])

</script>

<template>
  <div>

    <ul>
        <li>
            01
        </li>
    
        <li>
            02
        </li>
    </ul>


  </div>
</template>

<style scoped lang='scss'>

li{
    list-style-type: none;
}

</style>