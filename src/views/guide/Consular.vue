<template>
    <div>
        <div style="width:80%;">
            <header style="text-align: center;">
                <h1 style="padding-bottom:10px;font-size:34px;font-weight:400">菲律宾大使馆签证中心</h1>
                <el-divider></el-divider>
                <p>菲律宾大使馆对申请者所选领区无严格限制，即可全国受理，申请者就近选择领区办理即可。</p>
            </header>
            <section style="display:flex;flex-wrap: wrap;justify-content: space-between">
                <div v-for="(item,index) in areaList" :key="index" :style="{width:99/3+'%',border:borderData===item.name?'1px solid #409EFF':''}" class="box" @mousemove="border(item.name)" @mouseleave="borderData=''">
                    <router-link :to="item.url" :title="item.title" style="height: 100%">
                        <div style="display: flex;justify-content: center;align-items: center;padding: 20px 20px 20px 20px">
                            <img :src="item.img" :alt="item.title" :title="item.title"/>
                            <h4 style="font-size:24px">{{item.name}}</h4>
                        </div>
                        <div style="padding:0 20px 20px 20px">
                            <div style="line-height:32px;color:black;text-align:left">
                                <span>领区：</span>
                                <span>{{item.area}}</span>
                            </div>
                        </div>
                        <div style="padding:0 20px 20px 20px">
                            <div style="line-height:32px;color:black;text-align:left">
                                <span>地址：</span>
                                <span>{{item.address}}</span>
                            </div>
                        </div>
                    </router-link>
                </div>
            </section>
        </div>
        <Aside></Aside>
    </div>
</template>
<script>
import Aside from "./components/Aside.vue";
export default{
    name:'Consular',
    components:{Aside},
    data(){
        return {
            borderData:'',
            areaList:[{
                url:'/',
                name:'北京大使馆',
                title:'菲律宾驻北京大使馆签证中心',
                img:'/public/beijing.jpg',
                area:'北京市 天津市 河北省 山西省 内蒙古 辽宁省 吉林省 黑龙江省 山东省 河南省 四川省 西藏 陕西省 甘肃省 宁夏 新疆',
                address:'中国北京建国门外秀水北街23号'
            },{
                url:'/',
                name:'上海领事馆',
                title:'菲律宾驻上海总领事馆签证中心',
                img:'/public/shanghai.jpg',
                area:'上海市 江苏省 浙江省 安徽省 湖北省',
                address:'上海市长宁区延安西路1160号（番愚路口）首信银都广场301室'
            },{
                url:'/',
                name:'广州领事馆',
                title:'菲律宾驻广州总领事馆签证中心',
                img:'/public/guangzhou.jpg',
                area:'湖南省 广东省 广西 海南省',
                address:'广州市环市东路339号广东国际大饭店7楼706-712'
            },{
                url:'/',
                name:'重庆领事馆',
                title:'菲律宾驻重庆总领事馆签证中心',
                img:'/public/chongqing.jpg',
                area:'重庆市 贵州省 云南省',
                address:'重庆市渝中区邹容路大都会商厦29楼2903-2905'
            },{
                url:'/',
                name:'厦门领事馆',
                title:'菲律宾驻厦门总领事馆签证中心',
                img:'/public/xiamen.jpg',
                area:'福建省 江西省',
                address:'厦门市莲花新村凌香里2号'
            }]
        }
    },
    methods:{
        border(info){
            this.borderData=info;
        }
    }
}
</script>
<style scoped>
img {
    width: 77px;
    height: 77px;
    margin-right: 16px;
    border-radius: 50%;
}
.box{
    display: flex;
    flex-direction: column;
    text-align: center;
    height:360px;
    border: 1px solid #d0cfcf;
    border-radius: 5px;
    margin-bottom:0.2%;
}
body, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ul, ol, li, input, textarea, th, td {
    margin: 0;
    padding: 0;
}
p{
    line-height: 74px;
    font-size: 16px;
    color: #666;
}
.el-divider--horizontal{
    margin:10px 0;
}
</style>