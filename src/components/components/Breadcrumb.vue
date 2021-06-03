<template>
    <nav v-if="isShow" class="font" style="margin-bottom:20px;">
        <span>当前位置：</span>
        <router-link to="/" class="color" title="菲律宾签证办理首页">
            菲律宾签证办理首页
        </router-link>
        <i class="el-breadcrumb__separator el-icon-arrow-right"></i>
        <div v-for="item in breadList" :key="item.path">
            <router-link :to="item.path" class="color" :title="item.meta.nav">
                {{item.meta.nav}}
            </router-link>
            <i class="el-breadcrumb__separator el-icon-arrow-right"></i>
        </div>
        <span>{{title}}</span>
    </nav>
</template>
<script>
export default{
    data(){
        return {
            breadList:[],// 路由集合
            isShow:true,
            title:'列表'
        };
    },
    watch:{
        $route(){
            this.getBreadcrumb();
        }
    },
    methods:{
        getBreadcrumb(){
            let matched=this.$route.matched.filter(item=>item.meta.nav && item.meta && item.meta.breadcrumb);
            console.log(this.$route);
            const length=matched.length;
            if(length){
                if(length===1){
                    this.title='列表';
                }else{
                    this.title='正文';
                }
                this.isShow=true;
            }else{
                this.isShow=false;
            }
            this.breadList = matched;
        }
    },
    created() {
        this.getBreadcrumb();
    }
};
</script>
<style>
.font{
    font-size: 14px;
    display: flex;
    align-items: center;
}
.color{
    color: black;
    font-weight: 600;
}
a{
    text-decoration: none;
}
</style>