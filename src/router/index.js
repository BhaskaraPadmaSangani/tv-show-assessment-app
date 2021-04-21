import Vue from "vue";
import VueRouter from "vue-router";
import DisplayAllShows from "../views/DisplayAllShows.vue";
import FullDetailsOfShow from "../components/FullDetailsOfShow.vue";
import Search from "../components/Search.vue";
import PageNotFound from "../components/PageNotFound.vue";

Vue.use(VueRouter);
 
const routes=[
    {
        path: "/",
        name: "DisplayAllShows",
        component: DisplayAllShows
    },
    {
        path: "/shows/:id",
        name: "FullDetailsOfShow",
        props: true,
        component: FullDetailsOfShow
    },
    {
        path: "/search/:query",
        name: "Search",
        component: Search
      },
    {
        path: "*",
        name: "page-not-found",
        component: PageNotFound
      }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });
  
  export default router;
  