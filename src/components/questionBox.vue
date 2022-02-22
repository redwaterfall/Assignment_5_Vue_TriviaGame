<script setup>
import { defineProps } from 'vue';
const props = defineProps({
        question: {
                type: String,
                //required: true,
                default: 'John Doe'
  },})

</script>

<template>
    <div id="questionBox" :key="question">
        
        <p>{{question}}</p>
        
        </div>
</template>



<style>
#questionBox{
    width: 80vw;
    height: 50vh;
    border: 1px solid;
    border-radius: 20px;
    font-size: larger;
    font-size: 50px;
    background-color: #56A3A6;
    color: #FCF7F8;
    padding: 80px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>