<template>
    <div class="home">
        home2ss
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        console.log('组件 this is home')
    }
}
</script>
<style lang="less" scoped>
    .home{
        background: red;
        width: 100px;
        height: 200px;
        background: url('../../assets/003.jpg') no-repeat center;
    }
</style>