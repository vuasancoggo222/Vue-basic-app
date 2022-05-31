<template lang="">
   <div>
       <!-- component -->
<div class="max-w-7xl mx-auto">
    <div class="inline-block min-w-full py-2 align-middle">
        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                    <tr>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">#</th>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Name</th>
                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Price</th>
                        <th scope="col" class="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">Status</th>
                        <th scope="col" class="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">Category</th>
                        <th scope="col" class="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">Description</th>
                        <th scope="col" class="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">Image</th>
                        <th scope="col" colspan="2" class="text-center text-sm font-semibold text-gray-900">Actions</th>
                    </tr>
                </thead>
                <tbody v-for="(product,index) in products" class="divide-y divide-gray-200 bg-white">
                    <tr>
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6">{{index+1}}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{product.name}}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm">
                          {{product.price}}
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm">
                            <span v-if="product.status==true" class="flex justify-center text-green-600 font-bold">
                                Còn Hàng
                            </span>
                            <span v-else class="flex justify-center text-red-600 font-bold">
                                Hết Hàng
                            </span>
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm">
                            <span class="flex justify-center">
                               {{product.category?.name}}
                            </span>
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm">
                            <span class="flex justify-center">
                               Xem chi tiết
                            </span>
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm">
                            <span class="flex justify-center">
                             <img src="https://picsum.photos/100/100" alt="">
                            </span>
                        </td>
                         <td class="whitespace-nowrap py-4 text-sm">
                            <span class="flex justify-center">
                               <button
        type="button"
        class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease
         select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
      >Sửa</button>
                            </span>
                        </td>
                         <td class="whitespace-nowrap py-4 text-sm">
                            <span class="flex justify-center">
                              <button @click="$emit('onDelete',product._id)" type="button"
        class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500
        ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
      >Xoá</button>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
   </div>
</template>
<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    emits: ['onDelete'],
    setup() {
      
        const store = useStore()
        store.dispatch('getAllProducts')
        const products = computed(() => store.state.products)
        return { products }
    }
}
</script>
<style lang="">
    
</style>