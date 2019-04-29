<template>
    <div>bb</div>
</template>
<script>
export default {
    mounted(){
        //this.$bus.$on需要在created中使用，否则不会生效
        // this.$bus.$on('add', this.handleAddRandom);
        
        // 这里监听其他组件所调用的 toChangeTitle 事件
        this.bus.$on('toChangeTitle', function (params) {
            console.log(params)
        })
    }
}
</script>
<style scoped>

</style>

