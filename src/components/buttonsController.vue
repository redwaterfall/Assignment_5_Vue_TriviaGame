<script setup>
</script>

<template>
    <div id="container">
        <button class="button" id="button-true">True</button>
        <button class="button" id="button-false">False</button>    
    </div>    
</template>

<style>
    #container{
        width:50vw;
        height: 20vh;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
    .button{
        width: 40%;
        height: 40%;
        border-radius: 10px;

        font-size: 140%;
        color: #F0EDEE;
    }
    #button-true{
        background-color: #90C2E7;
    }
    #button-false{
        background-color: #E5625E;
    }
    .button:hover{
        border-color: greenyellow;
    }
</style>