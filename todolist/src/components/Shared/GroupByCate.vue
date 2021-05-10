<template>
<div class="col-12 mt-3 d-flex align-items-center">
    <div v-for="(item, idx) in categories" :key="idx" :value="item.id" >
        <input type="checkbox" v-model="cateQuery" :value="item.id" :id="`cate-${item.id}`"/>
        <label :for="`cate-${item.id}`" class="mb-0 mr-3">{{item.text}}</label>
                
    </div>
</div>
</template>

<script>
export default {
    props: ['categories','handleFilterByGroup'],
    data () {
        return {
            cateQuery: [],
        }
    },
    watch: {
        cateQuery() {
            this.handleFilterByGroup(this.cateQuery); 
        }
    },
}
</script>

<style>

</style>