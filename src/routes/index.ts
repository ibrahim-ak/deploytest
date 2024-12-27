
import HelloWorld from "@/components/HelloWorld.vue"
import LogIn from "@/components/LogIn.vue"
import NotFound from "@/components/NotFound.vue"
import SideBar from "@/components/SideBar.vue"
import { createRouter, createWebHistory } from "vue-router"


const routes= [
     {

          path: '/login',
          name: 'login',
          component: LogIn
     },
     {

          path: '/deploytest',
          name: 'helloword',
          component: HelloWorld
     },
     {
          path:'/sidebar',
          name: 'SideBar',
          component: SideBar
     },

     {
          path: "/:pathMatch(.*)*", // Catch-all route
          name: "notfound",
          component: NotFound, // 404 page component
        },
]

const router = createRouter({
     history: createWebHistory(),
     routes: routes
})
export default router
