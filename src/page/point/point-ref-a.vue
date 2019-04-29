<template>
    <div>
        <h1>ref传值a</h1>
        <PointRefB ref="refb" :msg="'我是ponit-ref-a中的值'"></PointRefB>
        <button @click="getClick">触发ponit-ref-b中的方法</button>
    </div>
</template>
<script>
import PointRefB from './point-ref-b.vue';
export default {
    components:{
        PointRefB
    },
    mounted(){
       
    },
    methods:{
        getClick(){
            this.$refs.refb.getMsg()
        }
    }
}
</script>
<style scoped>

</style>

