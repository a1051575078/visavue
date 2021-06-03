<template>
    <div>
        <Header class="header"></Header>
        <Side></Side>
        <Breadcrumb class="main"></Breadcrumb>
        <keep-alive>
            <router-view id="searchBar" class="main"></router-view>
        </keep-alive>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from './components/Header.vue';
import Breadcrumb from "./components/Breadcrumb.vue";
import Side from './components/Side.vue';
import Footer from "./components/Footer.vue";
export default{
    name:'Layout',
    components:{
        Header,
        Breadcrumb,
        Side,
        Footer
    },
    data(){
        return{
            color:'white',
        }
    },
    /*methods:{
        handleScroll(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            let offsetTop = document.querySelector("#searchBar").offsetTop;
            //设置背景颜色的透明读
            if (offsetTop&&scrollTop){
                this.color=`rgba(102,255,255,${scrollTop/(scrollTop+1000)})`;
            }else if(scrollTop===0){
                this.color="white";
            }
        },
    },
    mounted(){
        window.addEventListener('scroll',this.handleScroll);
    },
    //由于是在整个window中添加的事件，所以要在页面离开时摧毁掉，否则会报错
    beforeDestroy() {
        window.removeEventListener("scroll",this.handleScroll);
    }*/
}
</script>
<style scoped>
.main{
    margin:0 auto;
    width:1300px;
    word-break:break-all;
}
.header{
    height:100px;
}
</style>