
<script setup>
import {apiUserRegister} from "../api/users"
import { getQuestions } from "../api/questions"
import { getCatagory } from "../api/catagorys"
import { useRouter } from "vue-router"
import {useStore} from "vuex"
import store from "../store"
import {ref, reactive, onMounted, onUpdated} from "vue";

let questionCatagoryID = ref("");
let questionType = ref("");
let catagoryList = reactive([]);
const routs = useRouter();
const username = ref("")

async function onSubmit(){
    const [error, data] = await apiUserRegister(username.value,0) 
    console.log(data)
    console.log(error)
    store.commit("setUserName",username.value);
    store.commit("setCatagoryID", questionCatagoryID.value )
    store.commit("setQuestionType", questionType.value )
    routs.push('/questions');
}

onMounted(async()=>{
        store.commit('refrechCorrectAnswers');
        store.commit('refrechAnswers');
        store.commit('refrechQuestion');
        let catagory = await getCatagory("https://opentdb.com/api_category.php");
        catagory.map(c => {
            catagoryList.push( c); 
            })
        
})


</script>

<template>
    
   <div class="startScreenContainer">

    <form @submit.prevent="onSubmit"  class="startScreen">
        <fieldset id="usernameField">
            <label for="username">UserName</label>
            <input type="text" id="username" v-model="username" placeholder="Username" />
        </fieldset>
        
        
        <select v-model="questionCatagoryID"   name="questionList" id="questionListSelector">
            <option selected disabled value="">Select a Catagory</option>
            <option v-for="catagorys in catagoryList" :value="catagorys.id"  >{{ catagorys.name }}</option>
        </select>
        
        <select v-model="questionType" >
            <option selected disabled value="">Select Type</option>
            <option  value="multiple"  >Multiple Choice</option >
            <option  value="boolean"   >True / False</option >
        </select>
        
        <button id="startGameButton" type="submit" @click="setUsername">Start Game</button>

    </form>
</div> 
                         
</template>

<style>

 .startScreenContainer{
        width: 50vw;
        height:50vh;
        border: 1px solid;
        border-radius: 20px;
        background-color: #56A3A6;

        margin-top:10%;
        color:white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;

        font-family: 'Anton', sans-serif;
 }
 .startScreen{
     width: 50%;
     height:100%;

     display: flex;
     flex-direction: column;
     justify-content: space-evenly;
     align-items: center;

 }
 #usernameField{
     background-color: white;
     color:black;
     border-radius: 10px;
 }
 #startGameButton{
     width: 50%;
     height:10%;
     border: 1px solid;
     border-radius: 10px;
     background-color: #FA9500;
     color:white;

     margin-top: 10%;
 }
</style>