<script setup lang="ts">

</script>

<template>
     <div class="min-h-screen bg-stone-200 ">
          <div class="flex justify-between items-center p-2  bg-white" >
               <h1>
                    Flowless logo
               </h1>
               <ul class="flex w-2/12 justify-between">
                    <li class="bg-stone-200 rounded-md p-2">
                         <router-link to="/login">Login</router-link>
                    </li>
                    <li class="bg-stone-200 rounded-md p-2">
                         <router-link to="/sidebar">SideBar</router-link>
                    </li>
               </ul>
          </div>
          <router-view/>
     </div>
</template>

<style scoped></style>
