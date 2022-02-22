<script setup >
import {ref} from "vue";
let num = ref(1);

function count(){
    num.value++;
}
</script>

<template>
    <h1>Hello world!!!</h1>
    <p>firs vue app!!!</p>
    <p>{{num}}</p>
    <button v-on:click="count">Click me</button>
</template>