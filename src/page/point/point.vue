<template>
    <div>
        <PointA v-on:parentsClick="parentsClick" @input='handleInput' :value="value" placeholder="这是提示语...placeholder"></PointA>
        <PointB></PointB>
        <componentA></componentA>
    </div>
</template>
<script>
import PointA from './point-a.vue';
import PointB from './point-b.vue';
export default {
    components:{
        PointA,PointB
    },
    data(){
        return {
            value:'这是父组件的中的一个值...'
        }
    },
    methods:{
        //子传父
        handleInput(params){
            console.log(params);
        },
        //很深的一个子组件传递的数据
        parentsClick(params){
            console.log(params);
            this.bus.$emit('toChangeTitle','这是一个通过bus组件通信')
        }
    }
}
</script>
<style scoped>

</style>

