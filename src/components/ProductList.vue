<template lang="">
                <router-link :to="{name: 'detail-route',params:{id : id}}">
                  <div>
                <div class=" py-6">
  <div class="flex max-w-md bg-white ml-7 shadow-lg rounded-lg overflow-hidden ">
    <div class="w-1/3 bg-cover" :src="image">
    </div> 
    <div class="w-2/3 p-4">
      <h1 class="text-gray-900 font-bold text-2xl">{{name}}</h1>
      <p class="mt-2 text-gray-600 text-sm">{{description}}</p>
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
        <h1 class="text-gray-700 font-bold text-xl">{{price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}}</h1>

        <button class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Add to Card</button>
      </div>
    </div>
  </div>
            </div>
            </div>
                </router-link>
</template>
<script>
export default {
 props:{
   name:{
     required : true,
     type : String
   },
   price:{
     required : true,
     type : Number
   },
   description:{
     required : true,
     type : String
   },
   image:{
     required : true,
     type : String
   },
   id:{
     required : true,
     type : String
   }
 }
}
</script>
<style lang="">
    
</style>