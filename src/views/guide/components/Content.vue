<template>
    <div>
        <header style="text-align: center;">
            <h1 style="padding-bottom:10px;font-size:34px;font-weight:400">菲律宾签证办理流程</h1>
            <div>
                <small>来源：<router-link to="/" title="菲律宾签证办理首页" style="color: black">菲律宾签证办理首页</router-link></small>
                <small style="margin-left: 10px">发布日期：2018-03-28 16:24:33</small>
                <small style="margin-left: 10px">作者：PHP爬虫</small>
            </div>
            <el-divider></el-divider>
        </header>
        <section>
            <div v-html="content"></div>
            <el-divider></el-divider>
            <div style="display: flex;justify-content: space-between;" class="font">
                <div>
                    上一篇：<router-link to="/" style="color:#767676" title="菲律宾签证费用">菲律宾签证费用</router-link>
                </div>
                <div>
                    下一篇：<router-link to="/" style="color:#767676" title="菲律宾签证类型">菲律宾签证类型</router-link>
                </div>
            </div>
            <el-divider></el-divider>
        </section>
        <section style="display:flex;height:288px;justify-content: space-between">
            <div style="width:45%">
                <h3>最新菲律宾新闻</h3>
                <el-divider></el-divider>
                <ul>
                    <li v-for="(item,index) in newsRecommendation" :key="index" style="display: flex;justify-content: space-between">
                        <router-link :to="item.url" :title="item.title" target="_blank" class="icon-dot">
                            {{item.title}}
                        </router-link>
                        <span class="list-time">{{item.date}}</span>
                    </li>
                </ul>
            </div>
            <div style="width:45%">
                <h3>最新菲律宾新闻</h3>
                <el-divider></el-divider>
                <ul>
                    <li v-for="(item,index) in newsRecommendation" :key="index" style="display: flex;justify-content: space-between">
                        <router-link :to="item.url" :title="item.title" target="_blank" class="icon-dot">
                            {{item.title}}
                        </router-link>
                        <span class="list-time">{{item.date}}</span>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>
<script>
export default{
    name:'Content',
    data(){
        return {
            newsRecommendation:[{
                url:'/',
                title:'菲律宾什么时候可以让中国人入境',
                date:'2020-06-01'
            },{
                url:'/',
                title:'菲律宾签证费用是多少呢',
                date:'2018-04-27'
            },{
                url:'/',
                title:'菲律宾半年商务签证可以停留多长时间',
                date:'2019-05-20'
            },{
                url:'/',
                title:'菲律宾领区划分严格吗',
                date:'2020-07-20'
            },{
                url:'/',
                title:'持菲律宾旅游签证能入境几次',
                date:'2019-06-04'
            },{
                url:'/',
                title:'菲律宾旅游签证可以呆多久',
                date:'2020-04-29'
            }],
            content:`<div class="article-con clearfix pt20">
                        <p>菲律宾签证类型有很多，一般根据申请人的访问目的来发放相同类型的签证。<a href="https://phl.125visa.com/" target="_blank" class="keylink" title="菲律宾签证">菲律宾签证</a>的旅游签证和商务签证都属于个人临时访问，除此之外菲律宾还开放水手、船员签证，外国新闻工作者和记者商务签证。</p><p><br></p><p style="text-align: center;"><img src="https://khm.125visa.com/Uploads/Images/Content/catid534/2019-07/15622376010.jpg" title="菲律宾签证类型" alt="菲律宾签证类型"></p><p><br></p><p>　　办理菲律宾签证时申请者可以自己去使馆办理或者找菲律宾签证服务中心办理，不同的签证要求的申请条件也不一样。</p><p><br></p><p>　　<strong>一、菲律宾旅游签证</strong></p><p><br></p><p>　　菲律宾有很多旅游胜地，如长滩岛、海豚湾等，吸引了众多的游客前往。<a href="https://phl.125visa.com/product/13-0-0-1/" target="_blank" class="keylink" title="菲律宾旅游签证">菲律宾旅游签证</a>一般签发给想去菲律宾旅游观光的人士。菲律宾旅游签证有效期一般为三个月，停留时间有30天和59天。申请人办理菲律宾签证时，需明确自己的观光行程以及停留时间，切勿出现滞留情况。</p><p><br></p><p>　　需要注意的是，菲律宾旅游签证只能使用一次，即单次入境。如果下次还想去旅游，需要重新办理签证。</p><p><br></p><p>　　<strong>推荐阅读</strong>：<a href="/wenti/4256.html" target="_blank" title="菲律宾旅游签证好办？">菲律宾旅游签证好办吗？</a></p><p><br></p><p>　　<strong>二、菲律宾商务签证</strong></p><p><br></p><p>　　<a href="https://phl.125visa.com/product/15-0-0-1/" target="_blank" class="keylink" title="菲律宾商务签证">菲律宾商务签证</a>开放给需要在菲律宾境内进行商务活动的人士。办理商务签证需提供本国公司盖章的工作证明和公司的介绍信，且需要用英文书写或者翻译成英文。以及向时光提供菲方公司的邀请函。邀请函需要注明申请人在菲停留的时间。</p><p><br></p><p>　　菲律宾商务签证的有效期有半年和3个月的期限，可以办理多次入境。申请者可以根据自己的情况选择签证的有效期和停留期。</p><p><br></p><p>　　<strong>相关推荐：</strong><a href="/material/309.html" target="_blank" title="菲律宾商务签证材料">菲律宾商务签证材料</a></p><p><br></p><p>　　<strong>三、菲律宾水手、船员签证</strong></p><p><br></p><p>　　菲律宾是一个岛国，来菲的水手和船员人数很多，如果水手、船员来菲从事活动需要办理菲律宾的水手、船员签证。水手、船员签证的办理很简单，跟普通的旅游签证和商务签证相同，但需要提供菲方海事公司的邀请函。</p><p><br></p><p>　　<strong>四、外国新闻工作者和记者商务签证</strong></p><p><br></p><p>　　进入菲律宾境内，从事新闻采访工作的人士需要办理外国新闻工作者和记者商务签证。菲律宾对于新闻从业者要求较严，需要提供自己的简历、写过的文章、媒体组织的背景介绍等。</p><p><br></p><p>　　需要注意的是新闻记者抵达菲律宾境内时需要向菲律宾国际新闻中心报道，且接受采访和审问。</p><p><br></p><p>　　<strong>注意：</strong>办理菲律宾签证时，使馆会根据提供的材料拒签或拒收签证申请。也会根据提供的材料抽查面试。</p>                    </div>`,
        }
    }
}
</script>
<style scoped>
.list-time {
    font-size: 14px;
    color: #acabab;
    font-weight: 400;
}
a {
    font-size: 16px;
    color: #444;
    font-weight: 400;
    overflow: hidden;
    width: 310px;
    height: 30px;
}
body, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ul, ol, li, input, textarea, th, td {
    margin: 0;
    padding: 0;
}
li {
    line-height:35px;
}
ul, ol {
    list-style: none;
}
.hot-list .icon-dot:before {
    margin-right: 10px;
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
.font{
    font-size:12px;
    color:#767676;
}
.el-divider--horizontal{
    margin:10px 0;
}
</style>