<script setup lang='ts'>
    
</script>
    
    
<template>
    <div class="container">
        <header>
            <div class="search">
                <p style="margin-top: 3px;">
                    <SvgIcon name="qiandao" width="20px" height="20px"></SvgIcon>
                </p>
        
                <input type="text" style="margin-left: 10px;" placeholder="输入商品名称">
            </div>

        </header>
        <section></section>
        <footer></footer>
    </div>
    
</template>
    
    
<style scoped>

.container{
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 720px;
}

.search{
    display: flex;
    max-width: 720px;
    background-color: red;
    border-radius: 0px 0px 5px 5px;
    padding: 6px 0;
    justify-content: space-around;
    align-items: center;
}

.search input{
    border-radius: 5px;
    flex: 0.8;
    text-align: center;
    color: #777;
    border: none;
}


</style>



<style>

</style>
