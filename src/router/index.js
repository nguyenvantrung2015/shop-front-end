import Vue from "vue";
import Router from "vue-router";
import Home from "../views/HelloWorld";

Vue.use(Router);

const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home
    }
];

const router = new Router({
    routes
});

export default router;