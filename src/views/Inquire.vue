<template>
    <section style="display: flex;justify-content: center;align-items:center;flex-direction:column;height:500px">
        <div class="advert-top" v-if="message">
            <!-- 喇叭图标 -->
            <div class="icon-horn"></div>
            <!-- 滚动文字区域 -->
            <div class="marquee-wrap">
                <ul class="marquee-box" ref="marqueebox">
                    <!-- 循环3次为了无缝衔接， 给第一个设置Id 方便计算文字宽度 -->
                    <li class="marquee-list" v-for="i in 3" v-html="message" :ref="i===1?'marquee':''" :id="i===1?'marquee':''"></li>
                </ul>
            </div>
        </div>
        <router-link to="/inquire" alt="菲律宾签证查询" title="菲律宾签证查询" style="margin-top: 10px">
            <img src="/public/inquire/logo.png" style="height:92px;width:272px;" alt="菲律宾签证查询" title="菲律宾签证查询"/>
        </router-link>
        <el-form :model="form" style="width:600px;margin: 10px 0 20px 0;">
            <el-form-item prop="content" :rules="[{required:true,message:'搜索框内容不能爲空'}]">
                <el-input v-model="form.content" autocomplete="off" placeholder="请输入拼音 姓 + 名 或 名 + 姓进行回車搜索，比如王伟哥wangweige 或 weigewang"></el-input>
            </el-form-item>
        </el-form>
        <el-table
            max-height="300"
            :data="tableData"
            style="width:50%">
            <el-table-column
                prop="date"
                align="center"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                align="center"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                align="center"
                label="地址">
            </el-table-column>
        </el-table>
    </section>
</template>
<script>
export default {
    name:'Inquire',
    data(){
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            form:{
                content:''
            },
            message:"尊敬的用戶您好！本數據由我司與菲律賓【Google】公司对菲律賓移民局内部數據進行合作整理，本數據僅供查詢使用！數據已更新至<span style='color: red'>2020年10月30日</span>。起始數據為2002年元月，根據姓名、出生年份、公司名稱進行精確檢索。只能查詢工作簽證、婚簽、退休簽證、移民簽證！",
        }
    },
    mounted: function () {
        // 延时滚动
        setTimeout(() => {
            this.runMarquee()
        }, 1000);
    },
    methods: {
        runMarquee() {
            // 获取文字 计算后宽度0.
            var width=this.$refs.marquee[0].clientWidth,
                marquee=this.$refs.marqueebox,
                disx=0; // 位移距离
            //设置位移
            setInterval(() => {
                disx--;//disx-=1; 滚动步长
                if (-disx>=width) {
                    disx=10; // 如果位移超过文字宽度，则回到起点  marquee-list的margin值
                }
                // marquee.style.transform = 'translateX(' + disx + 'px)'
                marquee.style.left=disx+'px'
            }, 30);//滚动速度
        }
    }
}
</script>
<style scoped>
>>>.el-input__inner {
    border-radius: 25px;
}
body,div,html,img,li,ul{margin:0;padding:0;border:0}
li{list-style:none}
.advert-top{
    position:relative;
    display:flex;
    width:100%;
    height:32px;
    color:black;
    font-size:24px;
    align-items:center
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
/* 以下代码与滚动相关 */
.marquee-wrap{position:relative;display:flex;overflow:hidden;width:100%;height:100%}
.marquee-box{position:absolute;top:50%;display:flex;white-space:nowrap;transform:translateY(-50%)}
.marquee-list{margin-right:10px} /* 此处“px”方便回到起点 */
.marquee-list span{padding:0 .04rem;color:#ffe17b;font-weight:700}
</style>