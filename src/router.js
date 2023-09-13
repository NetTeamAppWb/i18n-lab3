
import {createRouter, createWebHistory} from "vue-router";
import homePage from "@/components/home-page.vue";
import homeNetTeam from "@/components/HomeNetTeam.vue";
import registerNetTeam from "@/components/RegisterNetTeam.vue";
import notFount from "@/components/not-fount.vue";
import userList from "@/components/user-list.vue";

const routes =[
    {path:"/",component:homePage},
    {path:"/home",component:homeNetTeam},
    {path:"/register",component:registerNetTeam},
    {path:"/:pathMatch(.*)*",component:notFount},
    {path:"/users",component:userList},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;