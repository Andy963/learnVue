import Vue from "vue"
import VueRouter from "vue-router"
import Home from '../components/Home/Home'
import Course from '../components/Course/Course'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/Home",
      name: "Home",
      component: Home
    },
    {
      path: "/Course",
      name: "Course",
      component: Course
    }
  ]
})

export default router;
