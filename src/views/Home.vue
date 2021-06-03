<template>
    <div>
        <section style="height:400px;display: flex;justify-content: center;align-items: center">
            <div class="height flex">
                <div v-for="(item,indexd) in leftList" :style="{height:350/leftList.length+'px'}" class="left" :class='index===indexd?"background":""' @mousemove="move(indexd)" @mouseleave="leave()">
                    <img :src="item.url" :alt="item.alt"/>
                    <div>
                        <h4 class="delmargin title">{{item.title}}</h4>
                        <p class="delmargin size">{{item.description}}</p>
                    </div>
                </div>
            </div>
            <div class="height">
                <el-carousel style="width:750px" height="350px">
                    <el-carousel-item v-for="(item,index) in bannerList" :key="index">
                        <router-link to="/"><img :src="item.url" :alt="item.alt" style="width: 100%;height: 100%"/></router-link>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="height flex">
                <div :style="{height:350/2+'px'}" class="right">
                    <i class="ico-ts i-ts1"></i>
                    <h4 class="delmargin title">快速咨询</h4>
                    <p class="delmargin size">一分钟快速提问，三分钟响应</p>
                </div>
                <div :style="{height:350/2+'px'}" class="right">
                    <i class="ico-ts i-ts2"></i>
                    <h4 class="delmargin title">签证顾问</h4>
                    <p class="delmargin size">专业认证，实名认证</p>
                </div>
            </div>
        </section>
        <section class="layout">
            <div style="height: 260px;display: flex">
                <div :style="{width:1300/3+'px'}" style="margin-left:10px">
                    <router-link to="/" target="_blank" title="菲律宾大使馆签证中心">
                        <strong style="color: black">大使馆签证中心</strong>
                    </router-link>
                    <div style="margin-top: 10px;display: flex">
                        <router-link to="/" title="菲律宾大使馆签证中心" target="_blank">
                            <dl style="text-align: center;margin: 10px 0 0 10px">
                                <dt>
                                    <img src="/public/beijing.jpg" title="菲律宾驻北京大使馆签证中心" alt="菲律宾驻北京大使馆签证中心" style="width:85px;height:85px;border-radius: 50%;"/>
                                </dt>
                                <dd style="font-size: 16px;color: #666;font-weight: 600;">北京大使馆</dd>
                                <dd class="five-area1-p">Beijing</dd>
                            </dl>
                        </router-link>
                        <div style="margin:10px 0 0 20px;display: flex;flex-wrap: wrap;justify-content: center">
                            <router-link :style="item.istop?'margin-left:20px;':'margin:20px 0 0 20px;'" :title="item.title" :to="item.url" v-for="(item,index) in embassy" :key="index" target="_blank" style="width:120px">
                                <dl style="display:flex;justify-content:center;align-items:center">
                                    <dt>
                                        <img :src="item.src" :alt="item.title" :title="item.title" style="width:30px;height:30px;border-radius:50%;"/>
                                    </dt>
                                    <div style="margin-left: 10px">
                                        <dd class="five-area1-h">{{item.name}}</dd>
                                        <dd class="five-area1-p">{{item.englishname}}</dd>
                                    </div>
                                </dl>
                            </router-link>
                            <el-divider></el-divider>
                            <div>
                                <i class="el-icon-info"></i>
                                <span class="five-area1-p">大使馆可以接受全国范围的签证办理</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div :style="{width:1300/3+'px'}" style="margin-left:10px">
                    <ul class="title2 pb20">
                        <li v-for="(item,index) in model1List" :key="index" @mousemove="model1(item.name)">
                            <router-link :to="item.url" class="five-area1-h" target="_blank" :title="item.title" :style="{color:item.name===model1Data?'#409EFF':''}">
                                {{item.name}}
                            </router-link>
                            <el-divider direction="vertical" v-if="item.issolid"></el-divider>
                        </li>
                    </ul>
                    <ul v-for="(item,index) in model1List" v-show="item.name===model1Data" :key="index" class="list-part list-border" style="margin-top:15px;">
                        <li v-for="(items,indexd) in item.li" :key="indexd" class="modelsort">
                            <router-link class="icon-dot five-area1-h" :to="items.url" :title="items.title" target="_blank">
                                {{items.title}}
                            </router-link>
                            <span class="list-time">{{items.date}}</span>
                        </li>
                    </ul>
                </div>
                <div :style="{width:1300/3+'px'}" style=":Hidden;margin-left:10px">
                    <!-- 轮播列表 -->
                    <ul :class="{'carousel-animated':isAnimated}">
                        <li v-for="(item, index) in dataSource.slice(0,7)" :key="index" style="float:none;width: 95%;display: flex;justify-content: space-between;align-items: center;margin-top: 10px">
                            <router-link class="five-area1-h icon-horn" :to="item.url" :title="item.title" target="_blank">
                                {{item.title}}
                            </router-link>
                            <span class="list-time">{{item.date}}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div style="height: 260px;display: flex">
                <div :style="{width:1300/3+'px'}" style="margin-left:10px">
                    <ul class="title2 pb20">
                        <li v-for="(item,index) in model2List" :key="index" @mousemove="model2(item.name)">
                            <router-link :to="item.url" class="five-area1-h" target="_blank" :title="item.title" :style="{color:item.name===model2Data?'#409EFF':''}">
                                {{item.name}}
                            </router-link>
                            <el-divider direction="vertical" v-if="item.issolid"></el-divider>
                        </li>
                    </ul>
                    <div  v-for="(item,index) in model2List" :key="index" v-show="item.name===model2Data">
                        <div v-for="(items,indexd) in item.li" :key="indexd">
                            <div v-if="items.ispic" class="tw-line" style="margin-top:15px;display: flex;width: 95%">
                                <router-link :to="items.url" target="_blank" :title="items.picname" rel="nofollow">
                                    <img :src="items.img" :alt="items.picname"/>
                                </router-link>
                                <div style="margin-left: 10px;">
                                    <h4>
                                        <router-link :to="items.url" target="_blank" :title="items.title" class="five-area1-h">
                                            {{items.title}}
                                        </router-link>
                                    </h4>
                                    <p style="font-size: 12px">{{items.introduction}}</p>
                                </div>
                            </div>
                            <ul v-if="!items.ispic" class="list-part list-border">
                                <li class="modelsort">
                                    <router-link class="icon-dot five-area1-h" :to="items.url" :title="items.title" target="_blank">
                                        {{items.title}}
                                    </router-link>
                                    <span class="list-time">{{items.date}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div :style="{width:1300/3+'px'}" style="margin-left:10px">
                    <ul class="title2 pb20">
                        <li v-for="(item,index) in model3List" :key="index" @mousemove="model3(item.name)">
                            <router-link :to="item.url" class="five-area1-h" target="_blank" :title="item.title" :style="{color:item.name===model3Data?'#409EFF':''}">
                                {{item.name}}
                            </router-link>
                            <el-divider direction="vertical" v-if="item.issolid"></el-divider>
                        </li>
                    </ul>
                    <div  v-for="(item,index) in model3List" :key="index" v-show="item.name===model3Data">
                        <div v-for="(items,indexd) in item.li" :key="indexd">
                            <div v-if="items.ispic" class="tw-line" style="margin-top:15px;display: flex;width: 95%">
                                <router-link to="/" target="_blank" :title="items.picname" rel="nofollow">
                                    <img :src="items.img" :alt="items.picname"/>
                                </router-link>
                                <div style="margin-left: 10px;">
                                    <h4>
                                        <router-link :to="items.url" target="_blank" :title="items.title" class="five-area1-h">
                                            {{items.title}}
                                        </router-link>
                                    </h4>
                                    <p style="font-size: 12px">{{items.introduction}}</p>
                                </div>
                            </div>
                            <ul v-if="!items.ispic" class="list-part list-border">
                                <li class="modelsort">
                                    <router-link class="icon-dot five-area1-h" :to="items.url" :title="items.title" target="_blank">
                                        {{items.title}}
                                    </router-link>
                                    <span class="list-time">{{items.date}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div :style="{width:1300/3+'px'}" style="margin-left:10px">
                    <ul class="title2 pb20">
                        <li style="width:95%;display: flex;justify-content: space-between">
                            <router-link to="/" class="five-area1-h" target="_blank" title="菲律宾签证所需材料下载">
                                材料下载
                            </router-link>
                            <router-link to="/" target="_blank" title="菲律宾签证材料">
                                <h4 style="font-size: 12px;color: black">更多</h4>
                            </router-link>
                        </li>
                    </ul>
                    <ul class="list-part list-border" style="margin-top:10px;">
                        <li v-for="(item,index) in material" :key="index" class="modelsort">
                            <router-link class="icon-dot five-area1-h" :to="item.url" :title="item.title" target="_blank">
                                {{item.title}}
                            </router-link>
                            <span class="list-time">{{item.date}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default{
    name:'Home',
    data(){
        return {// 开启动画
            //大使館
            embassy:[{
                url:'/',
                title:'菲律宾驻上海总领事馆签证中心',
                src:'/public/shanghai.jpg',
                name:'上海领事馆',
                englishname:'Shanghai',
                istop:true
            },{
                url:'/',
                title:'菲律宾驻广州总领事馆签证中心',
                src:'/public/guangzhou.jpg',
                name:'广州领事馆',
                englishname:'Guangzhou',
                istop:true
            },{
                url:'/',
                title:'菲律宾驻重庆总领事馆签证中心',
                src:'/public/guangzhou.jpg',
                name:'重庆领事馆',
                englishname:'Chongqing',
                istop:false
            },{
                url:'/',
                title:'菲律宾驻厦门总领事馆签证中心',
                src:'/public/xiamen.jpg',
                name:'厦门领事馆',
                englishname:'Xiamen',
                istop:false
            }],
            isAnimated:false,
            // 轮播数据
            dataSource:[{
                url:'/',
                title:'菲律宾驻厦门总领事馆签证中心',
                date:'12-31'
            },{
                url:'/',
                title:'菲律宾签证常见问题',
                date:'11-31'
            },{
                url:'/',
                title:'菲律宾签证问答中心',
                date:'10-31'
            },{
                url:'/',
                title:'菲律宾签证百科',
                date:'09-31'
            },{
                url:'/',
                title:'菲律宾签证最新政策公告',
                date:'08-31'
            },{
                url:'/',
                title:'菲律宾将解除外籍人持长期签证的旅行禁令',
                date:'07-31'
            },{
                url:'/',
                title:'调整菲律宾赴华乘客核酸检测证明时限要求通知',
                date:'06-31'
            },{
                url:'/',
                title:'菲律宾将解除外籍人持长期签证的旅行禁令',
                date:'05-31'
            },{
                url:'/',
                title:'菲律宾旅游落地签证政策调整：落地后不可续签',
                date:'04-31'
            },{
                url:'/',
                title:'中国驻菲律宾使馆提醒在菲中国公民如何防范疫情',
                date:'03-31'
            },{
                url:'/',
                title:'菲律宾旅游落地签证政策调整：落地后不可续签',
                date:'02-31'
            }],
            index:'',
            material:[{
                url:'/',
                title:'菲律宾签证材料照片模板',
                date:'09-20'
            },{
                url:'/',
                title:'菲律宾签证材料出生证明模板',
                date:'08-20'
            },{
                url:'/',
                title:'菲律宾旅游签证材料',
                date:'07-20'
            },{
                url:'/',
                title:'菲律宾签证个人信息表',
                date:'06-20'
            },{
                url:'/',
                title:'菲律宾商务签证材料',
                date:'05-20'
            },{
                url:'/',
                title:'菲律宾签证材料在职证明模版',
                date:'04-20'
            }],
            model1Data:'政策公告',
            model2Data:'案例分析',
            model3Data:'常见问题',
            model3List:[{
                url:'/',
                title:'菲律宾签证常见问题',
                name:'常见问题',
                issolid:true,
                li:[{
                    url:'/',
                    title:'菲律宾商务签证可以多次往返吗？',
                    picname:'菲律宾签证常见问题汇总',
                    img:'/public/home/cjwtv.png',
                    introduction:'菲律宾商务签证经常办理的形式是单次入境，有效期为九十天，可以停留三十天，也可以申请多次往返，',
                    ispic:true
                },{
                    url:'/',
                    title:'菲律宾有免签政策吗？可以停留多少天？',
                    date:'06-20',
                    ispic:false
                },{
                    url:'/',
                    title:'只能通过使馆获得菲律宾签证吗？',
                    date:'05-20',
                    ispic:false
                },{
                    url:'/',
                    title:'申请菲律宾签证需要填写申请表吗？',
                    date:'04-20',
                    ispic:false
                },{
                    url:'/',
                    title:'菲律宾签证代办出签率高吗？',
                    date:'03-20',
                    ispic:false
                }]
            },{
                url:'/',
                title:'菲律宾签证问答中心',
                name:'问答中心',
                issolid:false,
                li:[{
                    url:'/',
                    title:'菲律宾签证被拒签后，费用会退吗？',
                    picname:'菲律宾签证在线问答汇总',
                    img:'/public/home/wdzx.png',
                    introduction:'申请菲律宾签证​时，必须缴纳一定的签证费用，包含签证费用及服务费用，一旦签证被拒签，签证的服',
                    ispic:true
                },{
                    url:'/',
                    title:'菲律宾有免签政策吗？',
                    date:'06-20',
                    ispic:false
                },{
                    url:'/',
                    title:'办理菲律宾签证必须要提供照片吗？？',
                    date:'05-20',
                    ispic:false
                },{
                    url:'/',
                    title:'携带菲律宾签证，就一定会入境吗？',
                    date:'04-20',
                    ispic:false
                },{
                    url:'/',
                    title:'办理菲律宾签证需要邀请函吗？',
                    date:'03-20',
                    ispic:false
                }]
            }],
            model2List:[{
                url:'/',
                title:'菲律宾签证案例分析',
                name:'案例分析',
                issolid:true,
                li:[{
                    url:'/',
                    title:'延女士再次申请获得菲律宾商务签证',
                    picname:'菲律宾签证案例分析',
                    img:'/public/home/syalfx.png',
                    introduction:'延女士抱着试一试的态度向使馆提出了申请，由于没有经验，在申请期间因材料出现问题被使馆拒签，延',
                    ispic:true
                },{
                    url:'/',
                    title:'蒋先生菲律宾旅游签证顺利出签',
                    date:'06-20',
                    ispic:false
                },{
                    url:'/',
                    title:'浙江户籍顺利在北京获得菲律宾签证',
                    date:'05-20',
                    ispic:false
                },{
                    url:'/',
                    title:'菲律宾商务签证顺利出签',
                    date:'04-20',
                    ispic:false
                },{
                    url:'/',
                    title:'菲律宾免签条件限制，出行需谨慎',
                    date:'03-20',
                    ispic:false
                }]
            },{
                url:'/',
                title:'菲律宾签证百科',
                name:'签证百科',
                issolid:false,
                li:[{
                    url:'/',
                    title:'电子签证出签如何使用？',
                    picname:'菲律宾签证百科',
                    img:'/public/home/syqzbk.png',
                    introduction:'电子签证就是一个电子版的签证，出签之后不需要申请人自己领取，使馆会把电子签证直接发到申请人申',
                    ispic:true
                },{
                    url:'/',
                    title:'什么是个签和团签？',
                    date:'06-20',
                    ispic:false
                },{
                    url:'/',
                    title:'什么是免签？',
                    date:'05-20',
                    ispic:false
                },{
                    url:'/',
                    title:'什么是落地签证？',
                    date:'04-20',
                    ispic:false
                },{
                    url:'/',
                    title:'什么是另纸签证？',
                    date:'03-20',
                    ispic:false
                }]
            }],
            model1List:[{
                url:'/',
                title:'菲律宾签证最新政策公告',
                name:'政策公告',
                issolid:true,
                li:[{
                    url:'/',
                    title:'菲律宾将解除外籍人持长期签证的旅行禁令',
                    date:'07-20'
                },{
                    url:'/',
                    title:'调整菲律宾赴华乘客核酸检测证明时限要求通知',
                    date:'08-29'
                },{
                    url:'/',
                    title:'菲律宾将解除外籍人持长期签证的旅行禁令',
                    date:'07-20'
                },{
                    url:'/',
                    title:'菲律宾签证代办服务中心2020年春节放假通知',
                    date:'01-20'
                },{
                    url:'/',
                    title:'菲律宾旅游落地签证政策调整：落地后不可续签',
                    date:'01-13'
                }]
            },{
                url:'/',
                title:'菲律宾签证安全提醒',
                name:'安全提醒',
                issolid:true,
                li:[{
                    url:'/',
                    title:'提醒在菲律宾中国同胞加强防护措施 遵守隔离规定',
                    date:'06-29'
                },{
                    url:'/',
                    title:'中国驻菲律宾使馆提醒在菲中国公民如何防范疫情',
                    date:'03-13'
                },{
                    url:'/',
                    title:'提醒中国公民注意菲律宾临时入境限制措施',
                    date:'02-20'
                },{
                    url:'/',
                    title:'提醒中国游客在雨季期间入境菲律宾需注意安全',
                    date:'01-20'
                },{
                    url:'/',
                    title:'提醒中国游客在雨季期间入境菲律宾需注意安全',
                    date:'01-13'
                }]
            },{
                url:'/',
                title:'菲律宾签证新闻资讯',
                name:'新闻资讯',
                issolid:false
            }],
            leftList:[{
                url:'/public/home/category-area.png',
                alt:'坐标',
                title:'签证办理',
                description:'专业的签证办理平台'
            },{
                url:'/public/home/category-specialty.png',
                alt:'箭头',
                title:'延误赔付',
                description:'签证保险，延误有赔付'
            },{
                url:'/public/home/category-ask.png',
                alt:'提问',
                title:'快速办签',
                description:'最快3天出签'
            }],
            bannerList:[{
                url:'/public/home/banner.png',
                alt:'签证办理百科'
            }],
        }
    },
    methods:{
        // 滚动动画
        scroll(){
            // 开启动画
            this.isAnimated=true;
            // 倒计时动画时间
            setTimeout(() => {
                // 将数组第一个元素添加到数组尾部
                this.dataSource.push(this.dataSource[0]);
                // 移除数组第一个元素
                this.dataSource.shift();
                // 关闭动画
                this.isAnimated=false;
                // 动画时间需要与.carousel-animated中设置的时间一致
            },500);
        },
        model1(info){
            this.model1Data=info;
        },
        model2(info){
            this.model2Data=info;
        },
        model3(info){
            this.model3Data=info;
        },
        //进入样式
        move(index){
            this.index=index;
        },
        leave(){
            this.index='';
        }
    },
    created() {
        // 开启定时器
        setInterval(this.scroll,5000);
    },
    beforeDestroy() {
        clearInterval(this.scroll());
    },
}
</script>
<style scoped>
.tw-line p {
    height: 44px;
    line-height: 22px;
    color: #666;
    overflow: hidden;
    padding-top: 5px;
}
.icon-horn:before {
    content: "";
    float: left;
    margin-right: 5px;
    font-size: 0;
    background: url(/public/icon-list.png) no-repeat;
    width: 18px;
    height: 18px;
    background-position: -1px 0;
}
.carousel-animated {
    transition: transform 0.5s;
    transform: translateY(-32px);
}
.modelsort{
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:95%;
}
.list-time {
    font-size: 12px;
    color: #999;
    font-weight: 600;
}
.icon-dot:before {
    content: "";
    float: left;
    margin-top: 14px;
    margin-right: 5px;
    width: 5px;
    height: 5px;
    font-size: 0;
    background: #e2dfdf;
    border-radius: 50%;
}
.list-part li {
    line-height: 32px;
}
.list-border li {
    border-bottom: 1px solid #d9d9d9;
}
a {
    text-decoration: none;
    outline: none;
}
li{
    float: left;
}
.title2 {
    line-height: 22px;
}
.pb20 {
    padding-bottom: 20px;
}
ul,ol{
    list-style: none;
}
.el-divider--horizontal {
    margin: 10px 0;
}
.five-area1-p {
    font-size: 12px;
    line-height: 18px;
    color: #999;
}
.five-area1-h {
    font-size: 14px;
    color: #666;
    font-weight: 600;
}
body, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ul, ol, li, input, textarea, th, td {
    margin: 0;
    padding: 0;
}
.layout{
    width:1300px;
    margin-left:auto;
    margin-right:auto;
    display: flex;
    flex-direction: column;
}
.ico-ts {
    background:url(/public/home/ico-ts.png) no-repeat;
    display: inline-block;
    vertical-align: middle;
    margin-top: -3px;
    transition: all 0.6s;
    width:60px;
    height:48px;
}
.ico-ts:hover{
    transform:scale(1.4);
}
.i-ts1{
    background-position:0 -100px;
}
.i-ts2{
    background-position:-70px -100px;
}
.flex{
    display:flex;flex-direction:column;width:260px
}
.title{
    display:block;
    font-size:18px;
    line-height:24px;
}
.size{
    font-size:12px;
    color:#bbb;
    line-height:24px;
}
.delmargin{
    margin: 0;
}
.right{
    background:#f9fafc;
    box-shadow:5px 0 10px -5px #409EFF;
    cursor:pointer;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction:column;
}
.left{
    background:#f9fafc;
    box-shadow:-5px 0 10px -5px #409EFF;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    padding-left:50px;
}
.height{
    height: 350px;
}
.background{
    background:#f2f2f2;
}
</style>