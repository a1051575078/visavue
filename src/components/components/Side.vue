<template>
    <aside class="fixed-part">
        <ul>
            <li>
                <el-link :underline="false" rel="nofollow" class="fixed-online" style="color:#9f9f9f" href="http://www.baidu.com">在线咨询</el-link>
            </li>
            <li @mousemove="show('qq')" @mouseleave="showDiv=''">
                <el-link :underline="false" rel="nofollow" class="fixed-qq" style="color:#9f9f9f" href="http://www.baidu.com">QQ咨询</el-link>
                <div class="fixed-con" v-show="showDiv==='qq'">
                    <span class="fixed-arrow"></span>
                    <div class="fixed-main">
                        <div class="fixed-title">
                            <h4>QQ咨询</h4>
                            <p>
                                <img src="/public/fixed-qq-img.png" alt="菲律宾签证服务中心QQ咨询"/>
                            </p>
                        </div>
                        <a href="http://www.baidu.com" rel="nofollow">
                            <img src="/public/fixed-qq.png" alt="菲律宾签证服务中心QQ咨询"/>
                        </a>
                        <p>QQ:1051575078</p>
                    </div>
                </div>
            </li>
            <li @mousemove="show('wechat')" @mouseleave="showDiv=''">
                <el-link :underline="false" rel="nofollow" class="fixed-wechat" style="color:#9f9f9f">微信咨询</el-link>
                <div class="fixed-con" v-show="showDiv==='wechat'">
                    <span class="fixed-arrow"></span>
                    <div class="fixed-main">
                        <div class="fixed-title">
                            <h4>微信咨询</h4>
                            <p>
                                <img src="/public/fixed-qq-img.png" alt="菲律宾签证服务中心微信咨询"/>
                            </p>
                        </div>
                        <img class="wechat-img" src="/public/erwei-code.png" alt="菲律宾签证服务中心微信咨询"/>
                    </div>
                </div>
            </li>
            <li @mousemove="show('phone')" @mouseleave="showDiv=''">
                <el-link :underline="false" rel="nofollow" class="fixed-tel" style="color:#9f9f9f;border-bottom: 1px solid #dedede;">电话咨询</el-link>
                <div class="fixed-con" v-show="showDiv==='phone'">
                    <span class="fixed-arrow"></span>
                    <div class="fixed-main">
                        <div class="fixed-title">
                            <h4>电话咨询</h4>
                            <p>
                                <img src="/public/fixed-tel-img.png" alt="菲律宾签证服务中心电话咨询"/>
                            </p>
                        </div>
                        <img class="pt5" src="/public/fixed-tel.png" alt="菲律宾签证服务中心电话咨询"/>
                    </div>
                </div>
            </li>
        </ul>
    </aside>
</template>
<script>
export default {
    name:'Side',
    data(){
        return {
            showDiv:'',
        }
    },
    methods:{
        show(info){
            this.showDiv=info;
        }
    }
}
</script>
<style scoped>
.fixed-online:hover:before,.fixed-qq:hover:before, .fixed-wechat:hover:before, .fixed-tel:hover:before,.fixed-apply:hover:before {
    background-position-x: -30px;
}
body,h1,h2,h3,h4,h5,h6,p,dl,dt,dd,ul,ol,li,input,textarea,th,td{
    margin: 0;
    padding: 0;
}
.fixed-title h4 {
    font-size: 16px;
    color: #333;
}
.fixed-title {
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 6px;
}
.fixed-main {
    padding: 10px;
    border: 1px solid #dedede;
    background: #fff;
}
.fixed-arrow {
    position: absolute;
    top: 15px;
    right: 5px;
    display: block;
    width: 7px;
    height: 13px;
    font-size: 0;
    background: url(/public/fixed-arrow.png) no-repeat 0 0;
}
.fixed-con {
    position: absolute;
    top: 1px;
    right: 60px;
    padding-right: 11px;
}
a{
    text-decoration: none;
    outline: none;
    color: #666;
}
li{
    display: list-item;
    text-align: -webkit-match-parent;
}
.fixed-online:before,.fixed-qq:before, .fixed-wechat:before, .fixed-tel:before,.fixed-apply:before{
    content:"";
    display:block;
    margin-top:6px;
    margin-left:15px;
    width:30px;
    height:30px;
    background: url(/public/fixed-icon.png) no-repeat;
}
.fixed-online,.fixed-qq,.fixed-tel,.fixed-wechat,.fixed-apply {
    display: block;
    width: 58px;
    height: 58px;
    border: 1px solid #dedede;
    border-bottom: none;
    background: #fff;
    font-size: 12px;
    color: #9f9f9f;
    text-align: center;
}
.fixed-part ul li{
    position: relative;
}
ul{
    list-style: none;
}
.fixed-part ul{
    padding-top: 52px;
    background: url(/public/fixed-head.png) no-repeat 0 0;
}
.fixed-part{
    position: fixed;
    top: 20%;
    right: 19px;
    z-index: 999;
}
.fixed-online:hover,.fixed-qq:hover,.fixed-tel:hover,.fixed-wechat:hover,.fixed-apply:hover{
    border-color: #409EFF;
}
.menu-line a:hover,.fixed-online:hover,.fixed-qq:hover,.fixed-tel:hover,.fixed-wechat:hover,.fixed-apply:hover,.left-menu li a:hover {
    background-color: #409EFF;
}
.fixed-online:before {
    background-position: 0 0;
}
.fixed-qq:before {
    background-position: 0 -30px;
}
.fixed-wechat:before {
    background-position: 0 -150px;
}
.fixed-tel:before {
    background-position: 0 -60px;
}
</style>