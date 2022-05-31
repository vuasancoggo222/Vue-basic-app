<template lang="">
    <div>
        <admin-layout>
            <products-table @on-delete="handleDelete"></products-table>
        </admin-layout>
    </div>
</template>
<script>
import AdminLayout from '../../layouts/AdminLayout.vue'
import ProductsTable from '../../components/ProductsTable.vue'
import axios from 'axios'

export default {
    components:{
        AdminLayout,
        ProductsTable
    },
    setup() {
        
        const handleDelete = async (id)=>{
           try {
               const {data} = await axios.delete(`https://asm-node-js-rosy.vercel.app/api/product/${id}`)
               console.log(data);
           } catch (error) {
               console.log(error);
           }
        }
        return {handleDelete}
    }
    }
</script>
<style lang="">
    
</style>