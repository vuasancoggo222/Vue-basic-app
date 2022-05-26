<template lang="">
    <div>
        <header-component></header-component>
        <nav-bar></nav-bar>
        <div class="main">
            <slot/>
        </div>
        <footer-component></footer-component>
    </div>
</template>
<script>
import HeaderComponent from '../components/Header.vue'
import FooterComponent from '../components/Footer.vue'
import NavBar from '../components/Nav.vue'
export default {
    components:{
        HeaderComponent,
        FooterComponent,
        NavBar,
    }
}
</script>
<style lang="">
    
</style>