<template>
    <div>
        <Contents style="width:80%;"></Contents>
        <Aside></Aside>
    </div>
</template>
<script>
import Aside from './components/Aside.vue';
import Contents from './components/Content.vue';
export default {
    name:'Guide',
    components:{Aside,Contents}
}
</script>