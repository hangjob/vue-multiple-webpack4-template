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
    created(next){
        console.log(next)
        this.test()
    },
    mounted(){
        console.log(2)
    },
    beforeRouteEnter(to, from, next) {
        console.log(2222)
    },
    beforeRouteUpdate(to, from, next){
        console.log(111)
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
        },
        test2() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(1)
                    resolve()
                }, 200)
            })
        },
        async test() {
            await this.test2()
        }
    }
}
</script>

<style lang="less" scoped>
   
</style>