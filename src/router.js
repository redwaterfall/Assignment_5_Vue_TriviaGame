import { createRouter , createWebHistory } from "vue-router";
import StartScreen from "./Pages/StartScreen.vue";
import QuestionPage from "./Pages/QuestionPage.vue"
import results from "./Pages/results.vue"

const routes = [{
                    path:'/',
                    component: StartScreen ,
                },
                {
                    path:'/questions',
                    component: QuestionPage,
                },
                {
                    path:'/results',
                    component: results,
                }
]

export default createRouter({
    history: createWebHistory(),
    routes,
});