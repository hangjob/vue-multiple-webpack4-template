<template>
    <div>
        <h1>ref传值b</h1>
        <p>这是来自point-ref-a的页面<strong>{{msg}}</strong></p>
    </div>
</template>
<script>
export default {
    props:['msg'],
    data(){
        return {
        }
    },
    mounted(){
      
    },
    methods:{
        getMsg(){
            alert(this.msg);
        }
    }
}
</script>
<style scoped>

</style>