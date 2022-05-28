<template lang="">
    <div>
       <default-layout>
           <div>
               <detail-content
                :key="productDetail._id"
                :name="productDetail.name"
                :description="productDetail.description"
                :status="productDetail.status"
                :category="productDetail.category?.name"
                :price="productDetail.price"
                :image="productDetail.image"
                :date="productDetail.createdAt"
               />
           </div>
       </default-layout>
    </div>
</template>
<script>
import DefaultLayout from '../layouts/Default.vue'
import DetailContent from '../components/DetailContent.vue'
import {ref} from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
export default {
   components:{
       DefaultLayout,
       DetailContent
   },
   setup(){
       const route = useRoute()
       let productDetail = ref({})
       const getDetailProducts = async ()=>{
            try {
                const {data} = await axios.get(`https://asm-node-js-rosy.vercel.app/api/product/${route.params.id}`)
                console.log(data);
                productDetail.value = data
            } catch (error) {
                console.log(error);
            }
       }
       getDetailProducts()
       return {productDetail}
   }
}
</script>
