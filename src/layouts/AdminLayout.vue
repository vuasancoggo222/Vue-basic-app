<template lang="">
    <div>
        <header-admin></header-admin>
        <slot/>
        <div class="text-center py-5 bg-blue-300 ">Zulerr</div>
    </div>
</template>
<script>
import HeaderAdmin from '../components/HeaderAdmin.vue'
export default {
  components:{
      HeaderAdmin
  }  
}
</script>
<style lang="">
    
</style>