import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../components/index.vue';
Vue.use(Router);

export function createRouter(){
    return new Router({
        mode:'history',
        fallback:false,
        scrollBehavior:()=>({y:0}),
        routes: [{
            path:'/',
            component:Layout,
            redirect:'/home',
            children:[{
                path:'/home',
                name:'Home',
                component:()=>import('../views/Home.vue'),
                meta:{
                    nav:'首页'
                }
            }]
        },{
            path:'/inquire',
            component:Layout,
            children:[{
                path:'/inquire',
                name:'Inquire',
                component:()=>import('../views/Inquire.vue'),
                meta:{
                    nav:'签证查询'
                }
            }]
        },{
            path:'/guide',
            component:Layout,
            name:'Guide',
            meta:{
                nav:'签证指南',
                breadcrumb:true
            },
            redirect:'/guide/consular',
            children:[{
                path:'/guide/consular',
                name:'Consular',
                component:()=>import('../views/guide/Consular.vue'),
                meta:{
                    nav:'领区划分',
                    breadcrumb:true
                }
            }]
        }]
    })
}