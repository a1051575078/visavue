<template>
    <header>
        <nav style="display:flex;justify-content: space-between;align-items:center;height:100%;box-shadow: 0 2px 20px #888888;min-width: 1500px">
            <router-link to="/" style="padding-left:5%">
                <img src="/public/logo.png" alt="菲律宾签证办理" title="菲律宾签证办理">
            </router-link>
            <ul style="padding-right:5%">
                <li v-for="(item,index) in navigation" :key="index" @click="selected(item.title)">
                    <router-link :to="item.path" class="button clockwise both" :class="{active:active===item.title}">{{item.title}}</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default{
    name:'Header',
    data(){
        return{
            active:'首页',
            navigation:[{
                title:'首页',
                path:'/home'
            },{
                title:'签证查询',
                path:'/inquire'
            },{
                title:'菲律宾时政',
                path:'/political'
            },{
                title:'常见问题',
                path:'/problem'
            },{
                title:'材料下载',
                path:'/download'
            },{
                title:'签证指南',
                path:'/guide'
            }]
        }
    },
    methods:{
        selected(title){
            this.active=title;
        }
    },
    watch:{
        $route(to,from){
            this.active=to.meta.nav;
        }
    },
    mounted(){
        this.active=this.$route.meta.nav;
    },
}
</script>
<style scoped>
.active{
    color:#409EFF !important;
}
ul,ul li{
    list-style: none;/* 将默认的列表符号去掉 */
    padding: 0;/* 将默认的内边距去掉 */
    margin: 0;/* 将默认的外边距去掉 */
}
ul li{
    float:left; /* 往左浮动 */
}
ul li a{
    display: block;
    /* 如果是中英文混排的文字，建议用固定宽度
    width:150px;
    height:30px;
    line-height:30px;
    text-align:center;
    */
    text-decoration:none;
}
.button {
    position: relative;
    cursor: pointer;
    color: black;
    font-size: 1.5em;
    padding: 0.5em 1em 0.65em;
    margin: 0 10px;
}
.button:nth-of-type(1):before,.button:nth-of-type(1):after{
    background-color: #409EFF;
}
.button:before,.button:after{
    position: absolute;
    content: "";
    display: block;
    -webkit-transition: -webkit-transform 0.3s;
    transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
    transition: transform 0.3s, -webkit-transform 0.3s;
}
.button.both:before,.button.both:after{
    left: 0;
    width: 100%;
    height: 2px;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
}
.button.both:before{
    top: 0;
}
.button.both:after {
    bottom: 0;
}
.button.both:hover:before, .button.both:hover:after {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
}
.button.both.clockwise:before {
    -webkit-transform-origin: right center;
    transform-origin: right center;
}
.button.both.clockwise:after {
    -webkit-transform-origin: left center;
    transform-origin: left center;
}
.button.both.clockwise:hover:before {
    -webkit-transform-origin: left center;
    transform-origin: left center;
}
.button.both.clockwise:hover:after {
    -webkit-transform-origin: right center;
    transform-origin: right center;
}
</style>