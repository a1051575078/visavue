<template>
    <aside class="fixed">
        <div class="header">
            <h2>签证指南</h2>
            <p>THE VISA GUIDE</p>
        </div>
        <!-- 菜单列表 -->
        <ul class="mt10">
            <li v-for="(item,index) in guideList" :key="index" @mousemove="list(item.title)" @mouseleave="guide=''" @click="clickList(item.title)">
                <router-link :to="item.url" :title="item.title" :id="guide===item.title?'background':''" :style="{background:clickGuide===item.title?'#409EFF':''}">
                    <i :class="item.icon">{{item.title}}</i>
                </router-link>
            </li>
        </ul>
    </aside>
</template>
<script>
export default {
    name:'Aside',
    data(){
        return {
            clickGuide:'领区划分',
            guide:'领区划分',
            guideList:[{
                url:'/guide/consular',
                title:'领区划分',
                icon:'el-icon-s-order'
            },{
                url:'#',
                title:'办理流程',
                icon:'el-icon-help'
            },{
                url:'#',
                title:'签证类型',
                icon:'el-icon-edit-outline'
            },{
                url:'#',
                title:'办理时间',
                icon:'el-icon-date'
            },{
                url:'#',
                title:'签证费用',
                icon:'el-icon-reading'
            },{
                url:'#',
                title:'照片要求',
                icon:'el-icon-picture-outline'
            },{
                url:'#',
                title:'签证加急',
                icon:'el-icon-mobile'
            },{
                url:'#',
                title:'签证免签',
                icon:'el-icon-collection-tag'
            },{
                url:'#',
                title:'落地签证',
                icon:'el-icon-guide'
            }]
        }
    },
    methods:{
        clickList(info){
            this.clickGuide=info;
        },
        list(info){
            this.guide=info;
        }
    }
}
</script>
<style scoped>
.fixed{
    width:200px;
    position: fixed;
    top:17%;
    right:15%;
}
#background{
    background:#f9fafc;
}
li a{
    display: block;
    line-height: 50px;
    text-align:center;
    background:#fff;
    border-radius: 4px;
    font-size: 16px;
    color: #2b3c56;
}
.mt10 {
    margin-top: 10px;
}
ul, ol {
    list-style: none;
}
body, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ul, ol, li, input, textarea, th, td {
    margin: 0;
    padding: 0;
}
li{
    margin-bottom:10px;
}
p{
    font-size:14px;
    color:#fff;
}
h2{
    font-size:18px;
    color:#fff;
}
.header{
    height:66px;
    border-radius:4px;
    background:#409EFF;
    margin-bottom:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
</style>