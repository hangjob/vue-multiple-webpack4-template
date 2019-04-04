<template>
    <div class="news">
        <Tag color="orange">桔子{{orange}}</Tag>
        <Input search enter-button="加桔子"  placeholder="Enter something..." @on-search="orangeAdd" />
        <Tag color="orange">芒果{{mango}}</Tag>
        <Input search enter-button="异步加芒果"  placeholder="Enter something..." @on-search="mangoAdd" />
        <Button type="primary" @click="timeoutCa">async测试同步代码,延时3秒钟</Button>
    </div>
</template>
<script>
import { mapGetters,mapMutations,mapActions } from  'vuex'
import { async } from 'q';
export default {
    data(){
        return{
        }
    },
    computed:{
        ...mapGetters(['orange','mango']),
    },
    mounted(){

    },
    methods:{
        //这里有好几种写法方式请参考官网--https://vuex.vuejs.org/zh/guide/mutations.html
        ...mapMutations(['ORANGE']),
        ...mapActions(['asyncMango']),
        orangeAdd(){
            this.ORANGE(10)
        },
        mangoAdd(){
           this.asyncMango(20)  
        },
        timeout(){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve(10)
                },3000)
            })
        },
        async timeoutCa(){
            var num = await this.timeout();
            console.log(num);
        }
    }
}
</script>

<style lang="less" scoped>
   
</style>