import { createStore } from "vuex";




const store = createStore({
    state:{
        answers:[],
        correctAnswers:[],
        userName:"",
        highScore:0,
        catagoryID:null,
        questionType:"",
        question:[],
    },
    mutations:{
        setQuestionType:(state, questionType)=>{
            state.questionType = questionType;
        },
        setCatagoryID:(state, ID)=>{
            state.catagoryID = ID;
        },
        setUserName:(state, name)=>{
            state.userName = name;
        },
        setNewAnswers: (state, newAnswers) =>{
            state.answers.push(newAnswers);
        },
        refrechAnswers: (state, newAnswers) =>{
            state.answers = [];
        },
        setCorrectAnswers: (state, correctAnswers) =>{
            state.correctAnswers.push(correctAnswers);
        },
        refrechCorrectAnswers: (state) =>{
            state.correctAnswers = [];
        },
        setQuestions:(state, question)=>{
            state.question.push(question);
        },
        refrechQuestion:(state)=>{
            state.question = [];
        },
        setHighScore: (state, score)=>{
            state.highScore = score;
        },
        getAllAnswers:(state)=>{
            console.log(" answers amount" + state.answers.length)
            state.answers.map(e=>{
                console.log("all elements from store: " + e + " length " + e.length)
                return e;
            });
        }
    },
    actions:{

    }
})

export default store;