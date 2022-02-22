<script setup>
import {useStore} from "vuex"
import store from "../store"
import {apiUserSetHighScore} from "../api/users"
import {ref, reactive, onMounted, computed} from "vue";
import { useRouter } from "vue-router"

const routs = useRouter();
const correctAnswers = computed(()=>store.state.correctAnswers)


onMounted(async () =>{
    const [error, user] = await apiUserSetHighScore(store.state.userName,store.state.highScore);
})
function goToStar(){
    routs.push('/');
}
</script>

<template>
<h1>Results</h1>

    <p>Player: {{ store.state.userName }} Score: {{ store.state.highScore }}</p>

    <div id="displayResults">
        
        <div class="ResultsContainer">
            <p>Questions</p>
            <ul>
                <li v-for="item in store.state.question" :key="item.id">{{item}}</li>
            </ul>
        </div>
        <div class="ResultsContainer">
            <p>Correct Answers</p>
            <ul>
                <li v-for="item in store.state.correctAnswers" :key="item.id">{{item}}</li>
            </ul>
        </div>

        <div class="ResultsContainer">
            <p>Answers</p>
            <ul>
                <li v-for="item in store.state.answers" :key="item.id">{{item}}</li>
            </ul>
        </div>

    </div>

    <button id="returnToStartButton" @click="goToStar">Return to start</button>
</template>

<style>
    #displayResults{
        width:90vw;
        height:40vw;
        border:1px solid;
        border-radius: 6px;

        background-color: #56A3A6;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
     #returnToStartButton{
        width: 10%;
        height:100%;
        border: 1px solid;
        border-radius: 10px;
        background-color: #FA9500;
        color:white;


    }
    .ResultsContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>