<template lang="">
    <div>
       <default-layout>
            <div class="grid grid-cols-3">
                <div v-for="product in products">
                <div class="py-6">
  <div class="flex max-w-md bg-white ml-7 shadow-lg rounded-lg overflow-hidden ">
    <div class="w-1/3 bg-cover" v-bind:src="product.image">
    </div> 
    <div class="w-2/3 p-4">
      <h1 class="text-gray-900 font-bold text-2xl">{{product.name}}</h1>
      <p class="mt-2 text-gray-600 text-sm">{{product.description}}</p>
      <div class="flex item-center mt-2">
        <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
      </div>
      <div class="flex item-center justify-between mt-3">
        <h1 class="text-gray-700 font-bold text-xl">{{product.price}}</h1>
        <button class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Add to Card</button>
      </div>
    </div>
  </div>
            </div>
            </div>
            </div>
       </default-layout>
    </div>
</template>
<script>
import DefaultLayout from '../layouts/Default.vue'
import axios from 'axios'
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
    components: {
        DefaultLayout
    },
    setup() {
        const store = useStore()
        store.dispatch('getAllProducts')
        const products = computed(() => store.state.products)
        const error = computed(() => store.state.error)
        return { products, error }
        console.log(error);
    }

}
</script>

<style lang="">
    
</style>