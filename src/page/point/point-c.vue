<template>
    <div>
        <h2>1.子组件->2.触发父组件->3.父组件的事件</h2>
        <button @click="parents">触发父组件父组件中的事件</button>
    </div>
</template>
<script>
export default {
    methods:{
        parents(){
            this.$emit('parentsClick',+(new Date()))
        }
    }
}
</script>
<style scoped>

</style>

