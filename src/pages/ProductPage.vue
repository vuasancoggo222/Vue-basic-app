<template lang="">
    <div>
       <default-layout>
         <!-- Product Card List -->
          <div>
            <div v-if="products.length > 0" class="grid grid-cols-3">
              <product-list v-for="product in products"
             :key="product._id"
             :id="product._id"
             :name="product.name"
             :description="product.description"
             :price="product.price"
             :image="product.image">
              </product-list>
          </div>
          <div v-else class="mt-5 mb-10">
              <div class="text-center h-[500px]">
                <Spinner/>
                 <span class="text-black">Loading products...</span>
              </div>
          </div>
          </div>
       </default-layout>
    </div>
</template>
<script>
import ProductList from '../components/ProductList.vue'
import DefaultLayout from '../layouts/Default.vue'
import Spinner from '../components/Spinner.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  components: {
    DefaultLayout,
    ProductList,
    Spinner
  },
  setup() {
    const store = useStore()

    store.dispatch('getAllProducts')
    const products = computed(() => store.state.products)
    return { products }
  }

}
</script>
