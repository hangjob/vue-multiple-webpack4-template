<template>
    <div>
        <h1>$parent传值b</h1>
        <p>这是来自point-parent-a的页面<strong>{{$parent.msg}}</strong></p>
        <button @click="clickMsg">触发ponit-parent-b中的方法</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
        }
    },
    mounted(){
      
    },
    methods:{
        clickMsg(){
            this.$parent.getMsg();
        }
    }
}
</script>
<style scoped>

</style>