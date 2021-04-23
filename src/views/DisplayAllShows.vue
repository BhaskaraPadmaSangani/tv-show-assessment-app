<template>
<b-container>
    <div><h4>
        <strong>This application will display all popular shows and all shows based on genres
        </strong>
        </h4>
    <div v-if="popularShows.length>0">
        <h3 class="text">Popular Shows</h3> 
        <div>
            <b-row >
                <b-col lg="2" md="4" sm="6"
                v-for="popular in popularShows" :key="popular.index" >
                <card :show="popular"></card>
                </b-col>
            </b-row>
        </div>
    </div>
    <div v-else>
        <div class="d-flex justify-content-center mb-3 spin">
        <b-spinner class="spinner" variant="success" type="grow"></b-spinner>
      </div>
    </div>
    <div v-if="genres.length>0">
        <div v-for="genre in genres" :key="genre.index">
            <h3 class="text"> {{genre.name}}</h3>
            <div>
                <b-row>
                    <b-col lg="2" md="4" sm="6"
                    v-for="show in genre.shows" :key="show.index">
                    <card  :show="show"></card>
                    </b-col>
                </b-row>
            </div>
        </div>
    </div>
    </div>
</b-container>
</template>

<script>
import Card from "../components/Card.vue";
import {getAllShows} from "../service/tvShow.api.js";
    export default {
        name: "DisplayAllShows",
        data() {
            return {
                shows: [],
                popularShows: []
            };
        },
        components:{
            Card
        },
        mounted() {
        getAllShows().then((response)=>{
            this.shows=response.data;
            this.popularShows=this.mostRatedShows(this.shows);
        });
        },
        computed:{
         genresTitle(){
             const genre= Array.from(
                 new Set(this.shows.flatMap(show=>show.genres))
             );
             return genre.sort();
         },
         genres(){
            return  this.genresTitle.map(genre=>{
                 return {
                     //Action is stored in name first
                     name: genre,
                     //from a-z 1 show name is passed if that show contains this action genre then this is
                     //sorted based on average by passing it to mostratedshow() method and again stored in shows 
                     //data propertie for printing.
                     shows: this.mostRatedShows(this.shows.filter(show=>show.genres.includes(genre)))
                 };
             });
         }
        },
        methods: {
            mostRatedShows(shows)
            {
               return shows
               .filter(show=>show.rating.average)
               .sort((previousValue,nextValue)=>
               previousValue.rating.average<nextValue.rating.average?1:-1).slice(0,20);
            }
        }  
    };
</script>

<style scoped>
h4 {
  color: rgb(80, 5, 255);
  padding-top: 10px;
  text-align: left;
  padding-left: 10px;
}
.text {
  color: rgb(30, 1, 12);
}
</style>