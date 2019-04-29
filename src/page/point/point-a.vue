<template>
    <div>
        <h2>这是使用$atrr进行参数的传递</h2>
        <!-- 当然这个$attrs是vue2.4，$attrs包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。
        当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定，并且可以通过 v-bind="$attrs" 传入内部组件——在创建更高层次的组件时非常有用 -->
        <input
            :value="$attrs.value"
            :placeholder="$attrs.placeholder"
            v-bind="$attrs"
            @input="$emit('input', $event.target.value)"
        />
        <!-- $listeners包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用 -->
        <PointC v-on="$listeners"></PointC>
    </div>
</template>
<script>
import PointC from './point-c.vue';
export default {
    // props:['value'],
    components:{
        PointC
    },
    data(){
        return{
            
        }
    },

    //有被子组件继承的父组件属性，不会当做特性展示在子组件根元素上面。说起来，听起来好像有些拗口，看截图看代码你就明白了
    inheritAttrs:false,

    created(){
        console.log(this.$attrs);
    },
    
    mounted(){
        console.log(this.$attrs);
    }
}
</script>
<style scoped>

</style>