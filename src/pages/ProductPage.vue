<template lang="">
    <div>
       <default-layout>
           {{err}}
       </default-layout>
    </div>
</template>
<script>
import DefaultLayout from '../layouts/Default.vue'
import axios from 'axios'
import { useStore } from 'vuex'
import { computed} from 'vue'
export default {
   components:{
       DefaultLayout
   },
   setup(){
        const store = useStore ()
        store.dispatch('getAllProducts')
        const products = computed(()=> store.state.products)
        const error = computed(()=> store.state.error)
        return {products,error}
        console.log(error);
}

}
</script>

<style lang="">
    
</style>