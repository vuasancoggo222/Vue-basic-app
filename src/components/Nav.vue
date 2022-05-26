<template lang="">
    <div class="mt-[25px] w-[75%] mb-[15px] shadow-lg shadow-cyan-200/20 opacity-80 mt-3 rounded-md nav ml-[30px] border-solid border-2 border-sky-500 pb-[25px] bg-indigo-200">
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link :to="{name: 'list-route'}">List</router-link></li>
                <li><router-link :to="{name : 'admin-route'}">Admin</router-link></li>
                <li><router-link :to="{name: 'about-route'}">About</router-link></li>
            </ul>
        </nav>
    </div>
</template>
<style>
nav ul li{
margin: 25px 25px 0 0;
padding-left: 20px;
display : inline-block;

}
nav ul li:hover{
text-decoration: underline;
}
nav ul li a{
  
}
</style>
