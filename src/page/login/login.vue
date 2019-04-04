<template>
    <div class="login">
        login
        <Button type="primary">Primary</Button>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        console.log('this is login')
    }
}
</script>

<style lang="less" scoped>
    .login{
        background: yellow;
        width: 300px;
        height: 300px;
        background: url('../../assets/002.png') no-repeat center;
    }
</style>