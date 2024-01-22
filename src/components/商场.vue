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
        <section>
            <div class="draw">
                <img src="../assets/choujiang.jpg" alt="">
            </div>
            <div class="banner">
                <img src="../assets/王力宏.jpg" alt="">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="card">
                <div class="bg-color">
                    <div style="display: flex; align-items: center; "> 
                        <SvgIcon name="libao" width="20px" height="20px"></SvgIcon>
                        <span>新人礼包</span>
                    </div>             
                </div>

                <div class="bg-color">
                    <div style="display: flex; align-items: center; "> 
                        <SvgIcon name="qiandao" width="20px" height="20px"></SvgIcon>
                        <span>新人礼包</span>
                    </div>             
                </div>

                <div class="bg-color">
                    <div style="display: flex; align-items: center; "> 
                        <SvgIcon name="qiandao" width="20px" height="20px"></SvgIcon>
                        <span>新人礼包</span>
                    </div>             
                </div>

                <div class="bg-color">
                    <div style="display: flex; align-items: center; "> 
                        <SvgIcon name="qiandao" width="20px" height="20px"></SvgIcon>
                        <span>新人礼包</span>
                    </div>             
                </div>

            </div>
            <div class="nav">
                    <ul>
                        <li>女装</li>
                        <li>男装</li>
                        <li>童装</li>
                        <li>包包</li>
                        <li>鞋履</li>
                        <li>玩具</li>
                        <li>电器</li>
                    </ul>


            </div>
            <div class="content">
                <div class="content-item">
                    <ul>
                        <li class="img">图片</li>
                        <li class="title">标题</li>
                        <li class="box">
                            单价 数量
                        </li>
                    </ul>
                </div>

                <div class="content-item">
                    <ul>
                        <li class="img">图片</li>
                        <li class="title">标题</li>
                        <li class="box">
                            单价 数量
                        </li>
                    </ul>
                </div>

            </div>
        </section>
        <footer></footer>
    </div>
</template>
    
    
<style scoped>
section {
    padding: 20px;
    background-color: pink;
}


.content{
    display:flex;
    justify-content: space-around;

}

.content-item{


    .img{

    }

    .title{

    }

    .box{
        
    }
}

.card{
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.bg-color{
    padding: 5px;
    border-radius: 5px;
    color: #fff;
}

.bg-color:nth-child(1)
{
    background: linear-gradient(#f1690892,#bbcf04ed);
}
.bg-color:nth-child(2)
{
    background: linear-gradient(#76320292,#748ee8ed);
}

.bg-color:nth-child(3)
{
    background: linear-gradient(#b5530cd4,#3859d1ed);
}


.bg-color:nth-child(4)
{
    background: linear-gradient(#76320292,#98058ced);
}

.draw img {
    width: 100%;
    height: 150px;
    border-radius: 10px;
}


.banner {
    position: relative;
}

.nav ul{
    display: flex;
    text-align: center;
    justify-content: space-around;
    padding: 5px;
}

.nav ul li{
    background-color: #777;
}

.banner img {
    width: 100%;
    height: 250px;
}

p[bgp]
{
    display: inline-block;
}

.banner ul {
    display: flex;
    position: absolute;
    bottom: 3px;
    justify-content: center;
    width: 100%;
}

.banner ul li {
    margin: 3px;
    background-color: azure;
    border-radius: 50%;
    padding: 4px;
}


.container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 720px;
}

.search {
    display: flex;
    max-width: 720px;
    background-color: red;
    border-radius: 0px 0px 5px 5px;
    padding: 6px 0;
    justify-content: space-around;
    align-items: center;
}

.search input {
    border-radius: 5px;
    flex: 1;
    text-align: center;
    color: #777;
    border: none;
    margin: 0 10px;
}
</style>



<style></style>
