<template>
    <div class="home">
        home2ss
        <img src="https://www.vipbic.com/uploads/20181029/ea10da94c6e00cee57092785366b5fd2.jpg">
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