import axios from 'axios'
import { createApp } from 'vue'
import { createStore } from 'vuex'
const store = createStore({
    state () {
      return {
        products : [],
        error : null
      }
    },
    mutations: {
        setProducts(state,productsPayload) {
            state.products = productsPayload
           },
        setError(state,errorPayLoad) {
            state.error = errorPayLoad
        }
    },
    actions:{
        async getAllProducts({commit}){
            try {
                const {data} = await axios.get('https://asm-node-js-rosy.vercel.app/api/products')
                console.log(data);
                commit("setProducts",data)
            } catch (error) {
                console.log(error);
                commit('setError',error)
            }
        }
    }
  })
  export default store