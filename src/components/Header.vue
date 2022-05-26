<template>
    <div class="header bg-sky-500 text-white py-[7px]">
        <img src="/pikachu.jpg" class="w-[50px] rounded-full ml-6 mt-2" alt="">
        <div class="flex justify-end relative bottom-[30px] mr-10">
            <li><router-link to="/">Sign In</router-link></li>
            <li><router-link to="/">Sign Up</router-link></li>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
li{
    list-style: none;
    padding-left: 25px;
}
</style>
