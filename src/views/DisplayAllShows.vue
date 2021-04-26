<template>
  <b-container>
    <div>
      <h4>
        <strong
          >This application will display all popular shows and all shows based
          on genres
        </strong>
      </h4>
      <div v-if="popularShows.length > 0">
        <b-button variant="warning"> <h2>Popular Shows</h2></b-button>
        <div>
          <b-row>
            <b-col
              lg="2"
              md="4"
              sm="6"
              v-for="popular in popularShows"
              :key="popular.index"
              class="myColumn"
            >
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
      <div v-if="genres.length > 0">
        <div v-for="genre in genres" :key="genre.index">
          <b-button variant="warning">
            <h5>{{ genre.name }}</h5>
          </b-button>
          <div>
            <b-row>
              <b-col
                lg="2"
                md="4"
                sm="6"
                v-for="show in genre.shows"
                :key="show.index"
                class="myColumn"
              >
                <card :show="show"></card>
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
import { getAllShows } from "../service/tvShow.api.js";
export default {
  name: "DisplayAllShows",
  data() {
    return {
      shows: [],
      popularShows: [],
    };
  },
  components: {
    Card,
  },
  mounted() {
    // To getAllShows data from the api
    getAllShows().then((response) => {
      this.shows = response.data;
      this.popularShows = this.topRatedShows(this.shows);
    });
  },
  computed: {
    // To get all genres title
    genresTitles() {
      const genre = Array.from(
        new Set(this.shows.flatMap((show) => show.genres))
      );
      return genre.sort();
    },
    // Based on genre to get shows in sorted order by passing them to topRatedShows()
    genres() {
      return this.genresTitles.map((genre) => {
        return {
          name: genre,
          shows: this.topRatedShows(
            this.shows.filter((show) => show.genres.includes(genre))
          ),
        };
      });
    },
  },
  methods: {
    // method to sort all shows based on rating
    topRatedShows(shows) {
      return shows
        .filter((show) => show.rating.average)
        .sort((previousValue, nextValue) =>
          previousValue.rating.average < nextValue.rating.average ? 1 : -1
        )
        .slice(0, 20);
    },
  },
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
  text-align: center;
  color: rgb(112, 12, 184);
}
.myColumn {
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>