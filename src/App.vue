<script setup>

import test from  "./components/test.vue"
import Header from  "./components/header.vue"
import StartScreen from "./Pages/StartScreen.vue";

</script>

<template>
  <Header />
  <router-view />

</template>

<style>
 *,html{
   margin:0;
   
 }
#app{


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

</style>