<template>
    <div>
        <h1>$parent传值a</h1>
        <PointParentB></PointParentB>
    </div>
</template>
<script>
import PointParentB from './point-parent-b.vue';
export default {
    components:{
        PointParentB
    },
    data(){
        return {
            msg:'这是通过parent传递'
        }
    },
    mounted(){
       
    },
    methods:{
        getMsg(){
            alert(this.msg)
        }
    }
}
</script>
<style scoped>

</style>

