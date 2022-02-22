<script setup>
    import test from "../components/test.vue"
    import { getQuestions } from "../api/questions"
    import { useRouter } from "vue-router"
    import questionBox from "../components/questionBox.vue"
    import buttonsController from "../components/buttonsController.vue";

    //import store from "../store"
    import {useStore} from "vuex"

    import {ref, reactive, onMounted, onUpdated} from "vue";
    let triviaQuestion =  reactive([]);
    //let answears =  reactive([]);
    let answearsChoices =  ref([]);
    let question = ref();
    const routs = useRouter();
   
    let store = useStore();
    let currentQuestion = ref(1);
    let questionAmount = ref(0);

    let highScore = ref(0);

    onMounted(async () =>{

       let trivia = await getQuestions(store.state.catagoryID, store.state.questionType);
       
       trivia.map((t) => {
           triviaQuestion.push(t);
           })
       question.value = triviaQuestion[0].question
       store.commit('setQuestions', question.value);
       questionAmount.value = triviaQuestion.length ;
       store.commit("setQuestionType", triviaQuestion[0].type )
       if(store.state.questionType === 'multiple'){
           triviaQuestion[0].incorrect_answers.map(inco => {answearsChoices.value.push(inco) });
           answearsChoices.value.push(triviaQuestion[0].correct_answer);
           store.commit('setCorrectAnswers', triviaQuestion[0].correct_answer);
       }
       
    })
    function getNextQuestion(nextQ){
        question.value = triviaQuestion[nextQ].question

            answearsChoices.value = []
            triviaQuestion[nextQ].incorrect_answers.map(inco => {answearsChoices.value.push(inco) })
            answearsChoices.value.push(triviaQuestion[nextQ].correct_answer)

            store.commit('setCorrectAnswers', triviaQuestion[nextQ].correct_answer);
            store.commit('setQuestions', question.value);
            store.commit("setQuestionType", triviaQuestion[nextQ].type )

    }

    function next(){

        currentQuestion.value++;
        if(questionAmount.value > currentQuestion.value ){
            getNextQuestion(currentQuestion.value)
        }
        else{
            routs.push('/results');
        }
        
    }
    function setAnswears(e){
        store.commit('setNewAnswers',e.target.value);
        if(e.target.value == triviaQuestion[currentQuestion.value].correct_answer){
            highScore.value += 10;
            store.commit("setHighScore",highScore.value);
        }
        next()
    }
</script>

<template>
    <h1>Question Pages</h1>
    <p>Player {{ store.state.userName }}</p>


    <questionBox :question="question" />
 
    <div v-if="store.state.questionType === 'boolean' " id="container">
        <button value="True" class="button" id="button-true" @click="setAnswears">True</button>
        <button value="False" class="button" id="button-false" @click="setAnswears">False</button>    
    </div>

    <div v-if="store.state.questionType === 'multiple' " id="container">
        <button :value="answearsChoices[0]" class="button" id="button-true" @click="setAnswears">{{answearsChoices[0]}}</button>
        <button :value="answearsChoices[1]" class="button" id="button-false" @click="setAnswears">{{answearsChoices[1]}}</button>
        <button :value="answearsChoices[2]" class="button" id="button-true" @click="setAnswears">{{answearsChoices[2]}}</button>
        <button :value="answearsChoices[3]" class="button" id="button-false" @click="setAnswears">{{answearsChoices[3]}}</button>        
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